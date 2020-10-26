<!--  -->
<template>
  <div class="shopsinfo">
    <div class="shopstitle">
      <h1>店铺推荐</h1>
      <span>更多品质好店</span>
      <i class="iconfont icon-home-more"></i>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(v, i) in datalist" :key="i">
          <div class="shopimg">
            <img :src="v.street_thumb" alt="" />
          </div>
          <div class="shopstext">
            <div class="shopname">{{ v.rz_shopName }}</div>
            <div class="shopgoods">
              <span>共计</span> <em>{{ v.total }}</em> 件商品
            </div>
            <div class="shoplogo"><img :src="v.logo_thumb" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="logowarp">
      <div class="logoitem">
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468372.png"
          alt=""
        />
      </div>
      <div class="logoitem">
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978469174.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper"; //cnpm install swiper @4 --save
import "swiper/dist/css/swiper.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      timerid: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    datalist() {
      return this.$store.state.indexshopsdata;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 9,
      observer: true,
      freeMode: true,
    });
  },
  beforeDestroy() {
    clearTimeout(this.timerid);
  },
};
</script>
<style lang='less'>
.shopsinfo {
  margin: 1rem 1rem 0;
  border-radius: 1rem;
  background-color: #fff;

  .shopstitle {
    padding: 1.5rem 1rem;
    display: flex;
    align-items: center;
    h1 {
      margin: 0 1rem 0 0.5rem;
      font-size: 1.8rem;
    }
    span {
      color: #888;
      font-size: 1.4rem;
    }
    i {
      color: #f20d23;
      font-size: 1.4rem;
      margin: 2px 0 0 5px;
    }
  }
  .swiper-slide {
    border-radius: 1rem;
    width: 31%;
    margin-right: 2.5%;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #f6f6f6;
    position: relative;
    .shopimg {
      width: 100%;
      height: 8.5rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .shopstext {
      width: 100%;
      height: 8.6rem;
      position: relative;
      padding: 2.5rem 0.5rem 2rem;
      box-sizing: border-box;
      .shopname {
        font-size: 1.4rem;
        color: #333;
        height: 2rem;
        line-height: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      .shopgoods {
        color: #888;
        font-size: 1.2rem;
        margin-top: 0.5rem;
        em {
          font-style: inherit;
        }
      }
      .shoplogo {
        width: 3.5rem;
        height: 3.5rem;
        position: absolute;
        top: -1.8rem;
        border-radius: 1.7rem;
        left: 50%;
        transform: translateX(-50%);
        img {
          border-radius: 1.7rem;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .logowarp {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .logoitem {
      border-radius: 1rem;
      width: calc(50% - 0.5rem);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>