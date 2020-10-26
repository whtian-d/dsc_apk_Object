<!-- 分类详情页 -->
<template>
  <div class="">
    <Header />
    <div style="height: 5rem"></div>
    <categorySort />
    <goods :datalist="datalist" v-if="this.$store.state.isSuccess" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./Header";
import categorySort from "./goodsSort";
import goods from "./goods";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Header, categorySort, goods },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    datalist() {
      return this.$store.state.goodsData;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  mounted() {
    this.$store.dispatch("getgoodsData", {
      id: this.$route.params.id,
      sort: "shop_price",
      order: "desc",
      page: 1,
    });
  },
  destroyed() {
    this.$store.commit("setdescory");
  },
};
</script>
<style>
</style>