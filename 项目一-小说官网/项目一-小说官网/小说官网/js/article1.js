$(function(){
    $(".pen_img").click(function(){
        $(this).animate({"left":61+"px"});
        $(this).animate({"left":780+"px"});
        $(".line_long").animate({"width":61+"px"});
        $(".line_long").animate({"width":780+"px"});
    });
});
