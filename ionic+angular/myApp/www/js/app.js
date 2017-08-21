//module 设置开始
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'], function ($httpProvider) {
  // 此方法用于修改 $http 请求的数据格式，让后台可以按照 ajax ，传输数据的方式 接收
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=utf-8';
  /**
   * The workhorse; converts an object to x-www-form-urlencoded
   serialization.
   * @param {Object} obj
   * @return {String}
   */

  var param=function (obj) {
    var query='',name,value,fullSubName,subName,subValue,innerObj,i;
    for(name in obj){
      value=obj[name];
      if(value instanceof Array){
        for(i=0;i<value;++i){
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object){
        for(subName in value){
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value)
          + '&';
    }
    return query.length ? query.substr(0, query.length - 1) : query;
  }
  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ?
      param(data) : data;
  }];
})


  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //添加内容位置
    /* 用于修改安卓 tab  居下  （在参数里要加入$ionicConfigProvider ）*/
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    /* 用于卓 修改安卓 tab  居下 -- 结束*/


    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      /* 以上代码解析*/
      // .state(' 上级名称 . 本级 名称 ', {
      //   url: '/ 本级 URL',
      //   views: {
      //     ' 对应的 tabs 页面中 ion-nav-view 的 name': {
      //       templateUrl: ' 文件详细路径 ',
      //       controller: ' 对应的控制器名 '
      //     }
      //   }
      // })

      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html',
            // controller: 'homeCtrl'
          }
        }
      })

      //课程列表
      .state('tab.lessonlist', {
        url: '/lessonlist',
        views: {
          'tab-lessonlist': {
            templateUrl: 'templates/tab-lessonlist.html',
            controller: 'lessonlistCtrl'
          }
        }
      })

      //我的课程
      .state('tab.mycourse', {
        url: '/mycourse',
        views: {
          'tab-mycourse': {
            templateUrl: 'templates/tab-mycourse.html',
            controller: 'mycourseCtrl'
          }
        }
      })


      //个人中心
      .state('tab.personal', {
        url: '/personal',
        views: {
          'tab-personal': {
            templateUrl: 'templates/tab-personal.html',
            controller: 'personalCtrl'
          }
        }
      })

      //初始化进入轮播图
      .state('tab.firstEnter', {
        url: '/firstEnter',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-firstEnter.html',
            controller: 'firstEnterCtrl'
          }
        }
      })

      //个人信息
      .state('tab.information', {
        url: "/information",
        views: {
          'tab-personal': {
            templateUrl: 'templates/tab-information.html',
            controller: 'InformationCtrl'
          }
        }
      })

      //注册
      .state('tab.register', {
        url: "/register",
        views: {
          'tab-personal': {
            templateUrl: 'templates/tab-register.html',
            controller: 'RegisterCtrl'
          }
        }
      })

      //忘记密码
      .state('tab.forget', {
        url: '/forget',
        views: {
          'tab-personal': {
            templateUrl: "templates/tab-forget.html",
            controller: 'ForgetCtrl'
          }
        }
      })
      // 首页学习页面
      .state('tab.homeStudy', {
        url: '/homeStudy/:myId',
        cache: 'false',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-study.html',
            controller: 'StudyCtrl'
          }
        }
      })
      // 课程列表学习页面
      .state('tab.lesslistStudy', {
        url: '/lessonlistStudy/:myId',
        cache: "false",
        views: {
          'tab-lessonlist': {
            templateUrl: 'templates/tab-study.html',
            controller: 'StudyCtrl'
          }
        }
      })


      // 我的课程学习页面
      .state('tab.myStudy', {
        url: '/myStudy/:myId',
        cache: 'false',
        views: {
          'tab-mycourse': {
            templateUrl: 'templates/tab-study.html',
            controller: 'StudyCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

  });
