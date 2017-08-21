$(function(){

    //立体轮播图
    var num = 0;
    $("#j_silder_outer .y_img-item").each(function (index, el) {
        $(this).stop().css({
            "left": $(this).width() * index + "px",
            /*让每个img-item延时一定时间执行动画*/
            "transitionDelay": index * 0.3 + "s"
        });
        $(this).find(".y_pic").stop().css({
            "backgroundPosition": -$(this).width() * index + "px"
        });
    });

    $(".y_prev").on("click", function () {
        $("#j_silder_outer .y_img-item").stop().css("transform", "rotateX(" + (++num * 90) + "deg)");
    });

    $(".y_next").on("click", function () {
        $("#j_silder_outer .y_img-item").stop().css("transform", "rotateX(" + (--num * 90) + "deg)");
    });

    var timejg =6000;//轮播间隔时间
    var time = setInterval(move, timejg);

    function move() {
        $("#j_silder_outer .y_img-item").stop().css("transform", "rotateX(" + (--num * 90) + "deg)");
    }

    $('.y_slider-outer').hover(function () {
        clearInterval(time);
        $(".y_next").stop().animate({"right":0}).show();
        $(".y_prev").stop().animate({"left":0}).show()
    }, function () {
        time = setInterval(move, timejg);
        $(".y_next").stop().animate({"right":"-70px"}).hide();
        $(".y_prev").stop().animate({"left":"-70px"}).hide()
    });



    //展开菜单
    $(".y_classify_a").hover(function(){
        $(this).children(".y_classify_show").css({"opacity":1,"display":"block"}).stop().animate({"width":770+"px"});
    },function(){
        $(this).children(".y_classify_show").stop().animate({"opacity":0,"width":0+"px","display":"none"})
    });

    //点击切换页面
    //$(".y_nav_dt").click(function(){
    //    $(this).addClass("y_show");
    //    $(this).siblings().removeClass("y_show")
    //});

    var index=window.location.hash.substr(1);  //获取url中#号后面的内容
    if(index){
        $(".y_nav_dt").eq(index).addClass("y_show");
        $(".y_nav_dt").eq(index).siblings().removeClass("y_show")
    }


    //banner轮播图
    var i=0;
    var bannerTime=setInterval(function(){
        if(i==2){
            i=0
        }
        else{
            i++
        }
        $(".y_bannerList").children("img").eq(i).show().addClass("animated fadeIn").siblings().hide();
        $(".y_bannerdl").children("dt").eq(i).addClass("y_dlShow").siblings().removeClass("y_dlShow")
    },5000);

    $(".y_wrap").hover(function(){
        clearInterval(bannerTime)
    },function(){
        bannerTime=setInterval(function(){
            if(i==2){
                i=0
            }
            else{
                i++
            }
            $(".y_bannerList").children("img").eq(i).show().addClass("animated fadeIn").siblings().hide();
            $(".y_bannerdl").children("dt").eq(i).addClass("y_dlShow").siblings().removeClass("y_dlShow")
        },5000)
    });

    $(".y_bannerdl").children().click(function(){
        i=$(this).index();
        $(".y_bannerList").children("img").eq(i).show().addClass("animated fadeIn").siblings().hide();
        $(".y_bannerdl").children("dt").eq(i).addClass("y_dlShow").siblings().removeClass("y_dlShow")
    })
});
