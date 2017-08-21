<template>
  <div>
    <div id="header_wrap">
      <div class="header_connect">
        <div class="header_nav_icon">
          <img src="../assets/back_logo.png" alt="" @click="index" style="cursor: pointer">
        </div>

        <div class="header_nav">
          <dl class="header_list">
            <dt>
              <i class="fa fa-globe icon"></i>
              <span>卓新思创</span>
            </dt>
            <dt>
              <i class="fa fa-comment icon"></i>
              <span>在线客服</span>
            </dt>
            <dt>
              <i class="fa fa-book icon"></i>
              <span>常见问题</span>
            </dt>
            <dt @click="safeshow">
              <i class="fa fa-lock icon"></i>
              <span>安全中心</span>
            </dt>
            <dt @click="signout">
              <i class="fa fa-sign-out icon"></i>
              <span>退出</span>
            </dt>
            <dt style="padding:0 0 0 30px">
              <span style="margin-right: 5px">小明</span><img src="../assets/touxiang.jpg" alt="" class="touxiang">
            </dt>
          </dl>
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
    <div style="position: relative">
      <div class="header_bgCol">
        <div class="header_userNav">
          <ul class="header_userList">
            <li class="click_userguanli" @mouseover="show()" @mouseout="hide()">
              <i class="fa fa-user icon"></i>
              <span>用户管理</span>
            </li>
            <li class="click_userguanli" @mouseover="show1()" @mouseout="hide1()">
              <i class="fa fa-book icon"></i>
              <span>课程管理</span>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
      <!--用户管理-->
      <div class="userNameWrap" v-show="isShow"  @mouseover="show()" @mouseout="hide()">
        <div class="userName_connect">
          <div class="SystemName"  @click="admin()">
            <i class="fa fa-user System_userIcon"></i>
            <span class="white">系统人员</span>
            <div class="clear"></div>
          </div>
          <div class="xueyuanguanli">
            <i class="fa fa-users System_userIcon"></i>
            <span class="white">学员管理</span>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
      <!--课程管理-->
      <div class="userNameWrap" v-show="isShow1"  @mouseover="show1()" @mouseout="hide1()">
        <div class="userName_connect">
          <div class="SystemName">
            <i class="fa fa-user System_userIcon"></i>
            <span class="white">课程管理</span>
            <div class="clear"></div>
          </div>
          <div class="xueyuanguanli">
            <i class="fa fa-users System_userIcon"></i>
            <span class="white">课程管理</span>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
    </div>





    <div id="safeshow_wrap" v-show="isSwitch">
      <safeshow @close="close"></safeshow>
    </div>
  </div>
</template>
<script>
  import safeshow from "./safeshow.vue"

  export default {
    components: {
      safeshow
    },
    data() {
      return {isSwitch: false,isShow:false,isShow1:false}
    },
    methods: {
      safeshow: function () {  //弹出修改密码弹窗的函数
        this.isSwitch = true
      },
      signout: function () {  //退出的函数
        //判断 session 清空
        this.$axios({
          url: "/VueHandler/AdminHandler?action=quit",
          method: "get"
        }).then(function (response) {
          if (response.data.success) {
            alert("退出成功");
            window.location.href = "/login"
          }
          else {
            alert(response.data.err)
          }

        }).catch(function (err) {
          alert(err)
        })
      },
      close: function () {  //弹窗关闭的函数
        this.isSwitch = false
      },
      show:function () {
        this.isShow = true
      },
      hide:function () {
        this.isShow = false
      },
      show1:function () {
        this.isShow1 = true
      },
      hide1:function () {
        this.isShow1 = false
      },
      admin:function () {
        window.location.href="/admin"
      },
      index:function () {
        window.location.href="/index"  //跳转到首页
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .clear {
    clear: both;
  }

  #header_wrap {
    width: 100%;
    background: black;
  }

  .header_bgCol {
    width: 100%;
    background: linear-gradient(to right, #222b60, #4d5d9e);
  }

  .header_connect {
    width: 1100px;
    margin: 0 auto;
    /*background:cornflowerblue;*/
  }

  .header_nav_icon {
    float: left;
    padding: 4px 0 0 0;
  }

  .header_nav {
    float: right;
  }

  .header_list {
    color: #858585;
  }

  .header_userList li {
    float: left;
    width: 130px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    cursor: pointer;
    list-style: none;
    /*background: red;*/
  }

  .header_list dt {
    float: left;
    padding: 15px 0 15px 30px;
    font-size: 14px;
    cursor: pointer;
  }

  .header_list dt:hover {
    color: white;
  }

  .touxiang {
    vertical-align: middle;
  }

  .header_userNav {
    width: 850px;
    margin: 0 auto;
    background: black;
    color: white;
  }

  .icon {
    margin-right: 4px;
  }

  .userNameWrap {
    width: 100%;
    background: white;
    position:absolute;
    z-index: 1;

    /*top:0;*/
    /*left: 0;*/
    /*display: none;*/
  }

  .userName_connect {
    width: 900px;
    height: 130px;
    margin: 0 auto;
    /*background: red;*/
    /*background: white;*/
  }

  .SystemName {
    width: 235px;
    height: 40px;
    border: 1px solid #f6f6f6;
    float: left;
    margin-top: 45px;
    cursor: pointer;
  }

  .xueyuanguanli {
    width: 235px;
    height: 40px;
    float: left;
    border: 1px solid #f6f6f6;
    margin-top: 45px;
    margin-left: 30px;
    cursor: pointer;
  }

  .System_userIcon {
    float: left;
    line-height: 40px;
    margin-left: 45px;
    color: #4c5c9c;
  }

  .SystemName .white {
    float: left;
    line-height: 40px;
    margin-left: 10px;
    font-size: 15px;
    color: black;
  }

  .xueyuanguanli .white {
    float: left;
    line-height: 40px;
    margin-left: 10px;
    font-size: 15px;
    color: black;
  }

  .SystemName:hover{
     background: #4c5c9c;
     color: white;
  }
  .SystemName:hover .System_userIcon{
    color: white;
  }
  .SystemName:hover .white{
    color: white;
  }

  .xueyuanguanli:hover{
    background: #4c5c9c;
  }
  .xueyuanguanli:hover .System_userIcon{
    color: white;
  }
  .xueyuanguanli:hover .white{
    color: white;
  }
  .click_userguanli{
    position: relative;
    /*background: red;*/
  }

  .click_userguanli::before{
    content: "";
    width: 8px;
    height: 8px;
    transition: 0.3s ease;
    top:18px;
    left:50px;
    /*background: white;*/
    position: absolute;
    border-top: 2px solid white;
    border-left:2px solid white;
    opacity: 0;
  }

  .click_userguanli::after{
    content: "";
    width: 8px;
    height: 8px;
    transition: 0.3s ease;
    bottom:18px;
    right:50px;
    /*background: white;*/
    position: absolute;
    border-bottom: 2px solid white;
    border-right:2px solid white;
    opacity:0;
  }

  .click_userguanli:hover::before{
    top:7px;
    left:7px;
    opacity: 1;
  }

  .click_userguanli:hover::after{
    bottom:7px;
    right:7px;
    opacity: 1;
  }
</style>



