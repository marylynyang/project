<template>
  <canvas class="verCanvas" width="100%" height="35px" @click="changeVeri"></canvas>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        canvas: "",
        width: "",
        height: "",
        ctx: ""
      }
    },
    mounted: function () {
      this.canvas = document.getElementsByClassName('verCanvas')[0];
      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.textBaseline = 'bottom';
//      this.drawPic("5432");  //使用绘制验证码的方法
      this.getVeri(this.drawPic)


    },
    methods: {  //方法
      //        获取验证码      fn==>绘制验证码的方法
      getVeri: function (fn) {// 获取验证码
//        ajax 插件  axios
        this.$axios({
          method: "get",
          url:"/VueHandler/AdminLoginAndRegHandler?action=verification"
        }).then(function (response) {
          // ajax 成功   后台报错 返回值 err
//                            成功   success
          if (response.data.success){// 获取验证码成功
            console.log(response);
// 验证码
//           alert(response.data.data)
            fn(response.data.data)
          }else { //  报错  报错的原因
            alert(response.data.err)
          }
        }).catch(function (err) { // 404
          alert(err)
        })
      },
      changeVeri:function () {// 点击切换验证码
        // 获取验证码    绘制验证码的方法
        this.getVeri(this.drawPic);
      },
      randomNum: function (min, max) {//生成随机数
        return Math.floor(Math.random() * (max - min) + min);
      },
      randomColor: function (min, max) {//生成随机色
        var r = this.randomNum(min, max);
        var g = this.randomNum(min, max);
        var b = this.randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
      },
      drawPic: function (returnTxt) { /**绘制验证码图片**/
        /**绘制背景色**/
        this.ctx.fillStyle = this.randomColor(180, 240); //颜色若太深可能导致看不清
        this.ctx.fillRect(0, 0, this.width, this.height);
        /**绘制文字**/
        for (var i = 0; i < 4; i++) {
          var txt = returnTxt[i];
          this.ctx.fillStyle = this.randomColor(50, 160);  //随机生成字体颜色
          this.ctx.font = this.randomNum(25, 30) + 'px SimHei'; //随机生成字体大小
          var x = 10 + i * 20;
          var y = this.randomNum(25, 45);
          var deg = this.randomNum(-15, 15);
          //修改坐标原点和旋转角度
          this.ctx.translate(x, y);
          this.ctx.rotate(deg * Math.PI / 180);
          this.ctx.fillText(txt, 10, 0);
          //恢复坐标原点和旋转角度
          this.ctx.rotate(-deg * Math.PI / 180);
          this.ctx.translate(-x, -y);
        }
        /**绘制干扰线**/
        for (var i = 0; i < 8; i++) {
          this.ctx.strokeStyle = this.randomColor(40, 180);
          this.ctx.beginPath();
          this.ctx.moveTo(this.randomNum(0, this.width), this.randomNum(0, this.height));
          this.ctx.lineTo(this.randomNum(0, this.width), this.randomNum(0, this.height));
          this.ctx.stroke();
        }
        /**绘制干扰点**/
        for (var i = 0; i < 100; i++) {
          this.ctx.fillStyle = this.randomColor(0, 255);
          this.ctx.beginPath();
          this.ctx.arc(this.randomNum(0, this.width), this.randomNum(0, this.height), 1, 0, 2 * Math.PI);
          this.ctx.fill();
        }
        return;
      }
    },
  };


</script>

<style>
  .verCanvas {
    margin-left: 5px;
    position: relative !important;

  }

  .verCanvas:hover {
    cursor: pointer;
  }

</style>
