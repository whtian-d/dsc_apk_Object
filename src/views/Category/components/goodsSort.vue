<!-- 分类-详情页 -->
<template>
  <div class="categoryGoods">
    <div class="goodsitem active">
      综合<i class="iconfont icon-xiajiantou1"></i>
    </div>
    <div class="goodsitem">新品</div>
    <div class="goodsitem">销量</div>
    <div class="goodsitem">价格</div>
    <div class="goodsitem">筛选</div>
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
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style lang='less'>
.categoryGoods {
  height: 3.5rem;
  padding: 0px 1.3rem;
  box-sizing: border-box;
  display: flex;
  background-color: #fff;
  .goodsitem {
    width: 20%;
    height: 100%;
    text-align: center;
    line-height: 3.5rem;
  }
  .active {
    color: red;
  }
}
</style>