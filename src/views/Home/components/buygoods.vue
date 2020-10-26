<!--  -->
<template>
  <div class="merchandise" :style="datalist.bgcolor">
    <div class="bg-img">
      <img :src="datalist.bigimgsrc" alt="" />
    </div>
    <div class="goods_box">
      <div class="goods_list" v-for="(data, i) in datalist.datas" :key="i">
        <div class="goods_top">
          <img
            :src="data.goods_img"
            @click="routerlinkFn(data.goods_id)"
            alt=""
          />
        </div>
        <div class="goods_bottom">
          <div class="goods_bottom_title">
            {{ data.title }}
          </div>
          <div class="goods_bottom_price">￥{{ data.shop_price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    datalist: {
      type: Object,
    },
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  methods: {
    routerlinkFn(id) {
      this.$router.push("/goodsDetailspage/" + id);
    },
  },
};
</script>
<style lang='less'>
.merchandise {
  margin: 10px 10px 0 10px;
  padding-bottom: 20px;
  position: relative;
  border-radius: 1rem;
  .bg-img {
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }
  .goods_box {
    width: 100%;
    margin-top: -20%;
    padding-left: 1.5%;
    padding-right: 1.5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .goods_list {
      width: 31%;
      margin-right: 1.5%;
      background-color: #fff;
      margin-bottom: 1.5%;
      overflow: hidden;
      border-radius: 1rem;
      .goods_top {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .goods_bottom {
        padding: 1rem 0.8rem;
        .goods_bottom_title {
          font-size: 1.3rem;
          color: #000;
          height: 3.4rem;
          line-height: 1.7rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .goods_bottom_price {
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