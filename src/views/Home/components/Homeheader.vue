<!--  -->
<template>
  <div class="homeheader" :style="{ background: color }">
    <form action>
      <input type="text" placeholder="请输入关键字" />
      <i class="iconfont icon-sousuo2"></i>
    </form>
    <a class="icon" href="javascript:;">
      <i class="iconfont icon-home-xiaoxi"></i>
    </a>
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
  computed: {
    color() {
      return this.$store.state.swipercolor;
    },
  },
};
</script>
<style lang='less' scoped>
.homeheader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  height: 4.4rem;
  display: flex;
  align-items: center;
  background-color: #f34646;
  width: 100%;
  form {
    width: 90%;
    position: relative;
    margin-left: 0.8rem;
    input {
      width: 100%;
      height: 3rem;
      border-radius: 1.5rem;
      text-indent: 2rem;
    }
    i {
      position: absolute;
      right: 1rem;
      top: 0;
      height: 3rem;
      line-height: 3rem;
    }
  }
  .icon {
    width: 10%;
    height: 3rem;
    line-height: 3rem;
    box-sizing: border-box;
    padding-left: 0.7rem;
    color: #fff;
    i {
      font-size: 2rem;
    }
  }
}
</style>