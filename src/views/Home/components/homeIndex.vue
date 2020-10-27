<!--  -->
<template>
  <div class="shopsbottom">
    <div class="tab-title">
      <div
        class="tab-items"
        v-for="(v, i) in titledata"
        :key="i"
        @click="changetab(i)"
      >
        <strong>{{ v.title }}</strong>
        <span :class="activeindex == i ? 'active' : ''">{{ v.desc }}</span>
      </div>
    </div>

    <div class="infinite-list-wrapper">
      <ul class="list">
        <li
          v-for="(key, index) in datalist"
          :key="index"
          class="list-item"
          @click="goodsdetaliFn(key)"
        >
          <div class="imgbox">
            <img :src="key.goods_img" alt="" />
          </div>
          <div class="infobox">
            <div class="goodname">{{ key.title }}</div>
            <div class="goodprice">
              <p>
                ￥<span>{{ key.shop_price }}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ajax from "@/api/ajax";
import { Indicator } from "mint-ui";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      datalist: [],
      loading: true,
      activeindex: 0,
      titledata: [
        {
          title: "精选",
          desc: "为你推荐",
        },
        {
          title: "社区",
          desc: "新奇好物",
        },
        {
          title: "新品",
          desc: "潮流上新",
        },
        {
          title: "热卖",
          desc: "火热爆款",
        },
      ],
      page: 1,
      noMore: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    load() {
      if (this.loading) {
        this.loading = false;
        Indicator.open("加载中...");
        ajax("/api/goods/type_list", {
          page: this.page,
          size: 10,
          type: "is_best",
        }).then((res) => {
          if (this.page > 1) {
            this.datalist = this.datalist.concat(res.data);
          } else {
            this.datalist = res.data;
          }
          this.page++;
          this.loading = true;
          Indicator.close();
          if (res.data.length == 0) {
            this.loading = false;
            this.noMore = true;
          }
        });
      }
      // /api/goods/type_list?page=3&size=10&type=is_best
    },
    changetab(index) {
      this.activeindex = index;
    },
    goodsdetaliFn(data) {
      this.$router.push("/goodsDetailspage/" + data.goods_id);
    },
    fn() {
      // console.log(window.pageYOffset + window.screen.height + 20);
      // console.log(document.getElementById("app").offsetHeight);
      if (
        window.pageYOffset + window.screen.height + 20 >
        document.getElementById("app").offsetHeight
      ) {
        this.load();
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.fn, false);
  },
};
</script>
<style lang='less'>
.shopsbottom {
  margin: 1rem;
  .tab-title {
    padding: 1rem 0;
    display: flex;
    .tab-items {
      width: 25%;
      text-align: center;
      strong {
        font-size: 1.6rem;
        color: #333;
        display: block;
      }
      span {
        display: inline-block;
        font-size: 1.2rem;
        color: #888;
        border-radius: 1rem;
        padding: 0.1rem 0.8rem;
        margin-top: 0.2rem;
        // background-color: #f00;
        box-sizing: border-box;
        &.active {
          background: linear-gradient(-88deg, #ff4f2e, #f91f28);
          color: #fff;
        }
      }
    }
  }
  .infinite-list-wrapper {
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .list-item {
        width: 48.5%;
        background-color: #fff;
        border-radius: 1rem;
        overflow: hidden;
        margin-bottom: 2.5%;
        .imgbox {
          img {
            width: 100%;
          }
        }
        .infobox {
          padding: 1.5rem;
          .goodname {
            font-size: 1.5rem;
            color: #000;
            font-weight: 500;
            min-height: 4.2rem;
            line-height: 2.1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .goodprice {
            margin-top: 8px;
            color: rgb(242, 14, 40);
            font-weight: 700;
            font-size: 12px;
            span {
              font-size: 18px;
            }
            em {
              font-style: normal;
            }
          }
        }
      }
    }
  }
}
</style>