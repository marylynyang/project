$(function(){
    //展开菜单
    $(".y_classify_a").hover(function(){
        $(this).children(".y_classify_show").css({"opacity":1,"display":"block"}).stop().animate({"width":770+"px"});
    },function(){
        $(this).children(".y_classify_show").stop().animate({"opacity":0,"width":0+"px","display":"none"})
    });


//点击切换页面
//    $(".y_nav_dt").click(function(){
//        $(this).addClass("y_show");
//        $(this).siblings().removeClass("y_show")
//    });

    var index=window.location.hash.substr(1);  //获取url中#号后面的内容
    if(index){
        $(".y_nav_dt").eq(index).addClass("y_show");
        $(".y_nav_dt").eq(index).siblings().removeClass("y_show")
    }



    //展开nav菜单栏
    $(".y_nav_listL").hover(function(){
        $(this).children(".y_classify_list").stop(true,true).slideDown()
    },function(){
        $(this).children(".y_classify_list").stop(true,true).slideUp()
    })

});

