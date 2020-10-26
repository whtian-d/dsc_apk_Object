<!--  -->
<template>
  <div class="goodsShow">
    <div class="boximg">
      <img :src="datalist.bigimgsrc" alt="" />
    </div>
    <div class="goodsbox">
      <div class="swiper-container1">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(data, i) in datalist.datas"
            :key="i"
          >
            <img :src="data.goods_img" @click="routerlinkFn(data.goods_id)" />
            <div class="texts">
              <div class="text-title">
                {{ data.title }}
              </div>
              <div class="price">
                <span>￥{{ data.shop_price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ' 《组件路径》';
import Swiper from "swiper"; //cnpm install swiper @4 --save
import "swiper/dist/css/swiper.css";
export default {
  props: {
    datalist: Object,
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      timer: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    routerlinkFn(id) {
      this.$router.push("/goodsDetailspage/" + id);
    },
  },
  mounted() {
    new Swiper(".swiper-container1", {
      slidesPerView: 3.3,
      spaceBetween: 7,
      observer: true,
      freeMode: true,
    });
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>
<style lang='less'>
.goodsShow {
  padding: 1rem 1rem 0;
  position: relative;
  height: 31rem;
  .boximg {
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }
  .goodsbox {
    width: 100%;
    margin-top: -20%;
    padding: 0 0 0 0.5rem;
    overflow: hidden;
    height: 17.8rem;
    box-sizing: border-box;
    .swiper-slide {
      width: 10.5rem;
      height: 17.8rem;
      border-radius: 1rem;
      background-color: #fff;
      img {
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        vertical-align: middle;
      }
      .texts {
        padding: 1rem 0.8rem;
        height: 5.3rem;
        .text-title {
          font-size: 1.3rem;
          color: #000;
          min-height: 3.4rem;
          line-height: 1.7rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .price {
          margin-top: 0.2rem;
          font-size: 15px;
          font-weight: 700;
          color: rgb(242, 14, 40);
        }
      }
    }
  }
}
</style>