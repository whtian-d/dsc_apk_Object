<!-- 物品详情页 -->
<template>
  <div class="goodsDetails">
    <mt-swipe :auto="2000" class="banner">
      <mt-swipe-item
        v-for="v in this.$store.state.goodsDetailsData.gallery_list"
        :key="v.img_desc"
        ><img :src="v.img_url" class="bannerimg" alt=""
      /></mt-swipe-item>
    </mt-swipe>
    <div class="goodsheader">
      <div class="back" onclick="window.history.back()">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="fenxiang">
        <i class="iconfont icon-share-alt"></i>
      </div>
    </div>
    <bannerdesc />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import bannerdesc from "./goodsDesc";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { bannerdesc },
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
  beforeCreate() {}, //生命周期 - 创建之前
  mounted() {
    // console.log(this.$route.params.id);
    // this.$store.dispatch("getgoodsDetailsData", this.$route.params.id);
    // console.log(this.$store.state.goodsDetailsData.gallery_list);
    // this.$store.dispatch("getshopsData");
  },
};
</script>
<style lang='less' scope="this api replaced by slot-scope in 2.5.0+">
.goodsDetails {
  .banner {
    height: 37.5rem;
    .bannerimg {
      width: 100%;
    }
  }
  .mint-swipe-indicators {
    .is-active {
      background-color: #f00;
      opacity: 1;
    }
  }
  .goodsheader {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 4rem;
    box-sizing: border-box;
    width: 100%;
    padding: 0px 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    div {
      width: 2.5rem;
      height: 2.5rem;
      background-color: rgba(41, 47, 54, 0.4);
      border-radius: 50%;
      text-align: center;
      line-height: 2.5rem;
      color: #fff;
    }
  }
}
</style>