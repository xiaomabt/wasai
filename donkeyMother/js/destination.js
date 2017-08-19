$(function () {
   var mySwiper = new Swiper(".nav_1 .swiper-container",{
       loop:true,
       pagination:'.swiper-pagination',
       autoplay:2000,
       autoplayDisableOnInteraction : false
   });

   /* var mySwiper_1 = new Swiper ('.box_7_2_1 .swiper-container', {
        loop: true,
        slidesPerView: 2.5,
        slidesPerColumn: 1,
        paginationClickable: true,
        spaceBetween: 20,
    });*/
    $('.ermen ul li').click(function () {
        $('.ermen ul li a').css({color:'#888',background:'#f3f3f3'});
        $(this).children().css({color:'#fff',background:'#d30775'});
        $('.beijing').css({display:'none'});
        $('.beijing').eq($(this).index()).css({display:'block'});
    })


});