$(function () {
    //$(".lianxius").hover(function(){
    //    $(".lianxius_con").show();
    //},function(){
    //    $(".lianxius_con").hide()
    //});

    //var fanhui=document.getElementsByClassName("fanhui")[0];
    //var backTop=document.getElementById("backTop");
    //window.onscroll=function(){
    //    if(document.body.scrollTop>1000||document.documentElement.scrollTop>1000){
    //        backTop.style.display="block";
    //        backTop.className="animated fadeInUp"
    //    }
    //    else if(document.body.scrollTop<1000||document.documentElement.scrollTop<1000){
    //        backTop.className="";
    //        backTop.className="animated fadeOutDown"
    //    }
    //};
    //
    //fanhui.onclick=function(){
    //    var time=setInterval(function(){
    //        window.scrollBy(0,-200);
    //        if((document.body.scrollTop||document.documentElement.scrollTop)<=0){
    //            clearInterval(time)
    //        }
    //    },40)
    //}

    //返回顶部效果
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $("#backTop").fadeIn();
        }
        else {
            $("#backTop").fadeOut(0)
        }
    });

    //hover返回顶部
    $(".fanhui").hover(function () {
        $(this).css({"background": "url(images/backTop/backTop-hover.png) no-repeat"})
    }, function () {
        $(this).css({"background": "url(images/backTop/backTop.png) no-repeat"})
    });

    //点击返回顶部滑动

    $(".fanhui").click(function () {
        $(this).css({"background": "url(images/backTop/backTop-click.png) no-repeat"}).unbind("hover");
        $(this).parent().animate({"bottom": 1000, "opacity": 0}, 900, function () {
            $("#backTop").css("opacity", 1).fadeOut(0).css("bottom", 50);

        });
        $("body,html").animate({
            scrollTop: 0
        }, 400, function () {
            $('.fanhui').css({"background": "url(images/backTop/backTop.png) no-repeat"});
        });
        console.log($(this).css('background'));
    });
});
