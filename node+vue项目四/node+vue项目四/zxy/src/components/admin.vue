<template>
  <div>
    <fheader></fheader>
    <div id="adminConnect_wrap">
      <div class="admin_connect">
        <div class="admin_nav">
          <span style="color: #599eda">首页/</span><span>用户管理/</span><span>系统人员</span>
        </div>
        <div class="clear"></div>
        <div class="search_warp">
          <dl class="search_list">
            <dt>
              <input type="text" class="searchkuang">
            </dt>
            <dt>
              <button class="cha_btn">查询</button>
            </dt>
          </dl>
          <button class="add_btn" @click="addBtnShow"><i class="fa fa-plus"></i>添加</button>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
        <div class="form_wrap">
          <div class="form_nav">
            <img src="../assets/functional_block.png" alt="">
          </div>
          <div class="form_title">
            <span style="padding-left: 5px">系统人员列表</span>
          </div>
          <div class="clear"></div>
          <!--表格内容-->
          <div class="functional_block_bottom">
            <!--父 ==》 子-->
            <!--在父  使用子组件-->
            <!--v-bind:属性="父级上面的数据"-->
            <!--在子组件-->
            <!--props:['属性']-->
            <tables v-bind:tableListData="tableListData"></tables>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>


    <!--弹窗-->
    <div :style="addBtnFlag">
      <addshow @close="close()"></addshow>
    </div>
  </div>
</template>

<script>
  //加载公共头部
  import fheader from "./header.vue"
  //加载 admin.js
  import adminData from '../vuex/admin.js'
  //加载弹窗
  import addshow from './addshow.vue'
  //加载表格组件
  import tables from './tableList.vue'

  export default {
    data(){  //数据
       return {
//         tableListData:adminData.state.tableList  //保存表格数据
         tableListData:adminData.state.tableList,
       }
    },
    components: {fheader, addshow,tables},
    computed: {
      addBtnFlag: function () {
//        return this.$admin.state.addBtnFlag
        return adminData.state.addBtnFlag
      },

    },
    methods: {
      close: function () {// 弹窗关闭的函数
        adminData.commit("setAddBtnFlag", "none")
      },
      addBtnShow: function () {// 显示弹出弹窗的函数
        adminData.commit("setAddBtnFlag", "block")
      },
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .clear {
    clear: both;
  }

  #adminConnect_wrap {
    width: 100%;
    background: #f5f5f5;
    /*background: cornflowerblue;*/
  }

  .admin_connect {
    width: 1100px;
    margin: 0 auto;
    /*background: chartreuse;*/
  }

  .search_warp {
    width: 1100px;
    border: 1px solid #dbdbdb;
    padding: 6px 0;
    background: white;
  }

  .search_list {
    float: left;
  }

  .search_list dt {
    float: left;
  }

  .add_btn {
    float: right;
  }

  .searchkuang {
    width: 335px;
    height: 30px;
    border: 1px solid #dbdbdb;
    margin-left: 6px;
  }

  .cha_btn {
    margin-left: 6px;
    width: 70px;
    height: 30px;
    border: 0;
    background: #439d44;
    color: white;
    cursor: pointer;
  }

  .add_btn {
    width: 80px;
    height: 30px;
    color: white;
    cursor: pointer;
    background: #4e66b3;
    border: 0;
    margin-right: 26px;
  }

  .admin_nav {
    float: left;
    padding: 10px 0;
    font: bold 15px 微软雅黑;
  }

  .form_wrap {
    width: 1100px;
    height: 300px;
    border: 2px solid #dbdbdb;
    float: left;
    margin-top: 10px;
    background: white;
  }

  .form_nav{
    width: 30px;
    height: 30px;
    border-right:1px solid #dbdbdb ;
    border-bottom:1px solid #dbdbdb ;
    text-align: center;
    line-height: 30px;
    float: left;
  }
  .form_title{
    float: left;
    height: 30px;
    width:1069px;
    border-bottom: 1px solid #dbdbdb;
    font-size: 13px;
    line-height: 30px;
    margin-bottom: 10px;
  }


</style>
