$(function () {
   var mySwiper = new Swiper(".nav_1 .swiper-container",{
       loop:true,
       pagination:'.swiper-pagination',
       autoplay:2000,
       autoplayDisableOnInteraction : false
   });

    var mySwiper_1 = new Swiper ('.box_7_2_1 .swiper-container', {
        loop: true,
        slidesPerView: 2.5,
        slidesPerColumn: 1,
        paginationClickable: true,
        spaceBetween: 20,
    });

    $('.box_9_1 ul li').click(function () {
        $('.box_9_1 ul li span').css({color:'#888',background:'#fff'});
        $(this).children().css({color:'#fff',background:'#d30775'});
        $('.box_9_2').css({display:'none'});
        $('.box_9_2').eq($(this).index()).css({display:'block'});
    })


});