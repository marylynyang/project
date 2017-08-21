var GLOBAL = GLOBAL || {};
$(function () {

    $("#header").load("header.html");
    $("#footer").load("footer.html");

    //侧边栏延时
    $("#y_sidebarWrap").delay(2000).animate({"right":0,"display":"show"});

    loadArticleList();

    $(".ckgdwrap").click(function () {

        if (GLOBAL.pageStart < GLOBAL.pageCount) {
            loadArticleList();

        }

    })

});

//加载列表数据方法
function loadArticleList() {
    //先ajax请求数据，然后就行下面的操作，此处数据先写好在了listData.js里，可以直接使用，格式和服务器返回的json一致。
    if (!GLOBAL.pageStart) {
        $("#y_articleList").html("");
        GLOBAL.pageStart = 0;
    }
    var itemHtml = '';
    var result = listData["listData0" + GLOBAL.pageStart]; //此数据在listData.js里
    var list = result.data.list;
    if (!list || !list.length) {
        $("#y_articleList").html("暂时没有内容，敬请期待！");
    } else {

        for (var i = 0; i < list.length; i++) {
            itemHtml = $("#y_itemHtml").html()
                .replace("$articleCover$", list[i].coverImg)
                .replace("$articleId$", list[i].sysId)
                .replace("$articleTitle$", list[i].title)
                .replace("$articleMarket$",list[i].marketPrice)
                .replace("$articlePrice$", list[i].newPrice);
            $("#y_articleList").append(itemHtml);
        }
    }

    //用于加载下一页时使用
    GLOBAL.pageStart = result.data.pageStart + 1;
    GLOBAL.pageCount = Math.ceil(result.data.count / result.data.pageSize);
    if (GLOBAL.pageStart >= GLOBAL.pageCount) {
        $(".ckgdwrap").css({"opacity":0.5});
        $(".ckgd").html("到底部了")
    }
}

//获取页面url传过来的参数
function getUrlParams(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return r[2];
    else
        return "";
}
