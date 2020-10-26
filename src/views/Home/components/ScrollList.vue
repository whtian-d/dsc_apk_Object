<!-- 首页-滚动列表 -->
<template>
  <div class="scrollList">
    <miaosha />
    <div class="scrollcontent">
      <ul :style="contentobj" id="ul">
        <li v-for="v in this.$store.state.scrollList" :key="v.goods_id">
          <img :src="v.goods_thumb" alt="" />
          <p>{{ v.goods_name }}</p>
          <div class="newprice">￥{{ v.team_price }}</div>
          <div class="oldprice">￥{{ v.shop_price }}</div>
        </li>
      </ul>
    </div>
    <div class="scroll-warp">
      <div class="scroll" :style="scrollobj"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import miaosha from "./miaoshaheader";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { miaosha },
  data() {
    //这里存放数据
    return {
      datal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      startX: "",
      moveX: "",
      screenW: document.documentElement.clientWidth,
      scrollWarpW: 110,
      bili: "",
      scrollmoveX: "",
      newLeft: 0,
      contentNewLeft: 0,
      contentOldLeft: 0,
    };
  },
  computed: {
    scrollcontentW() {
      return this.$store.state.scrollUlW;
    },
    scrollW() {
      return (this.scrollWarpW * this.screenW) / this.$store.state.scrollUlW;
    },
    scrollobj() {
      return {
        width: `${this.scrollW}px`,
        left: `${this.newLeft}px`,
      };
    },
    contentobj() {
      return {
        left: `${this.contentNewLeft}px`,
      };
    },
  },
  //方法集合
  methods: {
    touchstartFn(e) {
      this.startX = e.touches[0].pageX;
      // console.log("起点位置：" + this.startX);
    },
    touchMoveFn(e) {
      this.moveX = e.touches[0].pageX - this.startX;
      // 内容的移动距离
      this.contentNewLeft = this.contentOldLeft + this.moveX;
      // console.log(this.contentNewLeft);
      // 上面内容移动的最大距离
      var maxcontentX = this.scrollcontentW - this.screenW + 20;
      // console.log(maxcontentX);
      if (this.contentNewLeft >= 0) {
        this.contentNewLeft = 0;
      }
      if (this.contentNewLeft < -maxcontentX) {
        this.contentNewLeft = -maxcontentX;
      }
      this.bili = this.contentNewLeft / maxcontentX;
      // 获得滚动条的最大移动距离
      var scrollMaxX = this.scrollWarpW - this.scrollW;
      // 获得滚动条移动的距离
      this.scrollmoveX = -(scrollMaxX * this.bili);
      this.newLeft = this.scrollmoveX;
    },
    touchEndFn() {
      this.oldLeft = this.newLeft;
      this.contentOldLeft = this.contentNewLeft;
    },
  },
  mounted() {
    // console.log(this.$store.state.scrollList);
    this.$el.addEventListener("touchstart", this.touchstartFn, false);
    this.$el.addEventListener("touchmove", this.touchMoveFn, false);
    this.$el.addEventListener("touchend", this.touchEndFn, false);
    this.$store.dispatch("actIndexScrollList", this.scrollWarpW);
  },
};
</script>
<style lang='less'>
.scrollList {
  height: 25rem;
  margin: 10px 10px 0;
  position: relative;
  .scrollcontent {
    position: relative;
    overflow: hidden;
    height: 20rem;
    &::-webkit-scrollbar {
      display: none;
    }
    ul {
      // width: 110rem;
      height: 20rem;
      display: flex;
      position: absolute;
      top: 0px;
      left: 0px;
      li {
        width: 11rem;
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        img {
          width: 100%;
        }
        p {
          font-size: 1.3rem;
          color: #000;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .newprice {
          margin-top: 6px;
          color: #f00;
          padding: 0;
          border: 0;
          font-weight: 500;
          list-style: none;
        }
        .oldprice {
          font-size: 10.5px;
          font-weight: normal;
          display: inline-block;
          color: rgb(136, 136, 136);
          text-decoration: line-through;
        }
      }
    }
  }
  .scroll-warp {
    width: 11rem;
    height: 6px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -5.5rem;
    border-radius: 6px;
    .scroll {
      width: 2rem;
      height: 100%;
      border-radius: 6px;
      background-color: #f00;
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }
}
</style>