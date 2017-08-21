//返回顶部
$(function () {
    $('.z-backtopWrap').click(function () {
        $('body,html').animate({scrollTop: 0},400)
    });

    setInterval(function(){
        $(".z-kefu-pic").animate({top:-2+"px"}).animate({top:0})
    },600);

    $("#header").load("header.html");
    $("#footer").load("footer.html");

    //侧边栏延时
    $("#y_sidebarWrap").delay(2000).animate({"right":0,"display":"show"});

});
