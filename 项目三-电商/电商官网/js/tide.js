$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    //侧边栏延时
    $("#y_sidebarWrap").delay(2000).animate({"right":0,"display":"show"});

})
