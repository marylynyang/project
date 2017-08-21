<template>
  <div>
    <div :style="alertStyle">
      <div :style="alertHol">
        <div class="alertHeader">
          <span>修改密码</span>
          <img src="../assets/images/x.png" alt="" class="alert_close" @click="close()">
        </div>
        <dl class="alert_list">
          <dt>
            <span>当前密码：</span><input type="password" v-model="password.old_pw">
          </dt>
          <dt>
            <span class="new_password">新密码：</span><input type="password" v-model="password.new_pw">
          </dt>
          <dt>
            <span>确认密码：</span><input type="password" v-model="password.enter_pw">
          </dt>
        </dl>
        <div class="clear"></div>
        <button class="green_btn" @click="enter()">确定</button>
        <button class="blue_btn" @click="close()">取消</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        password: {  //弹窗里面的数据
          old_pw: "", //旧密码
          new_pw: "", //新密码
          enter_pw: "" //确认密码  v-model
        },
        alertStyle: {
          "width": window.innerWidth + "px",
          "height": window.innerHeight + "px",
          "position": "absolute",
          "top": 0,
          "left": 0,
          "background": "rgba(255,255,255,0.8)",
        },
        alertHol: {
          "position": "relative",
          "width": 410 + "px",
          "height": 200 + "px",
          "top": 50 + "%",
          "left": 50 + "%",
          "margin-left": -205 + "px",
          "margin-top": -100 + "px",
          "background": "rgba(255,255,255,1)",
          "border": "5px solid #4f66bb"
        }
      }
    },
    methods: {
      close: function () {  //关闭函数
        this.$emit("close")
      },
      enter: function () {  //确定
        //1.获取数据
        //2.通过axios发送到后台
        //3.根据返回的结果 进行判断 执行相应的结果
        var _this=this;
        if(this.password.old_pw!=""&&this.password.new_pw!=""&&this.password.enter_pw!=""){
          //旧密码
          if(this.password.new_pw==this.password.enter_pw){
            //发送旧密码和新密码
            this.$axios({
              url:"/VueHandler/AdminHandler?action=updatepass",
              method:"post",
              data:{
                userPwd:this.password.old_pw,
                newPwd:this.password.new_pw
              }
            }).then(function (res) {  //成功
             if(res.data.success){
               alert("修改成功");
               _this.close();//关闭弹窗
             }
             else{
               alert(res.data.err)
             }

            }).catch(function (err) {

            })
          }
          else {
            alert("两次密码输入不一致，请重新输入")
          }
        }
        else{
          alert("请填写完毕然后提交！")
        }
      }
    }
  }


</script>

<style scoped="">
  * {
    margin: 0;
    padding: 0;
  }

  .clear {
    clear: both
  }

  .alertHeader {
    width: 410px;
    height: 30px;
    background: #4f66bb;
    color: white;
  }

  .alertHeader span {
    line-height: 30px;
    font-size: 14px;
  }

  .alertHeader img {
    float: right;
    margin-top: 5px;
  }

  .alert_list {
    float: left;
    margin-left: 20px;
  }

  .alert_list dt {
    float: left;
    margin-top: 15px;
  }

  .alert_list dt > input {
    background: transparent;
    border: 1px solid #e6e6e6;
    width: 150px;
    height: 20px;
  }

  .new_password {
    margin-left: 16px;
  }

  .green_btn {
    width: 70px;
    height: 30px;
    background: #7cc746;
    outline: none;
    border: 0;
    cursor: pointer;
    color: white;
    float: left;
    margin-left: 130px;
    margin-top: 15px;
  }

  .blue_btn {
    width: 70px;
    height: 30px;
    background: #6276b5;
    outline: none;
    border: 0;
    cursor: pointer;
    color: white;
    float: left;
    margin-left: 15px;
    margin-top: 15px;
  }

  .alert_close {
    cursor: pointer;
  }
</style>
