<!-- 分类左侧 -->
<template>
  <div class="left">
    <div class="left-content">
      <ul>
        <li v-for="list in this.$store.state.leftdata" :key="list.cat_id">
          <router-link :to="'/category/' + list.cat_id" tag="p">{{
            list.cat_name
          }}</router-link>
        </li>
      </ul>
    </div>
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
  methods: {},
  mounted() {
    this.$store.dispatch("getCategoryLeft", "");
    console.log(this.$store.state.leftdata);
  },
};
</script>
<style lang='less'>
.left {
  position: fixed;
  top: 5rem;
  left: 0px;
  overflow-y: scroll;
  bottom: 4.9rem;
  width: 8.4rem;
  border-right: 1px solid #f5f5f5;
  overflow-y: scroll;
  .left-content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  ul {
    li {
      height: 3.8rem;
      text-align: center;
      display: flex;
      align-items: center;
      p {
        font-size: 1.3rem;
        color: #999;
        line-height: 2rem;
        height: 2rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        box-sizing: border-box;
        width: 100%;
      }
    }
    .router-link-active {
      color: red;
      border-left: 0.25rem solid #f23030;
    }
  }
}
</style>