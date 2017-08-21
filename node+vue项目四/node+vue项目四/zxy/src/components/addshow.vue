<template>
  <div>
    <div :style="alertStyle">
      <div :style="alertHol">
        <div class="alertHeader">
          <span>添加管理员</span>
          <img src="../assets/images/x.png" alt="" class="alert_close" @click="close()">
        </div>
        <dl class="alert_list">
          <dt>
            <span style="margin-left: 26px">用户名：</span><input type="text" v-model="userINfor.userName">
          </dt>
          <dt>
            <span class="new_password">姓名：</span><input type="text" v-model="userINfor.turename">
          </dt>
          <dt>
            <span style="margin-left: 26px">手机号：</span><input type="text" v-model="userINfor.phone">
          </dt>
          <dt>
            <span style="margin-left: 2px">权限选择：</span>
            <select v-model="userINfor.power">
            <option>系统管理员</option>
              <option>课程管理员</option>
          </select>
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
          "height": 240 + "px",
          "top": 50 + "%",
          "left": 50 + "%",
          "margin-left": -205 + "px",
          "margin-top": -120 + "px",
          "background": "rgba(255,255,255,1)",
          "border": "5px solid #4f66bb"
        },
        userINfor:{ //保存信息的对象
          userName:"", //用户名
          turename:"", //姓名
          phone:"", //手机号
          power:"" //权限
        }
      }
    },
    methods: {
      close: function () {  //关闭函数
        this.$emit("close")
      },
      enter: function () {  //确定
        //1.data()  ==>设置 保存用户信息的对象  userINfor ==》v-model ==>表单元素里面
        //2.获取 表单元素里面输入的值
        //3.通过axios发送到后台  ==》按结果执行相应的操作
        var data={
          userName:this.userINfor.userName,  //用户名
          turename:this.userINfor.turename,  //姓名
          phone:this.userINfor.phone,        //手机
          power:this.userINfor.power,        //权限
          password:"123456"                //默认密码
        };
        var _this=this;
        this.$axios({
          url:"/VueHandler/AdminLoginAndRegHandler?action=add",
          method:"post",
          data:data
        }).then(function (res) {  //ajax  发送成功
          if(res.data.success){  //添加成功
            alert(res.data.success);
            _this.close();  //关闭弹窗
          }
          else{  //添加失败
            alert(res.data.err)
          }

        }).catch(function (err) {
          alert(err)
        })
      }
    }
  }


</script>\

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
  .alert_list dt > select {
    background: transparent;
    border: 1px solid #e6e6e6;
    width: 152px;
    height: 23px;
  }

  .new_password {
    margin-left: 42px;
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
    margin-left: 50px;
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
    margin-left: 100px;
    margin-top: 15px;
  }

  .alert_close {
    cursor: pointer;
  }
</style>
