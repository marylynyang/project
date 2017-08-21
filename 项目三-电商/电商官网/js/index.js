$(function(){

    //引入底部
    $("#foot").load("footer.html");

    //引入头部
    $("#indexheader").load("indexheader.html");

    //侧边栏延时
    $("#y_sidebarWrap").delay(2000).animate({"right":0,"display":"show"});



    //倒计时
    function daojishi(){
        var oDate=new Date();
        var lastDate=[
            new Date(2017,10,21,1,7,0),
            new Date(2017,10,25,14,10,0),
            new Date(2017,10,21,12,14,20),
            new Date(2017,10,21,13,23,0),
            new Date(2017,10,21,22,27,0),
            new Date(2017,10,21,21,40,0),
            new Date(2017,10,21,5,12,0),
            new Date(2017,10,21,13,11,0)
        ];
        for(i=0;i<8;i++){
            var ms=lastDate[i]-oDate;//获取时间的毫秒数
            var os=Math.round(ms/1000);//获取时间的秒数
            var s=os%60;//设置倒计时的秒数
            var oMin=(os-s)/60;//总分钟数
            var min=oMin%60;//倒计时分钟数
            var ohours=(oMin-min)/60;//总小时数
            var hours=ohours%24;//倒计时小时数
            var day=ohours%24;
            document.getElementsByClassName('w_count1')[i].innerHTML=('距离抢购还有'+day+'天'+hours+'时'+min+'分'+s+'秒')
        }
    }
    setInterval(daojishi,100);

    $(".w_brand_pic").hover(function(){
        $(this).find('.w_brand_img').toggleClass('w_scale');
        $(this).find(".w_shadow").toggleClass('w_block');
    })
});
