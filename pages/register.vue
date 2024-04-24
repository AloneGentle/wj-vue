<template>
  <div class="main">
    <div class="title">
      <a href="/login">登录</a> <span>·</span>
      <a class="active" href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="params">
        <el-form-item class="input-prepend restyle" prop="nickname"
          :rules="[
            {
              required: true,
              message: '请输入你的昵称',
              trigger: 'blur',
            },
          ]">
          <div>
            <el-input type="text" placeholder="你的昵称" v-model="params.nickname"/>
            <i class="iconfont icon-user" />
          </div>
        </el-form-item>
        <el-form-item
          class="input-prepend"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <div>
            <el-input type="password" placeholder="设置密码" v-model="params.password"/>
            <i class="iconfont icon-password" />
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-up-button" value="注册" @click="submitRegister()"/>
        </div>
        <p class="sign-up-msg">
          点击 “注册” 即表示您同意并愿意遵守简书<br />
          <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>
          和<a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a>。
        </p>
      </el-form>
    </div>
  </div>
</template>

 <script>
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";
import register from "@/api/register";

export default {
  layout: "sign",
  data() {
    return {
      params: {
        code: "",
        nickname: "",
        password: "",
      },
    };
  },
  methods: {
    submitRegister() {
      register.registerUser(this.params).then(() => {
        //提示注册成功
        this.$message({
          type: "success",
          message: "注册成功",
        });
        //跳转到登录页面
        this.$router.push({ path: "/login" });
      });
    },
  },
};
</script>
