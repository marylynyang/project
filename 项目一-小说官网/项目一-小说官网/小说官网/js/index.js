$(function(){
    //头部
    $("#head").load("header.html");
    //引入底部
    $("#foot").load("footer.html");
    //最大的轮播图
    $(".second_word").show().addClass("animated bounceInRight");
    $(".first_word").show().addClass("animated bounceInLeft");
    $(".forth_word").show().addClass("animated fadeInDown");
    $(".fifth_word").show().addClass("animated zoomIn");
    $(".sixth_word").show().addClass("animated fadeInUp");
    var i=0;
    $(".banner_next").click(function(){
        if(i==2){
            i=0
        }
        else{
            i++
        }
        $(".banner_imglist").children(".tu").eq(i).show().addClass("animated fadeIn").siblings().hide();
        $(".dt1").children("img").eq(i).attr("src","images/banner/next&prev_now.png").siblings().attr("src","images/banner/next&prev_others.png");

    });

    $(".banner_prev").click(function(){
        if(i==0){
            i=2
        }
        else{
            i--
        }
        $(".banner_imglist").children(".tu").eq(i).show().addClass("animated fadeIn").siblings().hide();
        $(".dt1").children("img").eq(i).attr("src","images/banner/next&prev_now.png").siblings().attr("src","images/banner/next&prev_others.png");
    });

    $(".dt1").children().click(function(){
        i=$(this).index();
        $(".banner_imglist").children(".tu").eq(i).show().addClass("animated fadeIn").siblings().hide();
        $(".dt1").children("img").eq(i).attr("src","images/banner/next&prev_now.png").siblings().attr("src","images/banner/next&prev_others.png");
    });

    //第二个轮播图
    var j=0;
    $(".banner01_next").click(function(){
        if(j==5){
            j=0
        }
        else{
            j++
        }
        $(".banner01_right").children(".tu1").eq(j).show().siblings().hide();
        $(".dakuang1").children(".big_icon").eq(j).addClass("banner01_show").parent().siblings().find(".big_icon").removeClass("banner01_show");
        $(".dakuang1").children(".icon").eq(j).addClass("hide").parent().siblings().find(".icon").removeClass("hide");
        $(".tu1").removeClass('animated slideInLeft').addClass('animated slideInRight');
    });

    $(".banner01_prev").click(function(){
        if(j==0){
            j=5
        }
        else{
            j--
        }
        $(".banner01_right").children(".tu1").eq(j).show().siblings().hide();
        $(".dakuang1").children(".big_icon").eq(j).addClass("banner01_show").parent().siblings().find(".big_icon").removeClass("banner01_show");
        $(".dakuang1").children(".icon").eq(j).addClass("hide").parent().siblings().find(".icon").removeClass("hide");
        $(".tu1").removeClass('animated slideInLeft').addClass('animated slideInRight');
    });



    $(".dakuang1").click(function(){
        //j=$(this).index();

        //获取新的位置
        var newIndex=$(this).index();
        //判断
        if(newIndex>j){
            $(".tu1").removeClass('animated slideInLeft').addClass('animated slideInRight');
            j=newIndex;
        }
        else{
            $(".tu1").removeClass('animated slideInRight').addClass('animated slideInLeft');
            j=newIndex;
        }
        $(".banner01_right").children(".tu1").eq(j).show().siblings().hide();
        $(".dakuang1").children(".big_icon").eq(j).addClass("banner01_show").parent().siblings().find(".big_icon").removeClass("banner01_show");
        $(".dakuang1").children(".icon").eq(j).addClass("hide").parent().siblings().find(".icon").removeClass("hide");
    });

    //评价星星

    //第一个
    var czy=document.getElementById("czy");
    var dts=czy.getElementsByTagName("dt");
    var imgs=czy.getElementsByClassName("xx");

    for(var y=0;y<dts.length;y++){
        dts[y].onmouseover=test;
    }
    var index01;
    function test(){
        for(y=0;y<dts.length;y++){
            if(dts[y]==this){
                index01=y
            }
        }
        for(y=0;y<=index01;y++){
            imgs[y].src="images/banner02/star-on-big.png";
        }
        for(y=index01+1;y<dts.length;y++){
            imgs[y].src="images/banner02/star-off-big.png"
        }
    }

    //第二个
    var czy1=document.getElementById("czy1");
    var dts1=czy1.getElementsByTagName("dt");
    var imgs1=czy1.getElementsByClassName("xx");

    for(var q=0;q<dts1.length;q++){
        dts1[q].onmouseover=test1;
    }
    var index02;
    function test1(){
        for(q=0;q<dts1.length;q++){
            if(dts1[q]==this){
                index02=q
            }
        }
        for(q=0;q<=index02;q++){
            imgs1[q].src="images/banner02/star-on-big.png";
        }
        for(q=index02+1;q<dts1.length;q++){
            imgs1[q].src="images/banner02/star-off-big.png"
        }
    }

    //第三个
    var czy2=document.getElementById("czy2");
    var dts2=czy2.getElementsByTagName("dt");
    var imgs2=czy2.getElementsByClassName("xx");

    for(q=0;q<dts2.length;q++){
        dts2[q].onmouseover=test2;
    }
    var index03;
    function test2(){
        for(q=0;q<dts2.length;q++){
            if(dts2[q]==this){
                index03=q
            }
        }
        for(q=0;q<=index03;q++){
            imgs2[q].src="images/banner02/star-on-big.png";
        }
        for(q=index03+1;q<dts2.length;q++){
            imgs2[q].src="images/banner02/star-off-big.png"
        }
    }

    //第四个
    var czy3=document.getElementById("czy3");
    var dts3=czy3.getElementsByTagName("dt");
    var imgs3=czy3.getElementsByClassName("xx");

    for(q=0;q<dts3.length;q++){
        dts3[q].onmouseover=test3;
    }
    var index04;
    function test3(){
        for(q=0;q<dts3.length;q++){
            if(dts3[q]==this){
                index04=q
            }
        }
        for(q=0;q<=index04;q++){
            imgs3[q].src="images/banner02/star-on-big.png";
        }
        for(q=index04+1;q<dts3.length;q++){
            imgs3[q].src="images/banner02/star-off-big.png"
        }
    }

    //第五个
    var czy4=document.getElementById("czy4");
    var dts4=czy4.getElementsByTagName("dt");
    var imgs4=czy4.getElementsByClassName("xx");

    for(q=0;q<dts4.length;q++){
        dts4[q].onmouseover=test4;
    }
    var index05;
    function test4(){
        for(q=0;q<dts4.length;q++){
            if(dts4[q]==this){
                index05=q
            }
        }
        for(q=0;q<=index05;q++){
            imgs4[q].src="images/banner02/star-on-big.png";
        }
        for(q=index05+1;q<dts4.length;q++){
            imgs4[q].src="images/banner02/star-off-big.png"
        }
    }

    //第六个
    var czy5=document.getElementById("czy5");
    var dts5=czy5.getElementsByTagName("dt");
    var imgs5=czy5.getElementsByClassName("xx");

    for(q=0;q<dts5.length;q++){
        dts5[q].onmouseover=test5;
    }
    var index06;
    function test5(){
        for(q=0;q<dts5.length;q++){
            if(dts5[q]==this){
                index06=q
            }
        }
        for(q=0;q<=index06;q++){
            imgs5[q].src="images/banner02/star-on-big.png";
        }
        for(q=index06+1;q<dts5.length;q++){
            imgs5[q].src="images/banner02/star-off-big.png"
        }
    }

    //第三个3D轮播
    $.noConflict();
    jQuery('.zy-Slide').zySlide({ speed: 500 })
        .css('border', '0px solid blue');


    //分类书库 展开隐藏
    $(".business_zhankai").click(function(){
        if($(".content03_block").is(":hidden")){
            $(".content03_block").slideDown();
            $(".content03_block1,.content03_block2").slideUp();
            $(".business_zhankai").animate({"background-position-y":"-67px"});
            $(".business_zhankai1,.business_zhankai2").animate({"background-position-y":""});
        }
        else{
            $(".content03_block").slideUp();
            $(".business_zhankai").animate({"background-position-y":""});
        }
    });

    $(".business_cimg01").click(function(){
        if($(".content03_block").is(":hidden")){
            $(".content03_block").slideDown();
            $(".content03_block1,.content03_block2").slideUp();
            $(".business_zhankai").animate({"background-position-y":"-67px"});
            $(".business_zhankai1,.business_zhankai2").animate({"background-position-y":""});
        }
        else{
            $(".content03_block").slideUp();
            $(".business_zhankai").animate({"background-position-y":""});
        }
    });

    $(".business_zhankai1").click(function(){
        if($(".content03_block1").is(":hidden")){
            $(".content03_block1").slideDown();
            $(".content03_block,.content03_block2").slideUp();
            $(".business_zhankai1").animate({"background-position-y":"-67px"});
            $(".business_zhankai,.business_zhankai2").animate({"background-position-y":""});
        }
        else{
            $(".content03_block1").slideUp();
            $(".business_zhankai1").animate({"background-position-y":""});
        }
    });

    $(".business_cimg02").click(function(){
        if($(".content03_block1").is(":hidden")){
            $(".content03_block1").slideDown();
            $(".content03_block,.content03_block2").slideUp();
            $(".business_zhankai1").animate({"background-position-y":"-67px"});
            $(".business_zhankai,.business_zhankai2").animate({"background-position-y":""});
        }
        else{
            $(".content03_block1").slideUp();
            $(".business_zhankai1").animate({"background-position-y":""});
        }
    });

    $(".business_zhankai2").click(function(){
        if($(".content03_block2").is(":hidden")){
            $(".content03_block2").slideDown();
            $(".content03_block,.content03_block1").slideUp();
            $(".business_zhankai2").animate({"background-position-y":"-67px"});
            $(".business_zhankai,.business_zhankai1").animate({"background-position-y":""});
        }
        else{
            $(".content03_block2").slideUp();
            $(".business_zhankai2").animate({"background-position-y":""});

        }
    });

    $(".business_cimg03").click(function(){
        if($(".content03_block2").is(":hidden")){
            $(".content03_block2").slideDown();
            $(".content03_block,.content03_block1").slideUp();
            $(".business_zhankai2").animate({"background-position-y":"-67px"});
            $(".business_zhankai,.business_zhankai1").animate({"background-position-y":""});
        }
        else{
            $(".content03_block2").slideUp();
            $(".business_zhankai2").animate({"background-position-y":""});
        }
    });

    //第四个轮播图
    var a = 0;
    $(".next2").click(function () {
        if (a == 2) {
            a = 0
        }
        else {
            a++
        }
        $(".content04_list").stop().animate({"left":200+"px"}).animate({"left": -1100 + "px"}, function () {
            $(".content04_list").stop().children(".tu0").eq(0).appendTo(".content04_list");
            $(".content04_list").stop().css("left", 0);
        });
    });

    $(".prev2").click(function () {
        if (a == 0) {
            a = 2
        }
        else {
            a--
        }
        $(".content04_list").stop().children("div:last").prependTo(".content04_list");
        $(".content04_list").stop().css("left", -1100 + "px");
        $(".content04_list").stop().animate({"left":200+"px"}).animate({"left": 0+"px"});
    });

    //点击音频
    var audio1=document.getElementById("mp3Btn1");
    var audio2=document.getElementById("mp3Btn2");
    var audio3=document.getElementById("mp3Btn3");
    var audio4=document.getElementById("mp3Btn4");
    var audio5=document.getElementById("mp3Btn5");

    $(".audio_div").click(function(){
        var theEvent=window.event || arguments.callee.caller.arguments[0];
        theEvent.stopPropagation();//阻止冒泡
        theEvent.stopPropagation();
        if(audio1.paused&&audio2.played&&audio3.played&&audio4.played&&audio5.played){
            $(".audio_div").css({"background":"url('images/content02/kaishijian.png') no-repeat"}).css({"background-size":30+"px"});
            $(".audio_div1,.audio_div2,.audio_div3,.audio_div4").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});;
            audio1.play();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            return;
        }
        else{
            $(".audio_div").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});
            audio1.pause();
        }
    });
    $(".audio_div1").click(function(){
        var theEvent=window.event || arguments.callee.caller.arguments[0];
        theEvent.stopPropagation();//阻止冒泡
        theEvent.stopPropagation();
        if(audio2.paused&&audio1.played&&audio3.played&&audio4.played&&audio5.played){
            $(".audio_div1").css({"background":"url('images/content02/kaishijian.png') no-repeat"}).css({"background-size":30+"px"});
            $(".audio_div,.audio_div2,.audio_div3,.audio_div4").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});
            audio2.play();
            audio1.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            return;
        }
        else{
            $(".audio_div1").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});
            audio2.pause();
        }
    });

    $(".audio_div2").click(function(){
        var theEvent=window.event || arguments.callee.caller.arguments[0];
        theEvent.stopPropagation();//阻止冒泡
        theEvent.stopPropagation();
        if(audio3.paused&&audio1.played&&audio2.played&&audio4.played&&audio5.played){
            $(".audio_div2").css({"background":"url('images/content02/kaishijian.png') no-repeat"}).css({"background-size":30+"px"});
            $(".audio_div,.audio_div1,.audio_div3,.audio_div4").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});
            audio3.play();
            audio1.pause();
            audio2.pause();
            audio4.pause();
            audio5.pause();
            return;
        }
        else{
            $(".audio_div2").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});
            audio3.pause();
        }
    });

    $(".audio_div3").click(function(){
        var theEvent=window.event || arguments.callee.caller.arguments[0];
        theEvent.stopPropagation();//阻止冒泡
        theEvent.stopPropagation();
        if(audio4.paused&&audio1.played&&audio2.played&&audio3.played&&audio5.played){
            $(".audio_div3").css({"background":"url('images/content02/kaishijian.png') no-repeat"}).css({"background-size":30+"px"});
            $(".audio_div,.audio_div1,.audio_div2,.audio_div4").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});
            audio4.play();
            audio1.pause();
            audio2.pause();
            audio3.pause();
            audio5.pause();
            return;
        }
        else{
            $(".audio_div3").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});
            audio4.pause();
        }
    });

    $(".audio_div4").click(function(){
        var theEvent=window.event || arguments.callee.caller.arguments[0];
        theEvent.stopPropagation();//阻止冒泡
        theEvent.stopPropagation();
        if(audio5.paused&&audio1.played&&audio2.played&&audio3.played&&audio4.played){
            $(".audio_div4").css({"background":"url('images/content02/kaishijian.png') no-repeat"}).css({"background-size":30+"px"});
            $(".audio_div,.audio_div1,.audio_div2,.audio_div3").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});

            audio5.play();
            audio1.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            return;
        }
        else{
            $(".audio_div4").css({"background":"url('images/content02/zhantinjian.png') no-repeat"}).css({"background-size":30+"px"});;
            audio5.pause();
        }
    });

    //点击收藏
    $(".team_xinlang").click(function(){
        $(this).children(".team_hover").toggle()
    });
});

