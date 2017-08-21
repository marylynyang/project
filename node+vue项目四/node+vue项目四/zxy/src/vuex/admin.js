//使用vuex
//1.创建 vuex || store ==》作用一样
//2.在里面 创建 js文件 存放数据 new Vuex.Store
//3.引入 vue 和 vuex，在vue中使用 vuex==》Vue.use(Vuex)

import Vue from "vue" //引用vue
import Vuex from "vuex" //引用vuex
//引用 axios  配置  基础路径  设置可以带有 cookie
//加载axios
//第一种
import axioss from "axios"
//发送数据 能cookie完成一个跨域
axioss.defaults.withCredentials=true;
var myAxios=axioss.create({
  baseURL:"http://localhost:3000/"  //设置基础路径
});

//第二种
// Vue.prototype.$axios({})

//加载插件 高速vue使用vuex
Vue.use(Vuex);
var state={
  //最大页数
  //最小页数
  //请求的第几页
  //模糊查询的姓名
  //每页的条数
  //基本的内容
  maxAdminCount:1, //最大的页数
  minAadminCount:1, //最小的页数
  pageStart:1, //起始查询的页数
  pageSize:3, //每页显示3条
  searchText:"", //模糊查询的条件

  addBtnFlag:{
    "display":"none" //控制弹出是否显示的属性
  },
  // admin.js 定义数据：表格头部   表格内容  表格的按钮函数（功能实现）
  tableList:{  //表格的数据
    th_lists:[  //表格头部内容
      {value:"用户名",trueName:"userName",width:"10%"},
      {value:"姓名",trueName:'turename',width:"10%"},
      {value:"后台权限",trueName:'power',width:"20%"},
      {value:"手机",trueName:'phone',width:"20%"},
      {value:"编辑日期",trueName:'upDateAt',width:"20%"},
      {value:"操作",width:"20%"}
    ],
    lists:[],  //表格内容
    btnList:{  //操作按钮
      _this:this,
      tfootShow:true,
      NextClick:function () {
        Vue.prototype.$adminListStore.commit("addPageStart");
        tableAdminList();
      },
      PrevClick:function () {
        Vue.prototype.$adminListStore.commit("subPrevClick");
        tableAdminList()
      },
      LastClick:function () {
        tableAdminList(Vue.prototype.$adminListStore.state.maxAdminCount)
      },
      FirstClick:function () {
        tableAdminList(Vue.prototype.$adminListStore.state.minAdminCount)
      },
      btn_click:function (event) {

      }
    }
  }
};
//获取表格数据的方法
var getTableData=function (num) {
  if(num){
    state.pageStart=num;  //保存当前请求这一页
  }
};
myAxios({
  url:"/VueHandler/AdminHandler?action=show",
  method:"get",
  params:{
    searchText:state.searchText,  //模糊查询
    pageStart:state.pageStart   //请求页数
  }
}).then(function (res) {  //ajax  成功时触发
    if(!res.data.err){  //数据请求成功
      //state.tableList.lists=
      //1.现在 state.tableList.lists==>[{}]
      //2.[{}]
      //第一次加载
      if(state.tableList.lists.length==0){
        for(var i=0;i<res.data.data.list.length;i++){
          var obj={ //定义的名称  和  ht_lists.trueName  一样
            userName:res.data.data.list[i].userName, //obj[ht_lists.trueName]
            turename:res.data.data.list[i].turename,
            power:res.data.data.list[i].power,
            upDataAt:res.data.data.list[i].upDataAt,
            phone:res.data.data.list[i].phone,
            ID:res.data.data.list[i].tokenId,  //操作的手柄  ==》删除
            //控制操作按钮
            edit:true, //true ==》显示操作按钮  编辑
            delete:true //true  ==》显示操作按钮  删除
          };
          state.tableList.lists.push(obj)
        }
      }
      else{ //第二次以后加载
        for(var i=0;i<state.pageSize;i++){
          //最后一页  2
          //倒数第二页 3
          if(typeof state.tableList.lists[i]=="undefined"){
            var newObj={};
            state.tableList.lists.push(newObj)
          }
          state.tableList.lists[i].userName=res.data.data.list[i]?res.data.data.list[i].userName:"";
          state.tableList.lists[i].tuername=res.data.data.list[i]?res.data.data.list[i].tuername:"";
          state.tableList.lists[i].power=res.data.data.list[i]?res.data.data.list[i].power:"";
          state.tableList.lists[i].ID=res.data.data.list[i]?res.data.data.list[i].tokenId:"";
          state.tableList.lists[i].upDateAt=res.data.data.list[i]?res.data.data.list[i].upDateAt:"";
          state.tableList.lists[i].phone=res.data.data.list[i]?res.data.data.list[i].phone:"";
          // 操作按钮的两个数据
          state.tableList.lists[i].edit=res.data.data.list[i]?true:false;
          state.tableList.lists[i].delete=res.data.data.list[i]?true:false;
        }

      }
    }
    else{
      alert(res.data.err)
    }
}).catch(function (err) {
  alert(err)
});

getTableData();// 使用 getTableData的方法获取数据

var mutations={
  setAddBtnFlag:function (state,str) { //设置弹窗是否显示的属性
  state.addBtnFlag.display=str
}
};



//5.暴露 export default new Vuex.Store
export default new Vuex.Store({
  state,
  mutations
})
