angular.module('starter.controllers', [])

  .controller('homeCtrl', function ($scope, HomeGoodlistRow, HomeNewLists, HomechooseLists, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {
    // 轮播图数据
    $scope.lunbopics = [{
      "id" : 0,
      "imgsrc" : "slideimage01.png"
    },
      {
        "id" : 1,
        "imgsrc" : "slideimage02.png"
      },
      {
        "id" : 2,
        "imgsrc" : "slideimage03.png"
      }];

    // 这里是好评榜 数据返回代码
    $scope. homeGoodlistRows = HomeGoodlistRow.all();

    // 最新课程 数据 返回
    $scope.homeNewLists = HomeNewLists.all()


    //猜你喜欢数据绑定
    $scope.homechooseList = HomechooseLists.all()

    //侧边栏
    $scope.toggleLeftSideMenu = function () {
      $ionicSideMenuDelegate.toggleLeft()
    }

    $scope.tz_study = function (myId) {
      window.location = "#/tab/homeStudy/" + myId
    }

  })

  .controller('lessonlistCtrl', function ($scope, courseLists) {
    $scope.courseListBtns=[
      {id:0,btnName:"全部"},
      {id:1,btnName:"UI"},
      {id:2,btnName:"JAVA"},
      {id:3,btnName:"Android"},
      {id:4,btnName:"IOS"},
      {id:5,btnName:"其他"},
    ];

    $scope.priceBtns=[
      {id:0,btnName:"全部"},
      {id:1,btnName:"免费"},
      {id:2,btnName:"免费"},
    ];

    //课程列表单机事件
    $scope.lilist=false;
    $scope.lcolor={color:"#333"};
    $scope.courselist=function () {
      $scope.lilist=!$scope.lilist;
      $scope.prlist=false;
      $scope.pcolor={color:"#333"};
      if($scope.lilist==true){
        $scope.lcolor={color:"#63aafc"}
      }
      else{
        $scope.lcolor={color:"#333"}
      }
    }

    //价格单击事件
    $scope.price=function () {
      $scope.prlist=!$scope.prlist;
      $scope.lilist=false;
      $scope.lcolor={color:"#333"};
      if($scope.prlist==true){
        $scope.pcolor={color:"#63aafc"}
      }
      else{
        $scope.pcolor={color:"#333"}
      }
    }

    //课程列表页面加载数据
    $scope.lists=courseLists.page(0);
    //这里传入数据1，返回数据的前5条

    //上拉加载更多数据loadmore函数
    $scope.moredata=true; //为true是加载数据
    $scope.loadMore=function () {
      var newList=courseLists.page(1);
      $scope.lists=$scope.lists.concat(newList);
      if(newList.length==0){
        $scope.moredata=false;  //没有更多数据停止加载
      }
      $scope.$broadcast('scroll.infiniteScrollComplete')
    }

    //上拉加载更多事件
    $scope.$on('$stateChangeSuccess',function () {
      $scope.loadMore()
    })


    //课程列表筛选事件
    $scope.courseSearch=function (searchText) {
      $scope.lists=courseLists.courseSerch(searchText);
      $scope.lilist=false;
    }

    //价格筛选事件
    $scope.priceSearch=function (searchText) {
      $scope.lists=courseLists.courseSerch(searchText);
      $scope.prlist=false
    }

    $scope.tz_study = function (myId) {
      window.location = "#/tab/homeStudy/" + myId
    }

  })

  .controller('mycourseCtrl', function ($scope, courseFirst, courseSecond) {
    //我的课程
    $scope.mycou = true;
    $scope.mycol = false;
    $scope.color = {color: "#63aafc"}
    $scope.colorc = {color: "#333"}
    $scope.mylesson = function () {
      $scope.data.showDelete = false;
      $scope.mycou = true;
      $scope.mycol = false;
      $scope.color = {color: "#63aafc"};
      $scope.colorc = {color: "#333"}
    }

    //收藏课程
    $scope.course = function () {
      $scope.data.showDelete = false;
      $scope.mycou = false;
      $scope.mycol = true;
      $scope.color = {color: "#333"};
      $scope.colorc = {color: "#63aafc"}
    }

    $scope.itemFir = courseFirst.all();

    $scope.itemSec = courseSecond.all();

    $scope.data = {
      showDelete: false
    };

    //分享功能 弹出该课程的id
    $scope.share = function (item) {
      alert("Share Item:" + item.id)
    }

    //删除课程
    $scope.onItemDelete = function (list, item) {
      $scope[list].splice($scope[list].indexOf(item), 1)
    }

  })

  .controller('personalCtrl', function ($scope) {
    $scope.loginuser = {
      name: '',
      password: ''
    };
    $scope.doLogin = function () {
      if (!!$scope.loginuser.name && !!$scope.loginuser.password) {
        window.location = '#/tab/information'
      }
    }
  })

  .controller('firstEnterCtrl', function ($scope) {
  })


  .controller("InformationCtrl", function ($scope, $http) {
    $http.get("JSON/JSON.txt")
      .success(function (response) {
        $scope.name = response.records[1].name;
        $scope.email = response.records[1].email;
        $scope.phone = response.records[1].phone;
      });
    $scope.quit = function () {
      window.location = "#/tab/personal"
    }
  })

  .controller('RegisterCtrl', function ($scope, $ionicPopup) {
    $scope.infor = {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordt: ''
    };


    /* 注册页面判断 （写在上边的内容里）*/
    $scope.register = function (infor) {
      var email_yz = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var photo_yz = /^1\d{10}$/;
      if (!!infor.name && infor.email && infor.phone && !!infor.password && infor.passwordt) {
        if (!email_yz.test(infor.email)) {
          $ionicPopup.alert({
            title: "提示信息！",
            template: '邮箱格式不正确，请重新输入'
          });
        }
        else if (!photo_yz.test(infor.phone)) {
          $ionicPopup.alert({
            title: ' 提示信息 !',
            template: ' 请输入正确手机号码 '
          });
        }
        else if (infor.password != infor.passwordt) {
          $ionicPopup.alert({
            title: ' 提示信息 !',
            template: ' 两次密码不相同，请重新输入 '
          });
        }
        else {
          window.location = "#/tab/personal"
        }
      }
      else {
        $ionicPopup.alert({
          title: ' 提示信息 !',
          template: ' 请输入内容 '
        });
      }
    }
  })

  .controller('ForgetCtrl', function ($scope, $ionicPopup) {
    //验证密码页面
    $scope.infor = {
      name: '',
      phone: '',
      password: '',
      passwordt: ''
    };

    // 忘记密码页面判断
    $scope.forget = function (infor) {
      var photo_yz = /^1\d{10}$/;
      if (!!infor.name && !!infor.phone && !!infor.password && !!infor.passwordt) {
        if (!photo_yz.test(infor.phone)) {
          $ionicPopup.alert({
            title: ' 提示信息 !',
            template: ' 请输入正确手机号码 '
          });
        }
        else if (infor.password != infor.passwordt) {
          $ionicPopup.alert({
            title: ' 提示信息 !',
            template: ' 两次密码不相同，请重新输入 '
          });
        }
        else {
          window.location = "#/tab/personal"
        }
      }
      else {
        $ionicPopup.alert({
          title: ' 提示信息 !',
          template: ' 请输入内容 '
        });
      }
    }
  })

  .controller('StudyCtrl', function ($scope, studyList, pingjiaList, $ionicModal) {
    $scope.studymulu = studyList.all();
    $scope.assesslist = pingjiaList.all();


    // 目录和详情标签切换开始
    $scope.mymulu = true;
    $scope.myxiangqing = false;
    $scope.color = {color: "#63aafc"};
    $scope.ml_left = function () {
      $scope.myxiangqing = false;
      $scope.mymulu = true;
      $scope.color = {color: "#63aafc"};
      $scope.colorc = {color: "#333"}
    }
    $scope.xq_right = function () {
      $scope.mymulu = false;
      $scope.myxiangqing = true;
      $scope.color = {color: "#333"};
      $scope.colorc = {color: "#63aafc"}
    }
// 目录和详情标签切换结束

    /* 添加的内容*/
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });
// 接受 TaskCtrl 控制器传过来的评价数据
    $scope.$on('evaluate', function (event, data) {
      $scope.assesslist.push({
        pic: "img/study_tx.jpg",
        name: " 李晓丽 ",
        title: " 刚刚 ",
        cont: data,
      })
    })
  })

  // 在 上面 StydyCtrl 控制器的下面 ， 添加
  .controller('TaskCtrl', function ($scope) {
// 评价 窗口的关闭事件
    $scope.close = function () {
      $scope.modal.hide();
    }
// 评价 的添加事 件
    $scope.createContact = function (textareaValue) {
// 这里模拟一下，后续写
// 向父级控制器中发送新的评价数据
      $scope.$emit('evaluate', textareaValue);
      $scope.modal.hide();
    };
  })



  /* 去掉下面 tabs 代码 */
  .directive('hideTabs', function ($rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function () {
          $rootScope.hideTabs = attributes.hideTabs;
        });
        scope.$on('$ionicView.beforeLeave', function () {
          $rootScope.hideTabs = false;
        });
      }
    };
  })

