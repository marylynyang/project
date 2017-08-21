
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    //侧边栏延时
    $("#y_sidebarWrap").delay(2000).animate({"right":0,"display":"show"});

    timer = setInterval(function () {
        $(".w_alwwIcon").animate({top: -2+"px"}).animate({top: 0})
    }, 600)
});