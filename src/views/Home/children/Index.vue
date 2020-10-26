<!-- 首页-首页 -->
<template>
  <div class="index1">
    <div
      class="box"
      :style="{
        height: '4rem',
        background: bgcolor,
        borderRadius: '0 0 2rem 2rem',
      }"
    ></div>
    <Swiper />
    <div style="height: 8.6rem"></div>
    <SwiperList />
    <HomeNews />
    <Kaixueji />
    <ScorllList />
    <goodsShow :datalist="catlists" />
    <goodsShow :datalist="qixidata" />
    <buygoods :datalist="getingzidata" />
    <buygoods :datalist="zuanshidata" />
    <shopinfo />
    <homeindex />
    <!-- <div style="height: 4.4rem"></div> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 导入轮播图
import ajax from "@/api/ajax.js";
import Swiper from "@/components/Swiper.vue";
// 导入轮播列表
import SwiperList from "../components/swiperList";
import HomeNews from "../components/HomeNews";
import ScorllList from "../components/ScrollList";
import Kaixueji from "../components/kaixueji";
// 商品展示
import goodsShow from "../components/goodsshow";
import buygoods from "../components/buygoods";
// 懒加载组件
import homeindex from "../components/homeIndex";
// 店铺信息
import shopinfo from "../components/shopinfo";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    SwiperList,
    HomeNews,
    ScorllList,
    Kaixueji,
    goodsShow,
    buygoods,
    homeindex,
    shopinfo,
  },
  data() {
    //这里存放数据
    return {
      catlists: {
        bigimgsrc:
          "https://x.dscmall.cn/storage/data/gallery_album/original_img/2xrOpGBonnFxQRzbgIEDM55NFSh0YHuTlQtap6Df.jpeg?imageView2/2/format/webp",
        datas: [],
      },
      qixidata: {
        bigimgsrc:
          "https://x.dscmall.cn/storage/data/gallery_album/original_img/Va48nGpd3dmIcsZDkFa7NHc229AMIQOQd8F6kHCZ.jpeg?imageView2/2/format/webp",
        datas: [],
      },
      getingzidata: {
        bigimgsrc:
          "https://x.dscmall.cn/storage/data/gallery_album/original_img/mq7rYptqRIC6iWYkBUfWzdHGrusH4W1sCAQbHLHj.jpeg?imageView2/2/format/webp",
        datas: [],
        bgcolor: { backgroundColor: "rgb(204, 183, 161)" },
      },
      zuanshidata: {
        bigimgsrc:
          "https://x.dscmall.cn/storage/data/gallery_album/original_img/CzzkibenhBz3Jcc8clYHc9imT29vc6InLFdKuN0U.jpeg?imageView2/2/format/webp",
        datas: [],
        bgcolor: { backgroundColor: "rgb(44, 77, 105)" },
      },
    };
  },
  //监听属性 类似于data概念
  computed: {
    bgcolor() {
      return this.$store.state.swipercolor;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getgoodsdata(number, numarr, obj) {
      ajax(
        "/api/visual/checked",
        {
          number: number,
          goods_id: numarr,
        },
        "post"
      ).then((data) => {
        obj.datas = data.data;
      });
    },
  },
  mounted() {
    //七夕礼物
    this.getgoodsdata(6, [1200, 1198, 1197, 1195, 1201, 1199], this.qixidata);
    // 猫王收音机
    this.getgoodsdata(5, [1221, 1220, 1223, 1222, 1219], this.catlists);
    // 得听格子衬衫
    this.getgoodsdata(
      6,
      [1164, 1159, 1162, 1166, 1167, 1168],
      this.getingzidata
    );
    //DR DARRY RING心月套链钻石吊坠月亮心形镶钻项链正品会员专享
    this.getgoodsdata(
      6,
      [1218, 1217, 1215, 1214, 1212, 1213],
      this.zuanshidata
    );
  },
};
</script>
<style lang='less'>
.box {
  background-color: #f34646;
}
.index1 {
  position: relative;
  background: #f4f4f4;
}
</style>