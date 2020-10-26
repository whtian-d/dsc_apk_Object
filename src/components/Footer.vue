<!--  -->
<template>
  <div class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <div>
          <i
            class="iconfont icon-shouyex"
            v-if="this.routeractive.includes('home')"
          ></i>
          <i class="iconfont icon-1" v-else></i>
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/category/858" tag="li">
        <div>
          <i
            :class="[
              'iconfont',
              'icon-leimupinleifenleileibie2',
              { active1: this.routeractive.includes('category') },
            ]"
            v-if="this.routeractive.includes('category')"
          ></i>
          <i class="iconfont icon-leimupinleifenleileibie" v-else></i>
        </div>
        <span>分类</span>
      </router-link>
      <router-link to="/search" tag="li">
        <div>
          <i class="iconfont icon-sousuo2" v-if="routeractive == 'search'"></i>
          <i class="iconfont icon-sousuo2" v-else></i>
        </div>
        <span>搜索</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <div>
          <i
            class="iconfont icon-gouwucheman"
            v-if="routeractive == 'cart'"
          ></i>
          <i class="iconfont icon-gouwuche" v-else></i>
        </div>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <div>
          <i
            class="iconfont icon-wodedangxuan"
            v-if="routeractive == 'mine'"
          ></i>
          <i class="iconfont icon-profile" v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
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
      routeractive: "home",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(this.$route.name);
    this.routeractive = this.$route.path.slice(1);
    console.log(this.routeractive.includes("home"));
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang='less'>
li {
  cursor: pointer;
}
.router-link-active {
  color: red;
}
.active1 {
  color: red;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 50;
}
.footer ul {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 4.9rem;
  align-items: center;
  li {
    width: 20%;
    text-align: center;
  }
}
</style>