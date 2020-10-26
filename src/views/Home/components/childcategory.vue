<!--  -->
<template>
  <div>
    <div class="homeChildTitle">
      <div v-for="(v, i) in datalist.category" :key="i">
        <div class="imgbox"><img :src="v.touch_icon" alt="" /></div>
        <div class="name">{{ v.cat_name }}</div>
      </div>
    </div>
    <div class="homeChildBrand">
      <div class="childBrandTitle">品牌精选</div>
      <div class="childBrandContent">
        <div v-for="(k, i) in datalist.brand" :key="i">
          <div class="boximg">
            <img :src="k.brand_logo" alt="" />
          </div>
          <p>{{ k.brand_name }}</p>
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
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    datalist() {
      return this.$store.state.IndexChildTitle;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  mounted() {},
};
</script>
<style lang='less'>
.homeChildTitle {
  width: calc(100% - 2rem);
  height: 12.1rem;
  margin: 1rem;
  background-color: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  > div {
    width: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .imgbox {
      width: 100%;
      height: 7.5rem;
      background-color: #f00;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.homeChildBrand {
  width: calc(100% - 2rem);
  margin: 0 1rem;
  background-color: #fff;
  border-radius: 1rem;
  .childBrandTitle {
    font-size: 1.5rem;
    color: #000;
    padding: 2rem 2rem 1rem;
    box-sizing: border-box;
    width: 100%;
    height: 5rem;
  }
  .childBrandContent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 25%;
      text-align: center;
      margin-bottom: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .boximg {
        width: 100%;
        height: 5.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
}
</style>