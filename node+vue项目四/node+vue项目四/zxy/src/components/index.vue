<template>
  <div>
     <div>
        <fheader></fheader>
     </div>
     <div id="connect_wrap">
       <div class="one_connect">
         <div class="course_wrap">
           <p class="course_font1">
             课程列表
             <br/>
             <span class="course_font3">查询现有课程，添加<br/>课程，管理课程</span>
           </p>
           <p class="course_font2">Course List</p>
           <i class="fa fa-th-large course_icon"></i>
         </div>
         <div class="course_wrap">
           <p class="course_font1">
             课程添加
             <br/>
             <span class="course_font3">查询现有课程，添加<br/>课程，管理课程</span>
           </p>
           <p class="course_font2">Course Add</p>
           <i class="fa fa-plus course_icon"></i>
         </div>
         <div class="course_wrap">
           <p class="course_font1">
             课程置顶
             <br/>
             <span class="course_font3">查询现有课程，添加<br/>课程，管理课程</span>
           </p>
           <p class="course_font2">Course Up</p>

           <i class="fa fa-arrow-up course_icon"></i>
         </div>
         <div class="course_wrap">
           <p class="course_font1">
             视频管理
             <br/>
             <span class="course_font3">查询现有课程，添加<br/>课程，管理课程</span>
           </p>
           <p class="course_font2">Video Manage</p>
           <i class="fa fa-video-camera course_icon"></i>
         </div>
         <div class="course_wrap" @click="admin()">
           <p class="course_font1">
             用户管理
             <br/>
             <span class="course_font3">查询现有课程，添加<br/>课程，管理课程</span>
           </p>
           <p class="course_font2">User Manage</p>
           <i class="fa fa-user course_icon"></i>
         </div>
         <div class="course_wrap1">
           <p class="course_font1">
             学员管理
             <br/>
             <span class="course_font3">查询现有课程，添加<br/>课程，管理课程</span>
           </p>
           <p class="course_font2">Student Mange</p>
           <i class="fa fa-file-o course_icon"></i>
         </div>
         <div class="clear"></div>
       </div>
       <div class="clear"></div>
       <div class="charts_wrap">
         <div style="background:#fff; height:270px;margin-left: 2.5%">
           <div style="width:280px; height:280px;padding-top: 25px" ref="echarts01"></div>
         </div>
         <div style="background:#fff; height:270px;margin-left: 2.5%">
           <div style="width:310px; height:270px;padding-top: 25px" ref="echarts02"></div>
         </div>
         <div style="background:#fff; height:270px;margin-left: 2.5%">
           <div style="width:310px; height:270px;padding-top: 25px" ref="echarts03"></div>
         </div>
       </div>
     </div>
    <div class="clear"></div>
  </div>
