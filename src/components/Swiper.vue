<!-- 首页-轮播图 -->
<template>
  <div class="swiper">
    <mt-swipe :auto="4000" @change="handleChange">
      <mt-swipe-item v-for="(v, i) in datalist" :key="i">
        <img :src="v.img" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    datalist() {
      return this.$store.state.IndexSwiperdata.list;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleChange() {
      this.$store.commit("setswipercolor", this.$children[0].index);
    },
  },
  mounted() {},
};
</script>
<style lang='less'>
.swiper {
  height: 12rem;
  box-sizing: border-box;
  padding: 0 10px;
  position: absolute;
  top: 0.5rem;
  left: 0px;
  width: 100%;
  div {
    border-radius: 1rem;
  }
  .mint-swipe-indicators {
    left: 4rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>