$(function () {
    var index=0;
    var onOff=false;
    //设置高度
    window.onload=window.onresize=function(){
        $(".div,#welcome").height($(window).height());
        $(".div,#welcome").width($(window).width());

    };

    $(".welcome .dongtai").delay(6300).animate({"margin-top":10+"px"});
    $(".welcome .about_p001").delay(1000).animate({"margin-top":15+"px","opacity":"1"});
    $(".welcome .about_p002").delay(6500).animate({"margin-top":-20+"px","opacity":"1"},function(){
        $(".welcome .about_p001").css({"opacity":"0"});
    });

    //点跟内容颜色变
    function dianji(){
        $(".aboutNav_dian").eq(index-1).children(".about_span").children(".a1").addClass("white");
        $(".aboutNav_dian").eq(index-1).children(".about_span").parent().siblings().find(".a1").removeClass("white");
        $(".aboutNav_dian").eq(index-1).children(".about_span").children(".a1").children(".img").addClass("show");
        $(".aboutNav_dian").eq(index-1).children(".about_span").children(".a1").children(".img").parents().siblings(".aboutNav_dian").find(".img").removeClass("show");
    }


    //欢迎页面6秒后自动隐藏，双击立即隐藏
    var timers=setTimeout(shouqi,7500);

    $("#welcome").dblclick(shouqi);

    function shouqi(){
        $("#welcome").slideUp();
        onOff=true;
        clearTimeout(timers)
    }

    $("body").animate({"scrollTop":0},100);
    $("html").animate({"scrollTop":0},100);


    //IE 谷歌兼容
    window.onmousewheel=function(e){
        if(onOff){
            onOff=false;
            if(e.wheelDelta<0){
                if(index<$(".div").length-1){
                    index++
                }
                $("body").animate({"scrollTop":index*innerHeight},500,function(){
                    onOff=true
                });
                dianji()

            }
            else if(e.wheelDelta>0){
                if(index>0){
                    index--
                }
                $("body").animate({"scrollTop":index*innerHeight},500,function(){
                    onOff=true
                });
                dianji()
            }
        }
    };

    //火狐兼容
    window.addEventListener("DOMMouseScroll",function scrollGo(e){
        if(onOff){
            onOff=false;
            if(e.detail>0){
                if(index<$(".div").length-1){
                    index++
                }
                $("html").animate({"scrollTop":index*innerHeight},500,function(){
                    onOff=true
                });
                dianji()
            }
            else if(e.detail<0){
                if(index>0){
                    index--
                }
                $("html").animate({"scrollTop":index*innerHeight},500,function(){
                    onOff=true
                });
                dianji()
            }
        }
    },false);

    //hash方法(获取页面跳转)
    var mainHash=window.location.hash.substring(1);
    if(mainHash) {
        if (mainHash == 1 || mainHash == 2 || mainHash == 3 || mainHash == 4) {
            $('#welcome').slideUp(0, function () {
                onOff = true;
            });
            index=mainHash;
            $("html").animate({"scrollTop":(index)*innerHeight},500);
            $("body").animate({"scrollTop":(index)*innerHeight},500);
          dianji()
        }
    }

    $(".aboutNav_dian1").children(".dianji").click(function(){
        index=$(this).index();
        if(index<$(".div").length-1){
            index++
        }
        $("html").animate({"scrollTop":(index)*innerHeight},500);
        $("body").animate({"scrollTop":(index)*innerHeight},500);
    });



    //点击切换下一页
    $(".donext").click(function(){
                if(index<$(".div").length-1){
                    index++
                }
                $("body").animate({"scrollTop":index*innerHeight},500);
                dianji()

    });


    setInterval(function () {
        $(".jiazhi_shan,.jiazhi_shan1,.jiazhi_shan2,.jiazhi_shan3").fadeToggle();
    }, 1000);

    var n = 0;
    $(".gundong4btn_wrap").children().click(function () {
        n = $(this).index();
        $(".gundong4btn_wrap").children(".btn11").css({"background-position-y": "0"});
        $(".gundong4btn_wrap").children(".btn11").eq(n).siblings().css({"background-position-y": "-8px"});
    });

    $(".gundong4_right").click(function(){
        $(".gundong4_conwrap").animate({"left":-845+"px"})
    });
    $(".gundong4_left").click(function(){
        $(".gundong4_conwrap").animate({"left":0})
    });
    $(".gundong4_left").hover(function(){
        $(".gundong4prev_wrap").animate({"left":0+"px"});
        $(".gundong4next_wrap").animate({"left":0+"px"})
    });
    $(".gundong4_right").hover(function(){
        $(".gundong4prev_wrap").animate({"left":78+"px"});
        $(".gundong4next_wrap").animate({"left":78+"px"})
    });

//点击切换
    $(".aboutNav_dian").click(function () {
        $(this).children(".about_span").children(".a1").addClass("white");
        $(this).children(".about_span").parent().siblings().find(".a1").removeClass("white");
        $(this).children(".about_span").children(".a1").children(".img").addClass("show");
        $(this).children(".about_span").children(".a1").children(".img").parents().siblings(".aboutNav_dian").find(".img").removeClass("show");

    });


    //第二块概述轮播
    var l=0;
    $(".about_next").click(function(){
        $(".gundong2_overflow").children(".gundong2_wrap").stop(true,true).animate({"left":-1100+"px"},function(){
            $(".gundong2_overflow").children(".gundong2_wrap").children().eq(0).appendTo(".gundong2_wrap");
            $(".gundong2_overflow").children(".gundong2_wrap").css("left",0)
        });
    });

    $(".about_prev").click(function(){
        $(".gundong2_overflow").children(".gundong2_wrap").children(".kuai:last").prependTo(".gundong2_wrap");
        $(".gundong2_overflow").children(".gundong2_wrap").css("left",-1100+"px");
        $(".gundong2_overflow").children(".gundong2_wrap").animate({"left":0})
    });
});