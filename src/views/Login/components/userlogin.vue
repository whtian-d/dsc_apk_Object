<!-- 登录box -->
<template>
  <div class="loginbox">
    <form action="">
      <div class="loginheader">
        <i class="iconfont icon-back" onclick="window.history.back()"></i>
        <h1>用户登录</h1>
      </div>
      <div class="inputwarp">
        <div class="userinput">
          <div class="logo">
            <i class="iconfont icon-user"></i>
          </div>
          <input
            type="text"
            v-model="username"
            placeholder="请输入用户名/手机号"
          />
        </div>
      </div>
      <div class="inputwarp">
        <div class="userinput">
          <div class="logo">
            <i class="iconfont icon-pwd"></i>
          </div>
          <input
            type="password"
            v-model="pass"
            v-if="pashide"
            placeholder="请输入密码"
          />
          <input type="text" v-model="pass" v-else placeholder="请输入密码" />
          <i class="iconfont icon-liulan1 psd" @click="pashide = !pashide"></i>
        </div>
      </div>
      <div class="inputwarp">
        <div class="userinput">
          <div class="logo">
            <i class="iconfont icon-pwd"></i>
          </div>
          <input type="text" v-model="captcha" placeholder="请输入验证码" />
          <img
            src="http://114.215.173.225:3000/api/v1/users/captcha "
            @click="getimgCode"
            ref="imgcode"
            alt=""
          />
        </div>
      </div>
      <a href="javascript:;" class="register" @click="registerFn">新用户注册</a>
      <a href="" class="wangji">忘记密码？</a>
      <div style="clear: both"></div>
      <button class="loginbtn" @click.prevent="login">登录</button>
      <a class="info" href="javascript:;" @click="routeFn">短信验证码登录 ></a>
    </form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { loginFn } from "@/api/login";
import { Toast } from "mint-ui";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      pashide: true,
      pass: "",
      username: "",
      captcha: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    changepas() {
      this.pashide = !this.pashide;
      console.log(1121212);
    },
  },
  //方法集合
  methods: {
    getimgCode() {
      this.$refs.imgcode.src =
        "http://114.215.173.225:3000/api/v1/users/captcha?t=" +
        new Date().getTime();
    },
    routeFn() {
      this.$router.push("/infologin");
    },
    registerFn() {
      this.$router.push("/register");
    },
    async login() {
      var result = await loginFn(this.username, this.pass, this.captcha);
      if (result.status == 200) {
        this.$store.commit("isLogin");
        this.$router.push("/mine");
      } else {
        Toast("登录失败！！");
      }
    },
  },
  mounted() {},
};
</script>
<style lang='less'>
.loginbox {
  padding: 1.1rem;
  form {
    .loginheader {
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
    .inputwarp {
      margin-top: 2.5rem;
      overflow: hidden;
      .userinput {
        line-height: 40px;
        height: 40px;
        position: relative;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        padding: 0.8rem 0;
        display: flex;
        font-size: 1.5rem;
        box-sizing: border-box;
        .psd {
          position: absolute;
          top: 0px;
          right: 1rem;
        }
        .logo {
          line-height: 23px;
          i {
            color: #bdbdbd;
            margin-right: 0.5rem;
          }
        }
        input {
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
    }
    a {
      font-size: 1.4rem;
      line-height: 2;
      margin: 0.5rem 0 0;
      color: #4b89dc;
      display: block;
    }
    .register {
      float: left;
    }
    .wangji {
      float: right;
    }
    .loginbtn {
      margin-top: 2rem;
      border-radius: 0.5rem;
      background: #f92028;
      font-size: 1.4rem;
      color: #fff;
      border: 0;
      text-align: center;
      padding: 1.1rem 0;
      width: 100%;
      display: block;
    }
    .info {
      margin-top: 2rem;
      text-align: center;
      color: #f92028;
    }
  }
}
</style>