<!--  -->
<template>
  <div>
    <Homeheader />
    <div style="height: 4.4rem"></div>
    <HomeNav />
    <div style="height: 4.4rem"></div>
    <router-view></router-view>
    <div style="height: 4.9rem"></div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import Homeheader from "./components/Homeheader";
import HomeNav from "./components/HomeNav";
import ajax from "@/api/ajax.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Homeheader,
    HomeNav,
  },
  data() {
    //这里存放数据
    return {
      a: "123123",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  mounted() {
    if (this.$route.path != "/home/indexs") {
      this.$router.push("/home");
    }
    ajax(
      "/api/visual/view",
      { id: 3, type: "index", device: "h5" },
      "post"
    ).then((d) => {
      var data = JSON.parse(d.data.data);
      var swiperdata = data[2];
      this.$store.commit("setIndexSwiperdata", swiperdata.data);
      // 提交轮播列表数据
      this.$store.commit("setswiperlistdata", data[3].data.list);
      // console.log(JSON.parse(d.data.data));
    });
    ajax("/api/visual/store", { number: 10 }, "post").then((d) => {
      console.log(d.data);
      this.$store.commit("setindexshopsdata", d.data);
    });
  },
};
</script>
<style>
</style>