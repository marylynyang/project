var GLOBAL = GLOBAL || {};
$(function () {
    loadArticleDetail();
    loadArticleList();

    //返回顶部效果
    $(window).scroll(function(){
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            if (GLOBAL.pageStart < GLOBAL.pageCount) {
                loadArticleList();
            }
        }

    });

    //引入底部
    $("#foot").load("footer.html");

    //侧边栏延时
    $("#y_sidebarWrap").delay(2000).animate({"right":0,"display":"show"});


});

//加载列表数据方法
function loadArticleDetail() {
    //先ajax请求数据，然后执行下面的操作，此处数据先写好在了articleData.js里，可以直接使用，格式和服务器返回的json一致。
    if (getUrlParams("type")) {
        var result = articleData[getUrlParams("type")]; //此数据在articleData.js里
        $("#listTitleOne").text(result.data.listTitleOne);
        $("#listTitleTwo").text(result.data.listTitleTwo);
        $("#listTitleThree").text(result.data.listTitleThree);
        $("#listTitleFour").text(result.data.listTitleFour);
        $("#listTitleFive").text(result.data.listTitleFive);
        $("#listTitleSix").text(result.data.listTitleSix);
        $("#listTitleSeven").text(result.data.listTitleSeven);
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

//加载列表数据方法
function loadArticleList() {
    //先ajax请求数据，然后就行下面的操作，此处数据先写好在了listData.js里，可以直接使用，格式和服务器返回的json一致。
    if (!GLOBAL.pageStart) {
        $("#y_articleList").html("");
        GLOBAL.pageStart = 0;
    }
    var itemHtml = '';
    var result = articleData[getUrlParams("type")+"0" + GLOBAL.pageStart]; //此数据在articleData.js里
    var list = result.data.list;
    if (!list || !list.length) {
        $("#y_articleList").html("暂时没有内容，敬请期待！");
    } else {

        for (var i = 0; i < list.length; i++) {
            itemHtml = $(".z-mobanWrap").html()
                .replace("$coverBanner$", list[i].coverBanner)
                .replace("$shopNumber$", list[i].shopNumber)
                .replace("$coverImg01$", list[i].coverImg01)
                .replace("$coverImg02$",list[i].coverImg02)
                .replace("$coverImg03$", list[i].coverImg03)
                .replace("$Price01$", list[i].Price01)
                .replace("$Price02$", list[i].Price02)
                .replace("$Price03$", list[i].Price03);
            $("#y_articleList").append(itemHtml);
        }
    }

    //用于加载下一页时使用
    GLOBAL.pageStart = result.data.pageStart + 1;
    GLOBAL.pageCount = Math.ceil(result.data.count / result.data.pageSize);

}



