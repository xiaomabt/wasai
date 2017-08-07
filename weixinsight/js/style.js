/**
 * @author: zhangyh-k@glondon.com
 * @description:
 * @Date: 2017/8/4 16:34
 */
$(function () {
    var swiper = new Swiper(".swiper-container",{
        direction:"vertical",
        pagination:".swiper-pagination",
        effect : 'coverflow',
        slidesPerView: 1,
        centeredSlides: true,
        coverflow: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
        },
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })

    //暂停
    $('.music_jay').toggle(function () {
        $(this).css("opacity",'0');
        $(this).next().attr({src:'none'});
        $('.music').addClass("music_12");
    },function () {
        $(this).css("opacity",'1');
        $(this).next().attr({src:'images/music.gif'});
        $('.music').removeClass("music_12");
    });
});
