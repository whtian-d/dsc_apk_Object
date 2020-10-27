<!--  -->
<template>
  <div class="goods">
    <div class="good" v-for="(v, i) in datalist" :key="i">
      <div class="logo">
        <img :src="v.original_img" alt="" @click="pushRouteFn(v.goods_id)" />
      </div>
      <div class="desc">
        <h4>{{ v.goods_name }}</h4>
        <div class="price">
          ￥<span>{{ v.shop_price }}</span>
        </div>
        <div class="outer">
          <a :href="v.url" class="enter">进店</a>
          <p>{{ v.sales_volume }}<span>人已购买</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    datalist: Array,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    pushRouteFn(id) {
      this.$router.push("/goodsDetailspage/" + id);
    },
  },
  mounted() {
    // console.log(this.$store.getters.IndexChildGoods);
  },
};
</script>
<style lang='less'>
.goods {
  width: 100%;
  padding: 0 0.6rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 1rem;
  box-sizing: border-box;
  .good {
    width: 48.5%;
    margin-top: 0.6rem;
    margin-right: 0.3rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    height: 28.5rem;
    .logo {
      img {
        border-radius: 0.5rem;
        width: 100%;
      }
    }
    .desc {
      margin-left: 0;
      padding: 0.8rem;
      background-color: #fff;
      h4 {
        font-size: 1.4rem;
        height: 3.8rem;
        line-height: 1.9rem;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        color: #666;
        font-weight: 400;
      }
      .price {
        padding: 6px 0px 8px;
        line-height: 1.9rem;
        color: red;
        font-size: 1.6rem;
      }
      .outer {
        height: 2rem;
        display: flex;
        .enter {
          background-color: #fef0f0;
          padding: 0.1rem 0.5rem;
          border-radius: 0.2rem;
          color: #f92028;
          font-size: 1.3rem;
        }
        p {
          color: #999;
          margin-left: 0.6rem;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>