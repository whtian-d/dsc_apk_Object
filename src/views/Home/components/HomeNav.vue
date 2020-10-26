<!-- 首页nav -->
<template>
  <div class="homenav" :style="{ background: bgcolor }">
    <ly-tab
      :style="{ background: bgcolor }"
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="changeFn"
    ></ly-tab>
    <div class="cagetory">
      <i class="iconfont icon-home-dingjifenlei"></i>
      <span>分类</span>
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
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "家用电器" },
        { label: "男装女装" },
        { label: "鞋靴箱包" },
        { label: "手机数码" },
        { label: "电脑办公" },
        { label: "家居家纺" },
        { label: "个人化妆" },
      ],
      options: {
        activeColor: "#fff",
      },
      routeList: [
        "/home/indexs",
        "/home/familyele?cat_id=858",
        "/home/person?cat_id=6",
        "/home/box?cat_id=8",
        "/home/phone?cat_id=3",
        "/home/computer?cat_id=4",
        "/home/house?cat_id=5",
        "/home/face?cat_id=860",
      ],
    };
  },
  methods: {
    changeFn(ele, index) {
      this.$router.push(this.routeList[index]);
    },
  },
  computed: {
    bgcolor() {
      return this.$store.state.swipercolor;
    },
  },
};
</script>
<style lang='less'>
.homenav {
  background-color: #f34646;
  position: fixed;
  top: 4.4rem;
  left: 0px;
  color: #fff;
  height: 4.4rem;
  z-index: 5;
  display: flex;
  align-items: center;
  .ly-tab {
    height: 4rem;
    width: 85%;
    overflow: hidden;
    .ly-tabbar {
      background-color: transparent;
      box-shadow: 0 0 0 0 #fff;
      overflow: hidden;
      border-bottom: none;
      .ly-tab-list {
        padding: 14px 7px;
      }
    }
  }
  .cagetory {
    width: 15%;
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    position: relative;
    z-index: 3;
    box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
    i {
      vertical-align: bottom;
      font-size: 1.4rem;
      margin-right: 5px;
    }
  }
}
</style>