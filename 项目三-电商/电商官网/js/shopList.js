var GLOBAL = GLOBAL || {};
$(function () {
    $("#header").load('header.html');
    $("#footer").load('footer.html');


    //侧边栏延时
    $("#y_sidebarWrap").delay(2000).animate({"right":0,"display":"show"});


    setInterval(function(){
        $(".y_alwwIcon").animate({"top":-2+"px"}).animate({"top":0})
    },600);

    var myevent=new Vue();
    Vue.component("my-a",{
        template:"<button @click='my_a'><span style='border-right:1px solid #dddddd;padding-right: 15px;padding-left: 5px'>{{a_num}}</span><span style='padding-left: 15px;padding-right: 5px'>+</span>    </button>",
        data:function(){
            return {"a_num":0}
        },
        methods:{
            my_a:function(){
                this.a_num++;
                myevent.$emit("a-event",this.a_num)
            }
        },
        mounted:function(){
            var _this=this;
            myevent.$on("b-event",function(data){
                _this.a_num=data
            })
        }
    });
    Vue.component('my-b',{
        template:"<button @click='my_b'>-</button>",
        data:function(){
            return {b_num:""}
        },
        methods:{
            my_b:function(){
                if(this.b_num>=1){
                    this.b_num--;
                    myevent.$emit("b-event",this.b_num)
                }

            }
        },
        mounted:function(){
            var _this=this;
            myevent.$on("a-event",function(data){
                _this.b_num=data
            })
        }
    });
    new Vue({
        el:"#app"
    });

    
    $(".q_click1").click(function () {
        var index=$(this).index();
        $(".q_mengban1").eq(index).show().parent().siblings('.q_click1').children('.q_mengban1').hide();
        $('.q_none').eq(index).addClass('q_show').siblings().removeClass("q_show");
        $('.q_click').eq(index).css({'border':' 1px solid black'}).parent().siblings('.q_click1').children('.q_click').css({'border':' 1px solid white'});
        $('.q_bigpic1').eq(index).show().siblings().hide();
    });
    $('.q_tab1').mouseover(function () {
        var index=$(this).index();
        $(".q_meng1").eq(index).hide().parent().siblings('.q_tab1').children('.q_meng1').show();
        $('.q_none').eq(index).addClass('q_show').siblings().removeClass("q_show");
        $('.q_bigpic1').eq(index).show().siblings().hide();


    });


    $(".q_js").hover(function () {
        $(this).find('.q_js1').removeClass("fa-caret-down").addClass("fa-caret-up");
        $('.q_qrcode').show()
    },function () {
        $(this).find('.q_js1').removeClass("fa-caret-up").addClass("fa-caret-down");
        $('.q_qrcode').hide()
    });

    $('.q_qrcode').hover(function () {
        $(this).show()
    },function () {
        $(this).hide()
    });

    $(".q_li").click(function () {
        window.scrollTo(0,950);
        $(this).addClass('q_border').siblings().removeClass('q_border');
        var index=$(this).index();
        $(".q_lishow").eq(index).addClass('q_show').siblings().removeClass('q_show');


    });


    $(window).scroll(function(){
        var _line=parseInt($(window).height()/7);
        if($(this).scrollTop()>=935){
           // $('.q_pos').addClass('q_fixed');
            $(".q_gouwu").addClass('q_fixed');
           $('.q_lishow').css({"padding-top":'50px'});

        }
        else{
            // $('.q_pos').removeClass('q_fixed');
            $(".q_gouwu").removeClass('q_fixed');
            $('.q_lishow').css({"padding-top":'0px'});

        }
        $('.q_fl_r li').each(function(){
            var _target=parseInt($(this).offset().top-$(window).scrollTop()-_line);
            var _i=$(this).index();
            if (_target<=0) {
                $('.q_fl_l li').removeClass('q_shop');
                $('.q_fl_l li').find('a').removeClass('q_shop_a');
                $('.q_fl_l li').eq(_i).addClass('q_shop');
                $('.q_fl_l li').eq(_i).find('a').addClass('q_shop_a');
            }
            //如果到达页面底部，给左侧导航最后一个加active
            else if($(document).height()==$(window).scrollTop()+$(window).height()){
                $('.q_fl_l li').removeClass('q_shop');
                $('.q_fl_l li').find('a').removeClass('q_shop_a');
                $('.q_fl_l li').eq($('.q_fl_r li').length-1).addClass('q_shop');
                // $('.q_fl_l li').eq($('.q_fl_r li').length-1).find('a').addClass('q_shop_a');
            }
        });
    });

    // 加入购物车
    $(".q_box1").click(function () {
       $(".q_gou1").hide();
        $(".q_gou_title1").show()
    });
    $(".q_box2").click(function () {
        $(".q_gou1").show();
        $(".q_gou_title1").hide()
    });

    $(".q_gou1 ul li").click(function () {
        $(this).addClass('q_shop').siblings().removeClass('q_shop');
        $(this).find('a').addClass('q_shop_a').siblings().removeClass('q_shop_a')
    });




    var bg=document.getElementsByClassName('q_img')[0];
    var img1=document.getElementsByClassName('q_bigpic1')[0];

    var bg_1=document.getElementsByClassName('q_img')[1];
    var img1_1=document.getElementsByClassName('q_bigpic1')[1];


    var bg_2=document.getElementsByClassName('q_img')[2];
    var img1_2=document.getElementsByClassName('q_bigpic1')[2];

    var bg1=document.getElementById('q_bigpic');
    var obox = document.getElementById('box');

        bg.onmousemove=function(ev) {

            var ev = ev || window.event;           // 获取鼠标坐标
            var left1 = ev.clientX;               //鼠标的x轴
            var top1 = ev.clientY;               // 鼠标的Y轴
            obox.style.display = 'block';
            var left = left1 - bg.offsetLeft;
            var top = top1 - bg.offsetTop;

            bg1.style.display = 'block';

            if (left < 100) {
                obox.style.left = 0
            }
            else if (left > 300) {
                obox.style.left = 200 + 'px'
            }
            else {
                obox.style.left = left - 100 + 'px';
                img1.style.left = '-' + 2 * (left - 100) + 'px';
                img1_1.style.left = '-' + 2 * (left - 100) + 'px';
                img1_2.style.left = '-' + 2 * (left - 100) + 'px'

            }
            if (top < 140) {
                obox.style.top = 0
            }
            else if (top > 400) {
                obox.style.top = 280 + 'px'
            }
            else {
                obox.style.top = top - 140 + 'px';
                img1.style.top = '-' + 2 * (top - 140) + 'px';
                img1_1.style.top = '-' + 2 * (top - 140) + 'px';
                img1_2.style.top = '-' + 2 * (top - 140) + 'px';
            }
        };
        bg.onmouseout=function () {
            obox.style.display = 'none';
            bg1.style.display = 'none';
        };



    loadArticleDetail();
});

