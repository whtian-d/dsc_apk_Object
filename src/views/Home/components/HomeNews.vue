<!-- 首页-新闻 -->
<template>
  <div class="HomeNews">
    <div class="news">
      <div class="newlogo">
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978466633.png"
          alt
        />
      </div>
      <ul ref="news" :class="{ active: flag == true }">
        <li v-for="v in newsListDatas" :key="v.id">{{ v.title }}</li>
      </ul>
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
      flag: false,
      timer: "",
      newsListDatas: [
        {
          id: 1,
          title: "新闻001",
        },
        {
          id: 2,
          title: "新闻002",
        },
        {
          id: 3,
          title: "新闻003",
        },
        {
          id: 4,
          title: "新闻004",
        },
        {
          id: 5,
          title: "新闻005",
        },
      ],
    };
  },
  //方法集合
  methods: {
    autoNews() {
      var that = this;
      var oUl = this.$refs.news;
      that.flag = !that.flag;
      oUl.style.marginTop = "-4rem";
      setTimeout(function () {
        that.flag = !that.flag;
        that.newsListDatas.push(that.newsListDatas[0]); //将数组的第一个元素添加到数组末尾
        that.newsListDatas.shift();
        oUl.style.marginTop = "0";
      }, 500);
    },
  },
  mounted() {
    this.timer = setInterval(this.autoNews, 2000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style lang='less'>
.HomeNews {
  height: 4.7rem;
  margin: 0 1rem;
  border-radius: 0 0 1rem 1rem;
  position: relative;
  padding: 0.7rem 1rem;
  padding-top: 0;
  background-color: #fff;
  align-items: center;
  .news {
    height: 4rem;
    padding-top: 0.7rem;
    width: 100%;
    border-top: 1px solid #cccccc;
    display: flex;
    overflow: hidden;
    .newlogo {
      width: 30%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    ul {
      width: 70%;
      padding-left: 1rem;
      position: relative;
      li {
        height: 4rem;
        line-height: 4rem;
        font-size: 1.4rem;
      }
    }
    .active {
      transition: all 0.5s;
    }
  }
}
</style>