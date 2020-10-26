<!-- 首页-首页-轮播列表 -->
<template>
  <div class="swiperList">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(v, i) in datalist" :key="i">
        <ul class="swiper-ul">
          <li v-for="(k, i) in v" :key="i">
            <a href="javascript:;">
              <img :src="k.img" alt @click="clickFn(k)" />
              <div>{{ k.desc }}</div>
            </a>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
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
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      list1: [1, 2, 3],
    };
  },
  //监听属性 类似于data概念
  computed: {
    datalist() {
      var data = this.$store.state.swiperlistdata;
      var page = 10;
      var data1 = [];
      for (var i = 0; i < data.length; i++) {
        var index = Math.floor(i / page);
        if (!data1[index]) {
          data1[index] = [];
          data1[index].push(data[i]);
        } else {
          data1[index].push(data[i]);
        }
      }
      return data1;
    },
  },
  //监控data中的数据变化
  watch: {},
  methods: {
    clickFn(data) {
      console.log(data);
    },
  },
};
</script>
<style lang='less'>
.swiperList {
  height: 21.5rem;
  margin: 1rem 1rem 0;
  padding: 0;
  border-radius: 1rem 1rem 0 0;
  background-color: #fff;
  .swiper-ul {
    display: flex;
    flex-wrap: wrap;
    li {
      height: 9.2rem;
      // flex:1;
      width: 20%;
      text-align: center;
      a {
        color: #000;
      }
      img {
        width: 100%;
      }
    }
  }
  .mint-swipe-indicators {
    .mint-swipe-indicator {
      width: 1.5rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      margin: 0px;
      background: linear-gradient(-88deg, #ff4f2d, #f91f27);
    }
    .is-active {
      opacity: 1;
    }
  }
}
</style>