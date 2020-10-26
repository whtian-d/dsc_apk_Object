<!-- 首页-家用电器 -->
<template>
  <div class="" ref="app">
    <childTitle />
    <div style="height: 10px"></div>
    <goods :datalist="indexgoods" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import childTitle from "../components/childcategory";
import goods from "../../Category/components/goods";
import { getgoodsData1 } from "@/api/goodsDetails";
import { Indicator } from "mint-ui";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { childTitle, goods },
  data() {
    //这里存放数据
    return {
      num: 1,
      flag: true,
      indexgoods: [],
    };
  },
  computed: {},
  methods: {
    async getgoodsdata() {
      console.log(this.$route.query.cat_id);
      var obj = {
        id: this.$route.query.cat_id,
        page: this.num,
        sort: "goods_id",
        order: "desc",
      };
      var result = await getgoodsData1(obj);
      if (result.data.length != 0) {
        if (obj.page > 1) {
          this.indexgoods = this.indexgoods.concat(result.data);
        } else {
          this.indexgoods = result.data;
        }
        this.flag = true;
      } else {
        this.flag = false;
      }
      Indicator.close();
    },
    lanjiazai() {
      if (
        window.pageYOffset + window.screen.height >
          this.$refs.app.offsetHeight + 148 &&
        this.flag
      ) {
        this.flag = false;
        this.num++;
        Indicator.open("加载中...");
        this.getgoodsdata();
      }
    },
  },
  mounted() {
    console.log(this.$route.query.cat_id);
    this.$store.dispatch("setIndexChildTitle", this.$route.query.cat_id);
    this.getgoodsdata();
    window.addEventListener("scroll", this.lanjiazai, false);
  },
  destroyed() {
    window.removeEventListener("scroll", this.lanjiazai, false);
  },
  watch: {
    $route(to, from) {
      console.log(from);
      console.log(to);
      this.$store.dispatch("setIndexChildTitle", to.query.cat_id);
      this.getgoodsdata();
    },
  },
};
</script>
<style>
</style>