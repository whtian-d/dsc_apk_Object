<!--  -->
<template>
  <div class="cart">
    <header class="cartHeader">
      <i class="iconfont icon-back" onclick="window.history.back()"></i>
      <div class="carttitle">购物车</div>
      <i></i>
    </header>
    <div class="carts-warp" v-if="!isNull">
      <div v-for="(value, keys, k) in carts" :key="k">
        <div class="carts-shops" v-if="value.data.length != 0">
          <div class="shop_title">
            <div class="shopselect selectbox" @click="shopSelectAll(keys)">
              <i
                class="iconfont icon-danxuankuang"
                v-if="!value.shopSelectAll"
              ></i>
              <i class="iconfont icon-danxuankuangxuanzhong" v-else></i>
            </div>
          </div>
          <div class="shopname">
            <span>{{ keys }} ></span>
          </div>
          <div class="goods-warp" v-for="(v, i) in value.data" :key="i">
            <div class="goodsSelect selectbox" @click="changeisSelect(keys, i)">
              <i class="iconfont icon-danxuankuang" v-if="!v.isSelect"></i>
              <i class="iconfont icon-danxuankuangxuanzhong" v-else></i>
            </div>
            <div class="goods_content">
              <div class="goods_img">
                <img :src="v.goods_img" alt="" />
              </div>
              <div class="goods_r_desc">
                <div class="goods_title">
                  {{ v.goods_name }}
                </div>
                <div class="goods_bottom">
                  <div class="goods_price">{{ v.price }}</div>
                  <div class="goods_caozuo">
                    <a href="javascript:;" @click="jianNum(keys, i)">-</a>
                    <input
                      type="number"
                      min="1"
                      style="width: 3rem"
                      v-model="v.num"
                      @change="inputChangeNum(keys, i)"
                    />
                    <a href="javascript:;" @click="addNum(keys, i)">+</a>
                    <i class="iconfont icon-shoucang1"></i>
                    <i class="iconfont icon-shanchu" @click="dele(keys, i)"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cartnull" v-else>
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车空空如也</span>
      <router-link to="/home" style="font-size: 1.4rem">去逛逛</router-link>
    </div>
    <div class="carts-footer" v-if="!isNull">
      <div class="selectbox selectAll" @click="checkSelectAll">
        <i class="iconfont icon-danxuankuang" v-if="!selectAll"></i>
        <i class="iconfont icon-danxuankuangxuanzhong" v-else></i>
        <span>全选</span>
      </div>
      <div class="carts_footer_right">
        <div class="carts_total">
          <div>
            <span>合计</span>
            <span style="font-size: 1.6rem; color: red; font-weight: bold"
              >￥{{ totalPrice }}</span
            >
          </div>
          <p>(不含运费，已节省￥0.00)</p>
        </div>
        <div class="gobuy">去支付({{ totalNum }})</div>
      </div>
    </div>
    <!-- <div style="height: 10rem"></div> -->
    <Footer />
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
// import { mapMutations } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Footer },
  data() {
    //这里存放数据
    return {
      falg: false,
    };
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    selectAll() {
      return this.$store.state.isSelectAll;
    },
    isNull() {
      let lists = Object.values(this.$store.state.carts);
      let isno = lists.every((item) => {
        return item.data.length == 0;
      });
      return isno;
    },
    totalNum() {
      let num = 0;
      let lists = Object.values(this.$store.state.carts); //数组
      lists.forEach((items) => {
        items.data.forEach((good) => {
          if (good.isSelect) {
            num += Number(good.num);
          }
        });
      });
      return num;
    },
    totalPrice() {
      let price = 0;
      let lists = Object.values(this.$store.state.carts); //数组
      lists.forEach((items) => {
        items.data.forEach((good) => {
          if (good.isSelect) {
            price += Number(good.num) * Number(good.price);
          }
        });
      });
      return price;
    },
  },
  //方法集合
  methods: {
    // ...mapMutations([
    //   "changeisSelect",
    //   "addNum",
    //   "jianNum",
    //   "inputChangeNum",
    //   "dele",
    //   "shopSelectAll",
    // ]),
    checkSelectAll() {
      this.$store.commit("checkSelectAll");
    },
    // 改变店铺内商品的选中状态
    changeisSelect(keys, index) {
      this.$store.commit("changeisSelect", { keys, index });
    },
    addNum(keys, index) {
      this.$store.commit("addNum", { keys, index });
    },
    jianNum(keys, index) {
      this.$store.commit("jianNum", { keys, index });
    },
    inputChangeNum(keys, index) {
      this.$store.commit("inputChangeNum", { keys, index });
    },
    dele(keys, index) {
      this.$store.commit("dele", { keys, index });
    },
    shopSelectAll(keys) {
      this.$store.commit("shopSelectAll", keys);
    },
  },
  mounted() {},
};
</script>
<style lang='less'>
.cart {
  width: 100%;
  .selectbox {
    color: #f00;
  }
  .cartHeader {
    width: 100%;
    height: 4.4rem;
    background-color: #efefef;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .carttitle {
      font-size: 1.4rem;
      color: #666;
    }
  }
  .carts-warp {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 20px;
    background-color: #efefef;
    .carts-shops {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .shop_title {
        margin: 1.5rem 0;
      }
      .shopname {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: bold;
      }
      .goods-warp {
        height: 10rem;
        width: 100%;
        display: flex;
        align-items: center;
        .goodsSelect {
          width: 2.5rem;
        }
        .goods_content {
          width: calc(100% - 2.5rem);
          background-color: #fff;
          height: 100%;
          display: flex;
          .goods_img {
            width: 30%;
            height: 100%;
            box-sizing: border-box;
            padding: 1rem;
            img {
              width: 100%;
            }
          }
          .goods_r_desc {
            width: 70%;
            height: 100%;
            box-sizing: border-box;
            padding: 1rem 1rem 1rem 0;
            display: flex;
            flex-wrap: wrap;
            .goods_title {
              width: 100%;
              height: 50%;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              text-overflow: ellipsis;
              line-height: 2rem;
              overflow: hidden;
            }
            .goods_bottom {
              width: 100%;
              height: 50%;
              display: flex;
              justify-content: space-between;
              .goods_price {
                line-height: 4rem;
                color: #f00;
                font-size: 1.4rem;
                font-weight: bold;
              }
              .goods_caozuo {
                display: flex;
                align-items: center;
                text-align: center;
                a {
                  text-align: center;
                  width: 2rem;
                  font-size: 1.4rem;
                }
                input {
                  text-align: center;
                }
                i {
                  color: #666;
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
  .carts-footer {
    width: 100%;
    height: 5rem;
    position: fixed;
    bottom: 4.9rem;
    left: 0px;
    display: flex;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    line-height: 5rem;
    padding-left: 1rem;
    justify-content: space-between;
    .selectAll {
      i {
        margin-right: 5px;
      }
    }
    .carts_footer_right {
      width: 80%;
      height: 100%;
      display: flex;
      .carts_total {
        width: calc(100% - 11rem);
        height: 100%;
        padding-right: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        line-height: 0;
        padding-top: 10px;
        > div {
          font-size: 1.4rem;
          text-align: right;
          line-height: 2rem;
          height: 50%;
        }
        p {
          height: 30%;
          font-size: 1.2rem;
          text-align: right;
          color: #ccc;
          margin-top: 5px;
        }
      }
      .gobuy {
        width: 11rem;
        background-color: #f44;
        color: #fff;
        font-size: 1.6rem;
        text-align: center;
      }
    }
  }
  .cartnull {
    width: 100%;
    height: 20rem;
    background-color: #ffffff;
    border-bottom: 1px dashed #ccc;
    text-align: center;
    line-height: 20rem;
    font-size: 2rem;
    color: #666;
    i {
      font-size: 5rem;
    }
  }
}
</style>