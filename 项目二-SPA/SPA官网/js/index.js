$(function(){
    $("#header").load("indexheader.html");
    $("#footer").load("footer.html");

   //轮播图js
    var banner_list=$(".banner_list");
    var dot=$(".banner_nav li");
    var bannerItemW=0;
    var bannerItemH=0;
    var banner=$("div.banner");
    var banner_item=$("li.banner_item");
    var timer=null;
    var num=0;
    setBannerWidth();
    $(window).resize(function(){
        setBannerWidth();
    })

    function setBannerWidth(){
        var winW=$(window).width();
        if(winW>=1183){
            banner_item.width(1140)
        }
        else if(winW<1183 && winW>=975){
            banner_item.width(940)
        }
        else if(winW<975 && winW>=768){
            banner_item.width(720)
        }
        else if(winW<768){
            banner_item.width(winW-30)
        }
        bannerItemW=banner_item.width();
        bannerItemH=banner_item.height();
        banner.css({height:bannerItemH+"px"});
        banner_list.css({left:0+"px"})
    }

    dot.click(function(){
        clearInterval(timer);
        num=$(this).index();
        moveBanner(num);
        timer=setInterval(function(){
            automatic()
        },3000)
    });

    timer=setInterval(function(){
        automatic()
    },3000);

    function moveBanner(num){
        dot.eq(num).addClass("active").siblings().removeClass("active");
        banner_list.animate({left:-bannerItemW*num+"px"},1000)
    }

    function automatic(){
        num++;
        if(num==3){
            banner_list.animate({left:-bannerItemW*num+"px"},1000).animate({left:0+"px"},0);
            num=0;
            dot.eq(0).addClass("active").siblings().removeClass("active")
        }
        else{
            moveBanner(num)
        }
    }

    $(".banner_list").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            automatic()
        },3000);
    })

})
