$(function(){
    var lastScroll = 0;
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if (scroll > 1770){
            $(".insta_wrap").addClass("absolute");
        }
        else {
            $(".insta_wrap").removeClass("absolute");
        }
        lastScroll = scroll;
    });
});