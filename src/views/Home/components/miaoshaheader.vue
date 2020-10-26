<!-- 首页-秒杀头部 -->
<template>
  <div class="miaoshaHeader">
    <div class="logo">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png"
        alt=""
      />
    </div>
    <div class="time">
      <span>距离结束还剩：</span>
      <div class="daojishi">
        <span>{{ dd }}</span
        >: <span>{{ hh }}</span
        >: <span>{{ mm }}</span
        >:
        <span>{{ ss }}</span>
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
  data() {
    //这里存放数据
    return {
      dd: 0,
      hh: 0,
      mm: 0,
      ss: 0,
      timer: "",
    };
  },
  computed: {},
  methods: {
    miaoshaFn() {
      var date = +new Date();
      var newDate = +new Date("2020-10-16 20:13:00");
      var cha = (newDate - date) / 1000;
      this.dd = Math.floor(cha / 60 / 60 / 24)
        .toString()
        .padStart(2, "0");
      this.hh = Math.floor((cha / 60 / 60) % 24);
      this.mm = Math.floor((cha / 60) % 60);
      this.ss = Math.floor(cha % 60);
    },
  },
  mounted() {
    this.timer = setInterval(this.miaoshaFn, 1000);
  },
};
</script>
<style lang='less'>
.miaoshaHeader {
  height: 5rem;
  padding: 2rem 0.9rem 1rem 1.3rem;
  box-sizing: border-box;
  border-radius: 2.5rem 2.5rem 0 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 100px;
    img {
      width: 100%;
    }
  }
  .time {
    display: flex;
    text-align: center;
    align-items: center;
    span {
      margin-right: 0.2rem;
    }
    .daojishi {
      span {
        width: 2rem;
        height: 2rem;
        // background-color: orange;
        background: linear-gradient(88deg, orange, red);
        border-radius: 5px;
        padding: 5px;
      }
    }
  }
}
</style>