</template>
<script>
  import fheader from "./header.vue"
  import echarts from 'echarts'
  export default {
    components: {fheader},
    data () {
      return {
      }
    },
    mounted:function(){
      document.body.setAttribute("style","background:url(./src/assets/images/body_bg.jpg) !important;min-width:1100px;font-family:'宋体';margin:0;padding:0");

      if(window.offsetWidth <= 1366){
        this.$refs.echarts01.style.width='40%';
        this.$refs.echarts02.style.width='40%';
        this.$refs.echarts03.style.width='90%';
      }

      //引入之后，echarts 图标的使用
      //1.初始化 echarts 对象 echarts.init("绘制的元素（位置）")
      //                             refs.(ref定义的元素)
      //2.设置选项 官网


      var mychart01 = echarts.init(this.$refs.echarts01); // 初始化一个 echarts
      /*设置选项*/
      mychart01.setOption( {
        title : { ////提示信息
          text: '学习人数比例',
          subtext: '  ', ////提示文字
          x:'center', // //x 居中显示  y
          textStyle:{
            color:'#008ACD'
          }
        },
        tooltip : {// 鼠标移入时的提示信息
          formatter: "{a} <br/>{b} : {c}%"
        },
        series : [
          {
            name:'学习人数比例66',
            type:'gauge',
            axisLine:{
              show:true,
              lineStyle: {
                color: [ // 颜色
                  [0.2, '#2EC7C9'],
                  [0.8, '#5AB1EF'],
                  [1, '#D87A80']
                ],
                width:10
              }
            },
            axisTick:{

              show:true,

              length:8,
              lineStyle:{
                color: [
                  [0.2, '#2EC7C9'],
                  [0.8, '#5AB1EF'],
                  [1, '#D87A80']
                ],
                width:1,
                type:'solid'

              }

            },
            detail : {

              formatter:'{value}%'
            },
            data:[{value: 80, name: '比例'}]
          }
        ]
      });

      /*----------------------------------------------------------------------*/
      var mychart02 = echarts.init(this.$refs.echarts02);
      mychart02.setOption( {
        title : {
          text: '考试通过率',
          subtext: '  ',
          x:'center',
          textStyle:{
            color:'#008ACD'
          }
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#B6A2DE','#57D2D3'],

        series : [
          {
            name:'访问来源',
            type:'pie',
            radius : ['0','55%'],
            center: ['50%', '50%'],
            data:[
              {value:335, name:'已通过'},
              {value:310, name:'未通过'}
            ]



          }
        ]
      });

      //柱状图
      var mychart03 = echarts.init(this.$refs.echarts03);
      mychart03.setOption({
        title: {
          x: 'center',
          text: '时间、课程、新增课程输',
          subtext: ' '
          ,
          textStyle:{
            color:'#008ACD'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        calculable: true,
        grid: {
          borderWidth: 0,
          y: 80,
          y2: 60
        },
        xAxis: [
          {
            type: 'category',
            show: false,
            data: ['学习时间', '总课程数', '新增课程数']
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    '#C1232B','#B5C334','#F0805A'
                  ];
                  return colorList[params.dataIndex]
                },

                barBorderRadius:5,
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{b}\n{c}'
                }
              }
            },
            data: [12,21,10]
          }
        ]
      });

    },
    methods:{
      admin:function () {
        window.location.href="/admin"
      }
    }
  }

</script>


<style scoped>
  *{
    padding: 0;
    margin: 0;
  }

  .clear{
    clear: both;
  }

  #connect_wrap{
    width: 100%;
    background: linear-gradient(to left, #3f5096, #0d1752);
  }

  .one_connect{
    width: 1000px;
    margin: 0 auto;
    /*background: cornflowerblue;*/
    padding: 65px 0;
  }

  .course_wrap{
    width: 140px;
    height: 170px;
    background: rgba(255,255,255,0.4);
    float: left;
    margin-right:32px;
    text-align: center;
    cursor: pointer;
    color: white;
  }
  .course_wrap:hover{
    background:#3d81e5;
  }
  .course_wrap1{
    width: 140px;
    height: 170px;
    background: rgba(255,255,255,0.4);
    float: left;
    text-align: center;
    cursor: pointer;
    color: white;
  }
  .course_wrap1:hover{
    background:#3d81e5;
  }
  .course_font1{
    font-size:21px;
    margin-top: 30px;
    transition: 1s;
  }

  .course_font2{
    font-size:12px;
    margin-top: 10px;
  }
  .course_font3{
    font-size:12px;
    margin-top: 10px;
    display: none;


  }

  .course_icon{
    font-size:30px;
    margin-top: 30px;
    transition: 1s;
  }
  .course_wrap:hover .course_icon{
    transform: translateY(-100px);
  }

  .course_wrap:hover .course_font1{
    transform: translateY(37px);
  }
  .course_wrap:hover .course_font2{
    display: none;
  }
  .course_wrap:hover .course_font3{
    display:block;
  }

  .course_wrap1:hover .course_icon{
    transform: translateY(-100px);
  }

  .course_wrap1:hover .course_font1{
    transform: translateY(37px);
  }
  .course_wrap1:hover .course_font2{
    display: none;
  }
  .course_wrap1:hover .course_font3{
    display:block;
  }

  /*图表*/
  .charts_wrap{
    width: 1000px;
    margin: 0 auto;
    background:url(../assets/images/white_opacity_bg.png);
    padding:50px 0;
    overflow:hidden;
  }
  .charts_wrap > div{
    float:left;
    overflow:hidden;
  }

</style>




