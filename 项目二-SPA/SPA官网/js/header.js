$(function(){
    //导航hover
    $(".nav_item").hover(function(){
        $(this).children(".greenban").stop(true,true).slideDown(600)
    },function(){
        $(this).children(".greenban").stop(true,true).slideUp(600)
    });

    //点击切换导航
    //$(".nav_item").click(function(){
    //    $(this).addClass("show");
    //    $(this).siblings().removeClass("show")
    //});
    var index1=window.location.hash.substr(1);
    if(index1){
        $(".nav_item").eq(index1).addClass("show");
        $(".nav_item").eq(index1).siblings().removeClass("show")
    }



    //点击下拉菜单
    $(".menu_dianji").click(function(){
        $(".nav_list").slideToggle(600)
    })

})

