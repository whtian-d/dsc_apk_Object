<!-- 分类-头部 -->
<template>
  <div class="header">
    <form action="">
      <a href="javascript:;" onclick="window.history.back()"
        ><i class="iconfont icon-back"></i
      ></a>
      <div class="input-text">
        <input type="text" placeholder="请输入关键词" @focus="searchFn" />
        <div class="search"><i class="iconfont icon-search"></i></div>
      </div>
    </form>
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
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchFn() {
      this.$router.push("/search");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.8rem 0;
  form {
    padding: 0 1rem;
    position: relative;
    height: 3rem;
    display: flex;
    align-items: center;
    a {
      i {
        font-size: 1.6rem;
        color: #999;
      }
    }

    .input-text {
      overflow: hidden;
      position: relative;
      border-radius: 1.5rem;
      border: 1px solid #ddd;
      height: 3rem;
      margin: 0 1rem;
      flex: 1;
      display: flex;
      align-items: center;
      input {
        height: 3rem;
        line-height: 3rem;
        padding: 0 0 0 1.2rem;
        width: 85%;
      }
      .search {
        margin-left: 1rem;
      }
    }
  }
}
</style>