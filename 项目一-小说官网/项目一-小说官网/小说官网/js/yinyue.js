$(function(){
    $(".box_yinyue").click(function(){
        var num=$(this).index();
        $(this).append('<audio autoplay src="music/sound0'+num+'.mp3">')
    });
});

