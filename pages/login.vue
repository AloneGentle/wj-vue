<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">
        <el-form-item class="input-prepend restyle" prop="username" :rules="[{
              required: true,
              message: '请输入用户名',
              trigger: 'blur',
            }]">
          <div>
            <el-input type="text" placeholder="用户名" v-model="user.username"/>
            <i class="iconfont icon-phone"/>
          </div>
        </el-form-item>

        <el-form-item class="input-prepend" prop="password"
                      :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <div>
            <el-input type="password" placeholder="密码" v-model="user.password"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin()"/>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";
import cookie from "js-cookie";
import login from "@/api/login";

export default {
  layout: "sign",

  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      loginInfo: {},
    };
  },

  methods: {
    submitLogin() {
      login.loginUser(this.user).then((Response) => {
        if (Response.data.success) {
          //登录成功信息提示
          this.$message({
            type: "success",
            message: " 登录成功！",
          });
          //把token存在cookie中,domain为cookie的作用范围
          cookie.set("token", Response.data.data.token, {
            domain: "localhost",
          });
          //登录成功根据token获取用户信息
          login.findUserInfo().then((Response) => {
            this.loginInfo = Response.data.data.userInfo;
            //将用户信息记录cookie
            cookie.set("ucenter", JSON.stringify(this.loginInfo), {
              domain: "localhost",
            });
            //跳转页面
            // window.open("/");
            window.location.href = "/";
          });
        } else {
          //登录失败信息提示
          this.$message({
            type: "error",
            message: Response.data.message,
          });
        }
      });
    },
  },
};
</script>
<style>
.el-form-item__error {
  z-index: 9999999;
}
</style>
