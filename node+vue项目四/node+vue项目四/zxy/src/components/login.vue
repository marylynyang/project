<template>
  <div class="content">
    <!--使用 背景canvas组件-->
    <bg-canvas></bg-canvas>
    <!--包裹表单的div-->
    <div class="login_wrap" @keydown.enter="login()">
      <img src="../assets/back_logo.png" class="logo" alt="">
      <form>
        <!--图标和输入框-->
        <div class="oneinput_box">
          <span class="icon">
            <i class="fa fa-user"></i>
          </span>
          <input type="text" placeholder="用户名" ref="input_user">
        </div>
        <div class="oneinput_box">
          <span class="icon">
            <i class="fa fa-lock"></i>
          </span>
          <input type="password" placeholder="密码" ref="input_pw">
        </div>
        <div class="oneinput_box">
          <span class="icon">
            <i class="fa fa-lock"></i>
          </span>
          <input style="width: 310px;" type="text" placeholder="请输入验证码" ref="input_veri">
          <veri ref="veriCode"></veri>
        </div>
      </form>
      <button class="btn btn-info" type="button" @click="findPw">忘记密码
      </button>
      <button type="button" class="btn btn-success" @click="login">登录
      </button>
    </div>
  </div>
</template>
<script> /*js代码*/
/*引入背景的canvas 组件*/
import bgCanvas from "./bgCanvas.vue"
/*引入验证码的组件*/
import veri from "./verification.vue"
export default { // 组件的options
  components: {bgCanvas, veri},// 注册 背景组件  bg-canvas 验证码的组件veri
  mounted:function () {
    //refs ==>  用户名的输入框  ==》 获取焦点
    this.$refs.input_user.focus();

  },
  methods: {
    findPw: function () { // 忘了密码
      alert("服务暂未开通")
    },
    login: function () {// 登录的
//        1.提交的验证码 this.$refs.input_veri
//
//       2. 验证码匹配成功  ==》登录  用户名  密码  this.$refs.input_user.value
//      this.$refs.input_pw.value  ==>发送到后台
//         success  跳转
//      err   alert(err)
//      alert(5455555)


//       在标签中 用ref=“绑定的值”  绑定  元素
//      js代码中(vue实例里面)  this.$refs.绑定的值==》 绑定的元素 .value
//
//     绑定的input的值
      // 验证码
      var veri = this.$refs.input_veri.value.trim();
      // 用户名
      var userName = this.$refs.input_user.value.trim();
      // 密码
      var password = this.$refs.input_pw.value.trim();
      var _this = this;// 保存this指向
//        console.log(this.$refs.input_user.value)
      // 提交验证码
      this.$axios({
        method: "get",
        url: '/VueHandler/AdminLoginAndRegHandler?action=checkVerification',
        // 发送的数据
        params: {veri: veri}// trim() 去空格的
//      ref 标签里面绑定 元素
//        js代码 this.$refs.input_veri.value
      }).then(function (respose) {// ajax 成功后执行
        if (respose.data.success) {// 验证码匹配成功
          alert("验证码匹配成功");
          // 登录
//          提交用户名密码
//          请求的路径  方式  数据  返回值  接口文档
          _this.$axios({
            method: "post",//
            url: "/VueHandler/AdminLoginAndRegHandler?action=login",
            data: {// 发送的数据 用户名密码
              userName: userName,
              password: password
            }
          }).then(function (response) {// AJAX 发送成功
            if (response.data.success) { // 检测是否登录成功
              alert("登录成功");
              window.location.href="/index"
            } else {
              alert("登录失败");

            }
          }).catch(function (err) {
            alert(err)
          })

        } else {//验证码匹配失败
          alert(respose.data.err);
          //1.验证码  绑定  ref="veriCode"
          //2.验证码 变化
         _this.$refs.veriCode.changeVeri()
        }


      }).catch(function (err) {// ajax// 失败后执行的
        alert(err)
      })


    },

  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .content {
    background:url("../assets/demo-1-bg.jpg") no-repeat center bottom;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .content img {
    border: none;
  }

  .content bg-cavas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .login_wrap {
    width: 560px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -180px;
    margin-left: -280px;
    z-index: 3;
    color: #fff;
  }

  .login_wrap .logo {
    margin-left: 180px;
    margin-bottom: 29px;
  }

  .login_wrap form {
    margin-left: 50px;
  }

  .login_wrap input {
    background: transparent;
    width: 413px;
    height: 34px;
    line-height: 34px;
    border: 1px solid #000000;
    margin-left: 0;
    padding-left: 5px;
    color: #fff;
  }

  input:focus {
    outline: none;
  }

  .oneinput_box {
    position: relative;
    margin-bottom: 25px;
    overflow: hidden;
    width: 457px;
    padding-left: 10px;
  }

  .oneinput_box * {
    float: left;
  }

  .oneinput_box span {
    background:#000000;
    border: 1px solid #000000;
    padding: 11px 9px;
    border-right: none 0;
    height: 12px;
    width: 10px;
    padding-left: 10px;
    overflow: hidden;

  }

  .oneinput_box .icon {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
  }

  .oneinput_box .fa-lock {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
    z-index: 1000000000;
  }

  .erwei_code {
    width: 91px;
    height: 34px;
    float: right;
    cursor: pointer;
  }

  .btn {
    width: 113px;
    height: 34px;
    line-height: 34px;
    border: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .btn-info {
    background: #3cadcf;
    float: left;
  }

  .btn-info:hover {
    background: #1f8fb0;
  }

  .btn-success {
    background: #5cb85c;
    float: right;
  }

  .btn-success:hover {
    background: #449d44;
  }



</style>



