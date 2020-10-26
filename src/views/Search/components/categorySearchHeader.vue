<!-- 分类搜索头部 -->
<template>
  <div class="categorysearchheader">
    <form action="">
      <div class="search-warp">
        <div class="back" onclick="window.history.back()">
          <i class="iconfont icon-back"></i>
        </div>
        <div class="input-text">
          <input
            type="text"
            placeholder="请输入关键词"
            v-model="keywords"
            ref="searchinput"
          />
          <i class="iconfont icon-search"></i>
        </div>
        <a href="javascript:;" @click="routerlinkFn">搜索</a>
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
    return {
      keywords: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    routerlinkFn() {
      if (this.keywords.trim().length != 0) {
        this.$router.push("/searchlist?keywords=" + this.keywords);
      }
    },
  },
  mounted() {
    this.$refs.searchinput.focus();
  },
};
</script>
<style lang='less'>
.categorysearchheader {
  width: 100%;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.8rem 0;
  form {
    .search-warp {
      padding: 0 1rem;
      position: relative;
      height: 3rem;
      display: flex;
      .back {
        position: relative;
        height: 3rem;
        line-height: 3rem;
        text-align: left;
        color: #999;
      }
      .input-text {
        flex: 1;
        overflow: hidden;
        position: relative;
        border-radius: 1.5rem;
        border: 1px solid #ddd;
        margin: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          text-indent: 15px;
          height: 3rem;
          line-height: 3rem;
          width: 80%;
        }
        i {
          margin-right: 1.5rem;
        }
      }
      a {
        height: 3rem;
        line-height: 3rem;
        font-size: 1.6rem;
      }
    }
  }
}
</style>