angular.module('starter.services', [])

  //好评榜数据绑定
  .factory("HomeGoodlistRow", function () {
    var homeGoodlistRows = [
      [
        { "id":0,
          "title":"javaScript 课程",
          "main":"good,good, 非常棒!",
          "imgsrc":"shouye_02.png"
        },
        {"id":1,
          "title":"UI/UE",
          "main":"UI, 非常棒！",
          "imgsrc":"shouye_02.png"
        }
      ],
      [
        { "id":2,
          "title":"HTML5+CSS3",
          "main":"bangbangda, 非常棒！",
          "imgsrc":"shouye_02.png"
        },
        {"id":3,
          "title":"jQuery",
          "main":"wuli jQuery, 非常棒！",
          "imgsrc":"shouye_02.png"
        }
      ]

    ];
    return {
      all: function () {
        return homeGoodlistRows;

      }
    };
  })

  // 最新课程的数据绑定
  .factory('HomeNewLists', function () {
    var homeNewListRow = [
      [{ "id":0,
        "title":"javaScript 课程 ",
        "main":"good,good, 非常棒！",
        "imgsrc":"shouye_03.png"
      },
        {"id":1,
          "title":"UI/UE",
          "main":"UI, 非常棒！",
          "imgsrc":"shouye_03.png"
        }
      ],
      [
        { "id":2,
          "title":"HTML5+CSS3",
          "main":"bangbangda, 非常棒！",
          "imgsrc":"shouye_03.png"
        },
        {"id":3,
          "title":"jQuery",
          "main":"wuli jQuery, 非常棒！",
          "imgsrc":"shouye_03.png"
        }
      ]
    ]
    return {
      all: function () {
        return homeNewListRow;
      }
    }
  })

  //猜你喜欢数据绑定
  .factory('HomechooseLists', function () {
    var homechooseList = [
      {
        "id": 0,
        "pic": "img/shouye_02.png",
        "title": "javaScript课程",
        "main": "good,good,非常棒！",
        "imgsrc": "shouye_02.png"
      },
      {
        "id": 1,
        "pic": "img/shouye_02.png",
        "title": "UI/IE",
        "main": "UI非常棒！",
        "imgsrc": "shouye_02.png"
      },
      {
        "id": 2,
        "pic": "img/shouye_02.png",
        "title": "HTML5+CSS3",
        "main": "bangbangda,非常棒！",
        "imgsrc": "shouye_02.png"
      },
      {
        "id": 3,
        "pic": "img/shouye_02.png",
        "title": "JQuery",
        "main": "wuli jQuery,非常棒！",
        "imgsrc": "shouye_02.png"
      }
    ]

    return {
      all: function () {
        return homechooseList;
      }
    }
  })

  //课程列表数据绑定
  .factory('courseLists', function () {
    var chats = [
      {
        id: 0,
        titleEn: '1Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 1,
        titleEn: '2Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 2,
        titleEn: '3Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 3,
        titleEn: '4Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 4,
        titleEn: '5Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      }, {
        id: 5,
        titleEn: '6Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      }, {
        id: 6,
        titleEn: '7Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      }, {
        id: 7,
        titleEn: '8Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      }, {
        id: 8,
        titleEn: '9Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 9,
        titleEn: '10Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 10,
        titleEn: '11Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 11,
        titleEn: '12Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 12,
        titleEn: '13Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 13,
        titleEn: '14Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 14,
        titleEn: '15Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      },
      {
        id: 15,
        titleEn: '16Ben Sparrow',
        price: 'You on your way',
        imgsrc: 'img/ben.png'
      }];
    //
    return {
      page: function (page) {
        return chats.splice((page - 1) * 5, (page - 1) * 5 + 5)
      },
      all: function () {
        return chats
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1)
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i]
          }
        }
        return null
      },
      courseSerch: function (searchText) {
        return chats.splice(0, 2)
      }
    }
  })


  //我的课程数据绑定
  .factory("courseFirst", function () {
    var itemFir = [
      {
        id: 0,
        imgsrc: "img/ben.png",
        title: "标题1",
        num: "3节",
        nums: "15节"
      },
      {
        id: 1,
        imgsrc: "img/ben.png",
        title: "标题2",
        num: "3节",
        nums: "15节"
      },
      {
        id: 2,
        imgsrc: "img/ben.png",
        title: "标题3",
        num: "3节",
        nums: "15节"
      },
      {
        id: 3,
        imgsrc: "img/ben.png",
        title: "标题4",
        num: "3节",
        nums: "15节"
      },
      {
        id: 4,
        imgsrc: "img/ben.png",
        title: "标题5",
        num: "3节",
        nums: "15节"
      },
      {
        id: 5,
        imgsrc: "img/ben.png",
        title: "标题6",
        num: "3节",
        nums: "15节"
      }];

    return {
      all: function () {
        return itemFir;
      }
    }
  })


  //我的收藏课程数据
  .factory('courseSecond', function () {
    var itemSec = [
      {
        id: 0,
        imgsrc: "img/ben.png",
        title: "2标题1",
        num: "2节",
        nums: "15节"
      },
      {
        id: 1,
        imgsrc: "img/ben.png",
        title: "2标题2",
        num: "2节",
        nums: "15节"
      },
      {
        id: 2,
        imgsrc: "img/ben.png",
        title: "2标题3",
        num: "2节",
        nums: "15节"
      },
      {
        id: 3,
        imgsrc: "img/ben.png",
        title: "2标题4",
        num: "2节",
        nums: "15节"
      },
      {
        id: 4,
        imgsrc: "img/ben.png",
        title: "2标题5",
        num: "2节",
        nums: "15节"
      },
      {
        id: 5,
        imgsrc: "img/ben.png",
        title: "2标题6",
        num: "2节",
        nums: "15节"
      }
    ];

    return {
      all: function () {
        return itemSec;
      }
    }
  })


  // 学习页面目录数据
  .factory('studyList', function () {
    var studymulu = [{
      title: "1-1photoshop 修图效果效果制作 ",
      time: "15 分钟 "
    },
      {
        title: "1-2photoshop 修图效果效果制 作 ",
        time: "15 分钟 "
      },
      {
        title: "1-2photoshop 修图效果效果制作 ",
        time: "15 分钟 "
      },
      {
        title: "1-2photoshop 修图效果效果制作 ",
        time: "15 分钟 "
      },
      {
        title: "1-2photoshop 修图效果效果制作 ",
        time: "15 分钟 "
      },
      {
        title: "1-2photoshop 修图效果效果制作 ",
        time: "15 分钟 "
      }]
    return {
      all: function () {
        return studymulu;
      }
    }
  })


  .factory('pingjiaList', function () {
    var assesslist = [{
      pic: "img/study_tx.jpg",
      name: " 李晓丽 ",
      title: "10 分钟前 ",
      cont: " 多谢大神指点 ",
    },
      {
        pic: "img/study_tx.jpg",
        name: " 李晓丽 ",
        title: "10 分钟前 ",
        cont: " 多谢大神指点 ",
      },
      {
        pic: "img/study_tx.jpg",
        name: " 李晓丽 ",
        title: "8 分钟前 ",
        cont: " 多谢 大神指点 ",
      },
      {
        pic: "img/study_tx.jpg",
        name: " 李晓丽 ",
        title: " 刚刚 ",
        cont: " 多谢大神指点 ",
      }]

    return {
      all: function () {
        return assesslist
      }
    }
  })


  // 页面之间共享数据的方法，使用方式，一个页面设置值，跳转页面，然后在另一个页面取值，并设置值为空。
  .factory('shareData', function ($window) {
    var allData = {};
    return {
      // 存储单个属性
      set: function (key, value) {
        allData[key] = value;
      },
      // 读取单个属性
      get: function (key, defaultValue) {
        return allData[key] || defaultValue;
      }
    }
  })
