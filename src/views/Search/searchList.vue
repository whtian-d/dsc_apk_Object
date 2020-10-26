<!-- 搜索列表页 -->
<template>
  <div class="searchlist" ref="search">
    <Header />
    <div style="height: 5rem"></div>
    <goodsort />
    <goods :datalist="datalist" />
    <p v-if="this.$store.state.selectNUll" class="nodata">没有更多数据了</p>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../Category/components/Header";
import goodsort from "../Category/components/goodsSort";
import goods from "../Category/components/goods";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Header, goodsort, goods },
  data() {
    //这里存放数据
    return {
      page: 1,
    };
  },
  //监听属性 类似于data概念
  computed: {
    datalist() {
      console.log(this.$store.state.searchlistData);
      return this.$store.state.searchlistData;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    fn() {
      if (
        window.screen.height + window.pageYOffset >
          this.$refs.search.offsetHeight &&
        this.$store.state.lanfalg
      ) {
        this.page++;
        this.qingqiu();
        // console.log(111111);
      }
    },
    qingqiu() {
      this.$store.dispatch("setsearchlistData", {
        keywords: this.$route.query.keywords,
        size: 10,
        page: this.page,
        sort: "goods_id",
        order: "desc",
      });
    },
  },
  mounted() {
    this.qingqiu();
    // this.$refs.search.addEventListener("touchmove", this.fn, false);
    window.addEventListener("scroll", this.fn, false);
  },
  destroyed() {
    window.removeEventListener("scroll", this.fn, false);
  },
};
</script>
<style lang='less'>
.nodata {
  text-align: center;
  font-size: 1.4rem;
  color: #ccc;
}
</style>