//-------------------------------------------------------------------------//
(function ($) {
    // 创建构造函数
    function Slide(ele, options) {
        this.$ele = $(ele);//this. 构造函数的实例对象
        this.options = $.extend({
            speed: 800,
            delay: 5000
        }, options);//拓展
        this.states = [
            { '&zIndex': 1, width: 170, height: 210, top:61, left: 0, $opacity: 0.6 },
            { '&zIndex': 3, width: 180, height: 250, top: 41, left: 134,$opacity: 0.8 },
            { '&zIndex': 4, width: 210, height: 280, top: 37, left:300, $opacity: 1 },
            { '&zIndex': 3, width: 180, height:250, top: 41, left: 846, $opacity: 0.8 },
            { '&zIndex': 1, width: 170, height: 210, top: 61, left: 980, $opacity: 0.6 }
        ];
        this.lis = this.$ele.find('.li');
        this.interval
        // 点击切换到下一张
        this.$ele.find('.next').on('click', function () {
            this.stop();
            this.next();
            this.play()
        }.bind(this));
        // 点击切换到上一张
        this.$ele.find('.prev').on('click', function () {
            this.stop();
            this.prev();
            this.play()
        }.bind(this));
        this.move();
        // 让轮播图开始自动播放
        this.play()

    }


    Slide.prototype = {


        // 原型是一个对象，所以写成一个花括号

        // move()方法让轮播图到达states指定的状态
        // <1>当页面打开时将轮播图从中心点展开
        // <2>当轮播图已经展开时，会滚动轮播图(需要翻转states数组中的数据)
        move: function () {

            this.lis.each(function (i, el) {
                $(el)
                    .css('z-index', this.states[i]['&zIndex'])
                    .finish().animate(this.states[i], this.options.speed)
                    // .stop(true,true).animate(states[i], 1000)
                    .find('img').css('opacity', this.states[i].$opacity)
            }.bind(this))
        },
        // 让轮播图切换到下一张
        next: function () {

            this.states.unshift(this.states.pop());
            this.move()
        },
        // 让轮播图滚动到上一张
        prev: function () {

            this.states.push(this.states.shift());
            this.move()
        },
        play: function () {
            this.interval = setInterval(function () {//这个this指window
                // setInterval、setTimeOut 中的this指向window

                // states.unshift(states.pop())       //从后往前走
                // states.push(states.shift())     //从前往后走
                this.next();
                if(index1==4){
                    index1=0
                }
                else{
                    index1++
                }
                img1.src=arrSrc[index1];
                //img01.src=arrSrc1[index1];
                //img02.src=arrSrc2[index1];
                //img04.src=arrSrc4[index1];
                //img05.src=arrSrc5[index1];
                $(".banner_focus").children(".banner_detail").eq(index1).addClass("zhanshi");
                $(".banner_focus").children(".banner_detail").eq(index1).siblings().removeClass("zhanshi")
            }.bind(this), this.options.delay)
        },
        // 停止自动播放
        stop: function () {
            // var _this = this
            clearInterval(this.interval)
        }

    };
    $.fn.zySlide = function (options) {
        this.each(function (i, ele) {
            new Slide(ele, options)
        });
        return this
    };

    var banner=document.getElementsByClassName("zy-Slide")[0];
    var banner_focus = banner.getElementsByClassName("banner_focus")[0];
    var prev = banner.getElementsByClassName("prev")[0];
    var next=banner.getElementsByClassName("next")[0];
    var list = banner_focus.getElementsByClassName("a_left")[0];
    var img1 = list.getElementsByTagName("img")[0];
    var arrSrc = ["images/content02/img01.png", "images/content02/img02.png", "images/content02/img03.png", "images/content02/img04.png", "images/content02/img05.png"];
    var index1 = 0;
    var banner_detail=banner_focus.getElementsByClassName("banner_detail");
    prev.onclick=function(){
        //console.log(index1);
        if(index1==0){
            index1=4
        }
        else{
            index1--
        }
        img1.src=arrSrc[index1];
        //img01.src=arrSrc1[index1];
        //img02.src=arrSrc2[index1];
        //img04.src=arrSrc4[index1];
        //img05.src=arrSrc5[index1];
        $(".banner_focus").children(".banner_detail").eq(index1).addClass("zhanshi");
        $(".banner_focus").children(".banner_detail").eq(index1).siblings().removeClass("zhanshi");
    };

    next.onclick=function(){
        if(index1==4){
            index1=0
        }
        else{
            index1++
        }
        img1.src=arrSrc[index1];
        //img01.src=arrSrc1[index1];
        //img02.src=arrSrc2[index1];
        //img04.src=arrSrc4[index1];
        //img05.src=arrSrc5[index1];
        $(".banner_focus").children(".banner_detail").eq(index1).addClass("zhanshi");
        $(".banner_focus").children(".banner_detail").eq(index1).siblings().removeClass("zhanshi")
    };



})(jQuery);


