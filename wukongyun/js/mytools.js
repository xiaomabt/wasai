/**
 * Created by Administrator on 2017/7/19.
 */
$(function () {
    //回到顶部
    window.onscroll=function () {
        let scrolltop=document.body.scrollTop + document.documentElement.scrollTop;
        if(scrolltop<100){
            $('#guding2').css('display','none');
        }
        if(scrolltop>=100){
            $('#guding2').css('display','block');
        }
    };
    //点击微信切换
    $("#guding1").animate({right: '-100px'}, "slow");
    $("#weixin").animate({right: '10px'}, "slow");
    $('#guding2').click(function () {
        $("body").animate({scrollTop: '0px'}, "slow");
    })
    $('#guding1').click(function () {
        $("#guding1").animate({right: '-100px'}, "slow");
        $("#weixin").animate({right: '10px'}, "slow");
    })
    $('#qiehuan').click(function () {
        $("#guding1").animate({right: '0px'}, "slow");
        $("#weixin").animate({right: '-210px'}, "slow");
    })
    //登录特效
    $('#outer').mouseenter(function () {
        $('#load').css('display','block')
        $('#load').animate({height:'40px'},'slow');
        $('#load').css('line-height','40px');
    })
    $('#outer').mouseleave(function () {
        $('#load').animate({height:'0px'},'slow',function () {
            $('#load').css('display','none');
        });
    })
    //轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
        effect:'coverflow',
        autoplay: 3000,
    })
    $('.swiper-container').mouseenter(function () {
        mySwiper.stopAutoplay();
    }).mouseleave(function () {
        mySwiper.startAutoplay();
    })
    //QQ
    $('.qqzx').mouseenter(function(){
        $('.qqzx').animate({'bottom':'220px'},'slow');
    });
    $('.qqzx').mouseleave(function(){
        $('.qqzx').animate({'bottom':'200px'},'slow');
    });
    //手机端
    $('.tiger').click(function () {
        $('#celan').toggle('slow');
    })
})
