<!--  -->
<template>
  <div class="shopfootCart">
    <div class="one kefu">
      <i></i>
      客服
    </div>
    <div class="one shoucang">收藏</div>
    <div class="one car" @click="toCart">
      <i>{{ num }}</i
      >购物车
      <transition name="my">
        <div class="add" v-if="falg">+1</div>
      </transition>
    </div>
    <div class="two joincar" @click="joinCart">加入购物车</div>
    <div class="two nowbuy">立即购买</div>
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
      falg: false,
      num: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {
    cart() {
      return this.$store.state.cartData;
    },
    shopnum1() {
      //console.log(Object.values(this.$store.state.carts)); //数组       数组》对象。data   数组
      var lists = Object.values(this.$store.state.carts);
      // console.log(lists.length);
      if (lists.length == 0) {
        return 0;
      } else {
        var num = 0;
        lists.forEach((item) => {
          if (item.data.length != 0) {
            item.data.forEach((good) => {
              num += Number(good.num);
            });
          }
        });
        console.log(num);
        return num;
      }
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    joinCart() {
      // console.log(this.$store.state.shopsData);
      // 处理数据
      var obj = {
        goods_id: this.$store.state.goodsDetailsData.goods_id,
        goods_img: this.$store.state.goodsDetailsData.goods_img,
        goods_name: this.$store.state.goodsDetailsData.goods_name,
        price: this.$store.state.goodsDetailsData.shop_price_original,
        num: 1,
        isSelect: true,
      };
      var keys = "";
      if (this.$store.state.shopsData.shop_desc) {
        keys = this.$store.state.shopsData.shop_desc;
      } else {
        keys = "自营";
      }
      // console.log(obj);
      this.$store.commit("setCarts", { keys, obj });
      // 加一动画
      this.activeFn();
      this.updateNum();

      console.log(this.$store.state.carts);
      //
    },
    updateNum() {
      var lists = Object.values(this.$store.state.carts);
      // console.log(lists.length);
      if (lists.length == 0) {
        this.num = 0;
      } else {
        var num = 0;
        lists.forEach((item) => {
          if (item.data.length != 0) {
            item.data.forEach((good) => {
              num += Number(good.num);
            });
          }
        });
        this.num = num;
      }
    },
    toCart() {
      this.$router.push("/cart");
    },
    // 增加数量的动画效果
    activeFn() {
      this.falg = true;
      var timerid = setTimeout(() => {
        this.falg = false;
        clearTimeout(timerid);
      }, 300);
    },
  },
  mounted() {
    this.updateNum();
  },
};
</script>
<style lang='less'>
.shopfootCart {
  height: 5rem;
  position: fixed;
  width: 100%;
  bottom: 0px;
  left: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    height: 100%;
    line-height: 5rem;
  }
  .one {
    flex: 1;
    text-align: center;
    position: relative;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
  }
  .two {
    flex: 2;
    text-align: center;
  }

  .car {
    i {
      display: block;
      width: 15px;
      height: 12px;
      background-color: rgba(255, 0, 0, 0.8);
      position: absolute;
      top: 6px;
      right: 3px;
      border-radius: 10px;
      text-align: center;
      line-height: 12px;
      color: #fff;
    }
    .add {
      width: 15px;
      height: 15px;
      border-radius: 15px;
      text-align: center;
      line-height: 15px;
      background-color: rgba(255, 0, 0, 0.8);
      position: absolute;
      top: -10px;
      color: #fff;
      right: 15px;
    }
  }
  .joincar {
    background-color: orange;
  }
  .my-enter {
    opacity: 0;
  }
  .my-enter-active {
    transition: all 0.5s;
  }
  .my-leave-to {
    opacity: 0;
  }
  .my-leave-active {
    transform: translateY(-50px);
    transition: all 2s;
  }
}
</style>