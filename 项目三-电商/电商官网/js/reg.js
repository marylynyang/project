$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    //侧边栏延时
    $("#y_sidebarWrap").delay(2000).animate({"right":0,"display":"show"});

    setInterval(function(){
        $(".y_alwwIcon").animate({"top":-2+"px"}).animate({"top":0})
    },600);
    $("#y_name").focus(function(){
        $("#y_name_wrong").css("display","none");
        $("#y_name_word").css({"display":"block","lineHeight":"16.3px","color":"black"});
        $("#y_name_right").css("display","none");
        $("#y_name_word2").css("display","none");
    });
    $("#y_password").focus(function(){
        $("#y_pw_wrong").css("display","none");
        $("#y_pw_word").css({"display":"block","lineHeight":"16.3px","color":"black"});
        $("#y_pw_right").css("display","none");
        $("#y_pw_word2").css("display","none");
    });
    $("#y_email").focus(function(){
        $("#y_email_wrong").css("display","none");
        $("#y_email_word").css({"display":"block","lineHeight":"16px","color":"black"});
        $("#y_email_right").css("display","none");
        $("#y_email_word2").css("display","none");
    });

    $("#y_email").blur(function(){
        var oEmail= $("#y_email").val();
        var reg01 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if(oEmail==""){
            $("#y_email_wrong").css("display","block");
            $("#y_email_word").css("display","none");
            $("#y_email_right").css("display","none");
            $("#y_email_word2").css({"display":"block","color":"red"});
        } else if((reg01.test(oEmail))==true){
            $("#y_email_right").css("display","block").siblings().css("display","none");
        }else{
            $("#y_email_wrong").css("display","block");
            $("#y_email_word").css({"display":"block","color":"red"});
            $("#y_email_right").css("display","none");
            $("#y_email_word2").css("display","none");
        }
    });


    $("#y_name").blur(function(){
        var oName=$("#y_name").val();
        var reg02 =/^[a-zA-z][a-zA-Z0-9]{3,8}$/;
        if(oName==""){
            $("#y_name_wrong").css("display","block");
            $("#y_name_word").css("display","none");
            $("#y_name_right").css("display","none");
            $("#y_name_word2").css({"display":"block","lineHeight":"50px","color":"red"});
        } else if((reg02.test(oName))==true){
            $("#y_name_right").css("display","block").siblings().css("display","none");
        } else{
            $("#y_name_wrong").css("display","block");
            $("#y_name_word").css({"display":"block","lineHeight":"12.5px","color":"red"});
            $("#y_name_right").css("display","none");
            $("#y_name_word2").css("display","none");
        }
    })

    $("#y_password").blur(function(){
        var oPassword=$("#y_password").val();
        var reg03 =/^[a-zA-Z0-9]{6,12}$/;
        if(oPassword==""){
            $("#y_pw_wrong").css("display","block");
            $("#y_pw_word").css("display","none");
            $("#y_pw_right").css("display","none");
            $("#y_pw_word2").css({"display":"block","lineHeight":"50px","color":"red"});
        } else if((reg03.test(oPassword))==true){
            $("#y_pw_right").css("display","block").siblings().css("display","none");
        } else{
            $("#y_pw_wrong").css("display","block");
            $("#y_pw_word").css({"display":"block","lineHeight":"16.3px","color":"red"});
            $("#y_pw_right").css("display","none");
            $("#y_pw_word2").css("display","none");
        }
    })
});
