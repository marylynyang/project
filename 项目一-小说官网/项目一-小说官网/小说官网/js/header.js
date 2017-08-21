$(function () {
    var index=window.location.hash.substr(1);
    if(index){
        $('.trans').eq(index).addClass("show").parent(".dianji").siblings().find(".trans").removeClass("show");
    }

    //下拉菜单
    $(".dianji").hover(function(){
        $(this).children(".box").stop(true,true).slideDown(400,"easeIn");
    },function(){
        $(this).children(".box").stop(true,true).slideUp(400,"easeOut");
    });
});

