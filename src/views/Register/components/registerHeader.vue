<!--  -->
<template>
  <div class="registerheaderWarp">
    <div class="registerheader">
      <i class="iconfont icon-back"></i>
      <h1>新用户注册</h1>
    </div>
    <div class="register-ul">
      <div class="register-item">
        <div class="label">
          <i class="iconfont icon-pic"></i>
        </div>
        <div class="inputkey">
          <input type="text" placeholder="请输入图片验证码" />
        </div>
        <div class="key" @click="getimgcode">
          <img
            ref="imgcode"
            src="http://114.215.173.225:3000/api/v1/users/captcha"
            alt=""
          />
        </div>
      </div>
      <div class="register-item">
        <div class="label">
          <i class="iconfont icon-mobiles"></i>
        </div>
        <div class="inputkey">
          <input type="text" v-model="username" placeholder="请输入手机号" />
        </div>
        <div class="keyphone">
          <label v-if="codesucc" @click="getnumcode">获取验证码</label>
          <label v-else>{{ second }}s</label>
        </div>
      </div>
      <div class="register-item">
        <div class="label">
          <i class="iconfont icon-904anquansaoma"></i>
        </div>
        <div class="inputkey">
          <input type="text" placeholder="请输入短信验证码" />
        </div>
      </div>
      <div class="register-item">
        <div class="label">
          <i class="iconfont icon-key"></i>
        </div>
        <div class="inputkey">
          <input type="text" placeholder="请输入登录密码" />
        </div>
      </div>
      <button class="loginbtn">立即注册</button>
      <a href="javascript:;" class="qiehuan" @click="routeFn">账号密码登录 ></a>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      username: "",
      codesucc: true,
      second: 10,
      timer: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    resusername() {
      return /^[1][3|5|6|7|8|9][0-9]{9}$/.test(this.username);
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getnumcode() {
      if (!this.resusername) {
        Toast("请输入正确的手机号");
      } else {
        this.codesucc = !this.codesucc;
        this.timer = setInterval(() => {
          this.second--;
          if (this.second == 0) {
            clearInterval(this.timer);
            this.codesucc = !this.codesucc;
          }
        }, 1000);
      }
    },
    routeFn() {
      this.$router.push("/login");
    },
    getimgcode() {
      this.$refs.imgcode.src =
        "http://114.215.173.225:3000/api/v1/users/captcha?t=" +
        new Date().getTime();
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.registerheaderWarp {
  padding: 1.1rem;
  overflow: hidden;
  background-color: #fff;
  .registerheader {
    position: relative;
    margin-top: 1rem;
    overflow: hidden;
    h1 {
      font-size: 3rem;
      margin-top: 3.5rem;
      line-height: 1.1;
      color: inherit;
      font-weight: 500;
    }
  }
  .register-ul {
    margin-top: 2.5rem;
    overflow: hidden;
    text-align: center;
    .qiehuan {
      margin-top: 2rem;
      display: block;
      color: #f00;
      font-size: 1.4rem;
    }
    .loginbtn {
      width: 100%;
      height: 4.1rem;
      background-color: #f00;
      margin-top: 2rem;
      border-radius: 10px;
      color: #fff;
      font-size: 1.4rem;
    }
    .register-item {
      height: 4.1rem;
      border-bottom: 1px solid #ddd;
      overflow: hidden;
      padding: 0.8rem 0;
      position: relative;
      font-size: 1.5rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .label {
        width: 2.1rem;
        color: #bdbdbd;
        margin-right: 0.5rem;
      }
      .inputkey {
        flex: 1;
        input {
          border: 0;
          height: 2.4rem;
          line-height: 2.4rem;
          box-sizing: border-box;
          width: 100%;
          color: #666;
          font-size: 1.5rem;
          padding: 0 1rem 0 0;
          background: none;
        }
      }
      .key {
        width: 6rem;
        img {
          width: 100%;
        }
      }
      .keyphone {
        padding: 0 0.8rem;
        width: 9.1rem;
        height: 2.4rem;
        border-left: 1px solid #ccc;
        color: #666666;
        text-align: center;
        line-height: 2.4rem;
      }
    }
  }
}
</style>