<!--  -->
<template>
  <div class="keywords" v-if="keyworddata.keys.length != 0">
    <div class="title">
      <p>{{ keyworddata.title }}</p>
      <div>
        <i
          class="iconfont icon-delete"
          v-show="keyworddata.btn"
          @click="delesearch"
        ></i>
      </div>
    </div>
    <div class="keywords-content">
      <a
        href="javascript:;"
        v-for="(v, i) in keyworddata.keys"
        :key="i"
        @click="searchFn(v)"
        >{{ v }}</a
      >
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    keyworddata: Object,
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      flag: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchFn(keywords) {
      this.$router.push("/searchlist?keywords=" + keywords);
    },
    delesearch() {
      this.$store.commit("delesearchkeywords");
    },
  },
};
</script>
<style lang='less'>
.keywords {
  padding: 0 1rem;
  margin-top: 1.5rem;
  .title {
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.5rem;
      color: #232326;
      float: left;
      width: 100px;
      padding-left: 1px;
    }
  }
  .keywords-content {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    a {
      display: block;
      padding: 0 1rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      background-color: pink;
      overflow: hidden;
      color: #686868;
      line-height: 2rem;
    }
  }
}
</style>