var GLOBAL = GLOBAL || {};
$(function () {

    $("#header").load("header.html");
    $("#footer").load("footer.html");

    var titleLsitFisrsOn = true;
    $(".title_list .pen").click(function () {
        if (titleLsitFisrsOn) {
            $(".title_list").animate({"width": "100px", backgroundPositionX: "-1000px"}, 0, function () {
                $(".title_list").animate({"width": "1100px", backgroundPositionX: "0px"}, 1300, "easeOutStrong");
            });
        }
    });

    $("#articleList").delegate(".content_one", "click", function () {
        window.open("article.html?" + "type=" + getUrlParams("type") + "&articleId=" + $(this).attr("articleId"), "_blank");
    });

    loadArticleList();

    $(".ckgd").click(function () {

        if (GLOBAL.pageStart < GLOBAL.pageCount) {
            loadArticleList();

        }

    })

});

//加载列表数据方法
function loadArticleList() {
    //先ajax请求数据，然后就行下面的操作，此处数据先写好在了listData.js里，可以直接使用，格式和服务器返回的json一致。
    if (!GLOBAL.pageStart) {
        $("#articleList").html("");
        GLOBAL.pageStart = 0;
    }
    var itemHtml = '';
    var result = listData["listData0" + GLOBAL.pageStart]; //此数据在listData.js里
    var list = result.data.list;
    if (!list || !list.length) {
        $("#articleList").html("暂时没有内容，敬请期待！");
    } else {
        var updateTime;
        for (var i = 0; i < list.length; i++) {
            updateTime = list[i].updateAt || list[i].creatAt;
            itemHtml = $("#itemHtml").html()
                .replace("$articleCover$", list[i].coverImg)
                .replace("$articlehoverTile$", list[i].hover_title)
                .replace("$articlePoints$", list[i].points)
                .replace("$articleNumber$",list[i].number)
                .replace("$articleShoucang$",list[i].shoucang)
                .replace("$articleId$", list[i].sysId)
                .replace("$articleTitle$", list[i].title)
                .replace("$updateTime$", updateTime ? updateTime.substr(0, 19) : "")
                .replace("$describe$", list[i].describe);
            $("#articleList").append(itemHtml);
        }
    }

    //用于加载下一页时使用
    GLOBAL.pageStart = result.data.pageStart + 1;
    GLOBAL.pageCount = Math.ceil(result.data.count / result.data.pageSize);
    if (GLOBAL.pageStart >= GLOBAL.pageCount) {
        $(".ckgd").css("opacity", "0.3");
        $(".ckgd").css({"background": "url(images/list_gomore_bg_nomore.jpg) no-repeat"})
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

function asd1(id){
    window.open('article.html?type=xiaoniaoNews&articleId='+id)
}