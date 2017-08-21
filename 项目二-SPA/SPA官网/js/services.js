$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    var i=0;
    $(".service_btn_ul").children("li").click(function(){
        i=$(this).index();
        $(".service_lunbo").children(".lunbo").eq(i).show().addClass("animated fadeIn");
        $(".service_lunbo").children(".lunbo").eq(i).siblings().hide();
        $(".service_btn_ul").children("li").eq(i).css({"background":"#6aa04a"});
        $(".service_btn_ul").children("li").eq(i).siblings().css({"background":"#fff"});
    })
})
