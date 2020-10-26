<!-- 分类右边 -->
<template>
  <div class="right">
    <div class="titLogo">
      <img :src="imgit" alt="" />
    </div>
    <div
      class="item"
      v-for="(k, index) in this.$store.state.rightdata"
      :key="index"
    >
      <div class="title">
        <i class="row"></i>
        <a href="">{{ k.cat_name }}</a>
      </div>
      <ul>
        <li v-for="(v, i) in k.child" :key="i">
          <a href="javascript:;" @click="fn(v.cat_id)">
            <img :src="v.touch_icon" alt="" />
            <span>{{ v.cat_name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="mask" v-show="flag"><span>稍等片刻.......</span></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
import { Indicator } from "mint-ui";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      imgit: "",
      flag: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to) {
      this.axiosFN(to.params.cid);
      // 执行加载圈
      this.jiazai();
    },
  },
  //方法集合
  methods: {
    axiosFN(cid) {
      Axios.get("/api/catalog/list/" + cid).then((res) => {
        if (res.status == 200) {
          // 关闭加载圈
          Indicator.close();
          // 向Vuext提交更新函数
          this.$store.commit("changerightdata", res.data.data);
          // 获得vuex中左侧数据的大块图片
          var arr = this.$store.state.leftdata;
          // 对其进行筛选
          arr = arr.filter((item) => {
            return item.cat_id == cid;
          });
          // 将图片设置上去
          this.imgit = arr[0].touch_catads;
        }
      });
    },
    fn(id) {
      this.$router.push("/categorygoods/" + id);
    },
    jiazai() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "triple-bounce",
      });
    },
  },
  mounted() {
    // console.log(this.$route.params.cid);
    this.axiosFN(this.$route.params.cid);
    this.jiazai();
  },
};
</script>
<style lang='less'>
.right {
  position: fixed;
  top: 5rem;
  left: 8.4rem;
  overflow-y: scroll;
  bottom: 4.9rem;
  right: 0;
  .titLogo {
    width: 100%;
    height: 9.6rem;
    overflow: hidden;
    margin-top: 1.1rem;
    border-radius: 0.2rem;
    padding: 0 1.1rem;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item {
    overflow: hidden;
    padding: 0 1.1rem;
    margin-bottom: -1.1rem;
    .title {
      margin: 1.1rem 0;
      position: relative;
      overflow: hidden;
      height: 2.5rem;
      font-size: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .row {
        display: block;
        width: 6.5rem;
        height: 0.08rem;
        background: #e0e0e0;
      }
      a {
        position: absolute;
        top: 0.45rem;
        left: 50%;
        margin-left: -2.5rem;
        min-width: 5rem;
        height: 1.6rem;
        background: #fff;
        line-height: 1.6rem;
        text-align: center;
        overflow: hidden;
        color: #333;
        position: absolute;
      }
    }
    ul {
      overflow: hidden;
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33.33%;
        box-sizing: border-box;
        position: relative;
        text-align: center;
        margin-bottom: 2rem;
        a {
          img {
            display: block;
            width: 5.2rem;
            height: 5.2rem;
            overflow: hidden;
            margin: 0 auto;
            border-radius: 0;
          }
          span {
            display: block;
            height: 2rem;
            line-height: 2rem;
            overflow: hidden;
            text-align: center;
            font-size: 1.2rem;
            color: #777;
            margin-top: 1rem;
          }
        }
      }
    }
  }
  .mask {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 2px;
    bottom: 0px;
    background-color: rgba(255, 255, 255);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>