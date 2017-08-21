<template>  <!--模版-->
  <div class="box">
    <!--表格-->
    <table class="tableList_table table-hover table-bordered">
      <!-- 表格头部 -->
      <thead>
      <tr>
        <th v-for="data in th_lists" v-bind:width="data.width" v-text="data.value"></th>
      </tr>
      </thead>
      <!-- 表格内容 -->
      <tbody>

      <tr v-for="(data,index) in lists" v-bind:class="setRowBg(index)">
        <td v-for="(da,ind) in th_lists" v-if="ind<th_lists.length-1" v-text="data[da.trueName]" ></td>
        <td>
          <button @click="" class="btn btn-default" v-if="data.edit">编辑</button>
          <button @click="" class="btn btn-default" v-if="data.delete">删除</button>
        </td>
      </tr>
      <!-- 站位置使用的 -->
      <tr>&nbsp;</tr>
      <tr>&nbsp;</tr>
      <tr>&nbsp;</tr>
      </tbody>
      <!-- 表格底部 -->
      <tfoot>
      <tr>  <!-- 绑定行数 -->
        <td colspan="6" class="paging_class">
          <!--分页-->
          <div>
            <ul class="pageTheLi">
              <li>
                <a @click="">
                  <img src="../assets/first.png">
                </a>
              </li>

              <li>
                <a @click="">
                  <img src="../assets/prev.png">
                </a>
              </li>

              <li style="border:none;">
                1
              </li>

              <li>
                <a>
                  <img src="../assets/next.png">
                </a>
              </li>

              <li>
                <a>
                  <img src="../assets/last.png">
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
  export default {
    data(){  //数据
      return {
        th_lists:this.tableListData.th_lists,  //头部的内容
        lists: this.tableListData.lists,// 表格里面的数据
      }
    },
    props:['tableListData'], //父传子的属性
    methods:{
      setRowBg:function (num) { // 隔行换换色
        if (num%2==1){
          return "tableList_tr_black" // 样式名称
        }
      }
    }

  }
</script>

<style scoped>
  ul li {
    list-style: none;
  }

  * {
    margin: 0;
    padding: 0
  }

  .tableList_table {
    width: 100%;
    /*height:400px;*/
    background-color: #FFFFFF;
    border-collapse: collapse;
  }

  .tableList_table thead tr {
    color: #666666;
    background-color: #EFEFEF;
    border: 1px solid #C0C0C0;
    height: 34px;
    font-size: 13px;
  }

  .tableList_table tbody tr {
    height: 34px;
    font-size: 14px;
  }

  .tableList_table tbody tr td {
    padding-left: 10px;
    height: 34px;
    font-size: 14px;
  }

  .tableList_table thead tr {
    border-right: none;
  }

  .tableList_table thead tr th {
    padding-left: 10px;
    border-right: 1px solid #C0C0C0;
  }

  .tableList_tr_black {
    background-color: #FAFAFA;
  }

  .tableList_table tbody tr:hover { /*鼠标移入时的背景颜色*/
    background-color: #ECF4FF;
  }

  .tableList_table tbody button {
    margin: 0;
    padding: 0;
    list-style-type: none;
    color: blue;
    background: none;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    width: 50px;
    height: 30px;
    line-height: 30px;
  }

  .tableList_table tbody button:hover {
    cursor: pointer;
  }

  #tableList_table_tbody_tr_click {
    border: 1px solid #C0C0C0;
  }

  .tableList_table tfoot {
    width: 100%;
  }

  .tableList_table tfoot tr {
    width: 100%;
    height: 30px;
    border: 1px solid #C0C0C0;
  }

  .tableList_table tfoot tr td {
    height: 30px;
  }

  .tableList_table tfoot tr td li {
    border: none;
  }

  .tableList_table tfoot tr td li img {
    vertical-align: bottom;
    margin-bottom: 3px;
  }

  .tableList_table tfoot tr td li img:hover {
    cursor: pointer;
  }

  .paging_class {
    text-align: left;
  }

  .box {
    padding: 0;
  }

  .pageTheLi li {
    float: left;
    margin-left: 30px;
  }
</style>