//加载列表数据方法
function loadArticleDetail() {
    //先ajax请求数据，然后执行下面的操作，此处数据先写好在了articleData.js里，可以直接使用，格式和服务器返回的json一致。
    if (getUrlParams("type")) {
        var result = articleData[getUrlParams("type") + getUrlParams("articleId")]; //此数据在articleData.js里
        $('#shopTitle').text(result.data.shopTitle);
        $('#shopPrice').text(result.data.shopPrice);
        $('#shopXiaoLiang').text(result.data.shopXiaoLiang);
        $('#coverImg01').attr("src", result.data.coverImg01);
        $('#coverImg02').attr("src", result.data.coverImg02);
        $('#coverImg03').attr("src", result.data.coverImg03);
        $('#coverImg04').attr("src", result.data.coverImg04);
        $('#coverImg05').attr("src", result.data.coverImg05);
        $('#coverImg06').attr("src", result.data.coverImg06);
        $('#middleCoverImg01').attr("src", result.data.middleCoverImg01);
        $('#middleCoverImg02').attr("src", result.data.middleCoverImg02);
        $('#middleCoverImg03').attr("src", result.data.middleCoverImg03);
        $('#smallCoverImg01').attr("src", result.data.smallCoverImg01);
        $('#smallCoverImg02').attr("src", result.data.smallCoverImg02);
        $('#smallCoverImg03').attr("src", result.data.smallCoverImg03);
        $('#shopMiaoshu').text(result.data.shopMiaoshu);
        $('#shopXiaoguo').text(result.data.shopMiaoshu);
        $("#shopYangshi").attr("src", result.data.shopYangshi);
        $('#shopFAhuo').attr("src",result.data.shopFAhuo);
        $("#shopshuoming").attr("src",result.data.shopChima);
        $('#shangpintuijian').attr("src",result.data.shangpintuijian);
        $("#rightCoverImg01").attr("src",result.data.rightCoverImg01);
        $("#rightPrice01").text(result.data.rightPrice01);
        $("#rightCoverImg02").attr("src",result.data.rightCoverImg02);
        $("#rightPrice02").text(result.data.rightPrice02);
        $("#rightCoverImg03").attr("src",result.data.rightCoverImg03);
        $("#rightPrice03").text(result.data.rightPrice03)
    }
}

//获取页面url传过来的参数
function getUrlParams(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);

    console.log(r);
    if (r != null)
        return r[2];
    else
        return "";
}