$(function(){
    window.onload=window.onresize=function(){
        $("#y_sidebarWrap").height($(window).height());
        $("#y_bigsideWrap").height($(window).height());
        $("#y_shopWrap").height($(window).height());
    };

    //点击返回顶部滑动
    $(".y_backTop").click(function(){
        $("body,html").animate({
            scrollTop:0
        },400)
    });

    $(".y_sidebar_shopping").click(function(){
        if($("#y_shopWrap").is(":hidden")){
            $("#y_sidebarWrap").animate({"right":280+"px"});
            $("#y_shopWrap").show().animate({"right":0});
        }
        else{
            $("#y_sidebarWrap").animate({"right":0});
            $("#y_shopWrap").animate({"right":-280+"px"}).hide();
        }
    })

});
