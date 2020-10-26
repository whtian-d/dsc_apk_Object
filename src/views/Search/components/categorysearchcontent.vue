<!-- 分类搜索历史记录 -->
<template>
  <div class="categoryhistory">
    <keywords :keyworddata="data1" />
    <keywords :keyworddata="keyworddata" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import keywords from "./keywordswarp";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { keywords },

  data() {
    //这里存放数据
    return {
      data1: {
        title: "最近搜索",
        keys: this.$store.state.searchkeywords,
        btn: true,
      },
      keyworddata: {
        title: "热搜",
        keys: ["周大福", "内衣", "Five Plus", "手机"],
        btn: false,
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style lang='less'>
.categoryhistory {
  overflow: hidden;
  background-color: #efefef;
}
</style>