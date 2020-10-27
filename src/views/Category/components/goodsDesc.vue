<!--  -->
<template>
  <div class="goodsbannerDesc" v-if="showBox">
    <div class="goodsprice">
      <div class="content">
        <span class="nowPrice">
          {{ goodsData.shop_price_original }}
        </span>
        <span class="oldPrice">
          {{ goodsData.market_price_formated }}
        </span>
      </div>
    </div>
    <div class="goodsCanshu">
      <div class="goodstitle">
        {{ goodsData.goods_name }}
      </div>
      <div class="goodstit_outer">
        <span>累计销量{{ goodsData.goods_rate }}</span>
        <span>库存{{ goodsData.goods_number }}</span>
        <span>上海市 上海市</span>
      </div>
    </div>
    <!-- 服务信息 -->
    <div class="goodsFuwu">
      <div class="fuwu_items">
        <span class="fuwu_title">赠送积分: </span>
        <span>{{ goodsData.give_integral }}积分</span>
      </div>
      <div class="fuwu_items">
        <span class="fuwu_title">服务: </span>
        <span> 正品保证 七天无理由退换 闪速配送</span>
      </div>
    </div>
    <!-- 已经选择 -->
    <div class="selectNum">
      <span>已选： </span>
      <span>{{ goodsNum }}个</span>
      <i>></i>
    </div>
    <!-- 商铺信息 -->
    <div class="shopinfo" v-if="shopShow">
      <div class="shopcontent">
        <div class="shopheader">
          <div class="shopimg">
            <img :src="shopsData.logo_thumb" alt="" />
          </div>
          <div class="shopmiddle">
            <h3>{{ shopsData.shop_desc }}</h3>
            <p>已经有{{ shopsData.count_gaze }}人关注</p>
          </div>
          <div class="shopguanzhu">
            <a href="javascript:;">未关注</a>
          </div>
        </div>
        <div class="shopfooter">
          <div class="shopfootitems">
            <span>商品 </span>
            <span style="color: red">{{ shopsData.commentdelivery }}</span>
            <em style="background: #fba534">{{
              shopsData.commentdelivery_font
            }}</em>
          </div>
          <div class="shopfootitems">
            <span>服务 </span>
            <span style="color: #13ab53">{{ shopsData.commentrank }}</span>
            <em style="background: #13ab53">{{
              shopsData.commentrank_font
            }}</em>
          </div>
          <div class="shopfootitems">
            <span>商品 </span>
            <span style="color: #f447c9">{{ shopsData.commentserver }}</span>
            <em style="background: #f447c9">{{
              shopsData.commentserver_font
            }}</em>
          </div>
        </div>
      </div>
    </div>
    <div class="shopBottom">
      <div class="shopwarp">
        <div class="shopitemsTitle">
          <p :class="{ pactive: falg }">商品详情</p>
          <p>规格参数</p>
        </div>
        <div
          class="shopleftitem"
          v-html="goodsData.goods_desc"
          v-show="falg"
        ></div>
      </div>
    </div>
    <shopfootCart />
    <div style="height: 5rem"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import ajax from "@/api/ajax";
import shopfootCart from "./goodsFootCart";
import { Indicator } from "mint-ui";
import { getgoodsDetailsData, getShopdata } from "@/api/goodsDetails";
// getShopdata
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { shopfootCart },
  data() {
    //这里存放数据
    return {
      showBox: false,
      falg: true,
      goodsNum: 1,
      // goodsData: [],
      shopsData: [],
      shopShow: true,
    };
  },
  //监听属性 类似于data概念
  computed: {
    shopData() {
      return this.$store.state.shopsData;
    },
    goodsData() {
      return this.$store.state.goodsDetailsData;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  mounted() {
    Indicator.open("加载中...");
    getgoodsDetailsData(this.$route.params.id).then((data) => {
      this.$store.commit("getgoodsDetailsData", data.data);
      // console.log(data.data);
      if (data.data.user_id != 0) {
        getShopdata(data.data.user_id).then((res) => {
          this.shopsData = res.data;
          this.$store.commit("getshopsData", res.data);
          console.log(res.data);
        });
      } else {
        this.shopShow = false;
      }
      this.showBox = true;
      Indicator.close();
    });
  },
};
</script>
<style lang='less'>
.goodsbannerDesc {
  .goodsprice {
    background-color: #fff;
    padding: 1.1rem 1.1rem 0.8rem;
    height: 2.7rem;
    .content {
      display: flex;
      height: 100%;
      align-items: center;

      .nowPrice {
        font-size: 1.8rem;
        color: #f00;
        font-weight: 600;
        margin-right: 1rem;
      }
      .oldPrice {
        font-size: 1.2rem;
        color: #ccc;
        text-decoration: line-through;
      }
    }
  }
  .goodsCanshu {
    height: 8.5rem;
    box-sizing: border-box;
    padding: 0 1.1rem;
    background-color: #fff;
    .goodstitle {
      margin-bottom: 1.1rem;
      font-size: 1.5rem;
      overflow: hidden;
      line-height: 1.5;
      max-height: 5rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .goodstit_outer {
      background-color: #fff;
      padding: 0 0 1.1rem;
      display: flex;
      span {
        width: 33%;
        font-size: 1.4rem;
        color: #999;
      }
    }
  }
  .goodsFuwu {
    margin-top: 0.8rem;
    .fuwu_items {
      padding: 13px 15px;
      border-bottom: 1px solid #f6f6f9;
      line-height: 24px;
      background-color: #fff;
      color: #333;
      font-size: 14px;
      overflow: hidden;
      .fuwu_title {
        font-size: 1.4rem;
        color: #999;
      }
    }
  }
  .selectNum {
    padding: 13px 15px;
    line-height: 24px;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    position: relative;
    margin-top: 0.8rem;
    i {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
    }
  }
  .shopinfo {
    margin-top: 0.8rem;
    .shopcontent {
      padding: 1.1rem;
      background-color: #fff;
      .shopheader {
        height: 6rem;
        display: flex;
        .shopimg {
          width: 5.8rem;
          height: 5.8rem;
          vertical-align: middle;
          padding: 0.2rem;
          border: 1px solid #efefef;
          img {
            width: 100%;
          }
        }
        .shopmiddle {
          padding: 0.2rem 0 0 1.3rem;
          flex: 1;
          width: 100%;
          h3 {
            font-size: 1.6rem;
          }
          p {
            color: #999;
            font-size: 1.4rem;
            font-weight: 400;
            margin-top: 0.4rem;
          }
        }
        .shopguanzhu {
          margin-top: 1.6rem;
          margin-left: 0.8rem;
          width: 6rem;
          a {
            display: block;
            padding: 0.1rem 0.8rem;
            font-size: 1.4rem;
            border-radius: 5rem;
            position: relative;
            z-index: 2;
            color: #f92028;
            border: 1px solid #f92028;
          }
        }
      }
      .shopfooter {
        margin-top: 1.2rem;
        font-size: 1.36rem;
        color: #777;
        display: flex;
        height: 1.9rem;
        .shopfootitems {
          width: 33%;
          em {
            font-size: 1.2rem;
            padding: 0.1rem 0.4rem;
            border-radius: 1.2rem;
            font-style: inherit;
            margin-left: 3px;
            line-height: 1.5rem;
            color: #fff;
          }
        }
      }
    }
  }
  .shopBottom {
    .shopitemsTitle {
      margin-top: 1.5rem;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      height: 4.4rem;
      background-color: #fff;
      .pactive {
        color: red;
      }
      p {
        width: 48%;
        margin-right: 1rem;
        text-align: center;
        line-height: 4.4rem;
        font-size: 1.4rem;
      }
    }
    .shopleftitem {
      width: 100%;
      img {
        width: 100%;
      }
      div {
        width: 100%;
      }
    }
  }
}
</style>