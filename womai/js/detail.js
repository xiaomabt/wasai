/**
 * Created by Administrator on 2017/7/19.
 */
$(function () {
    //回到顶部
    window.onscroll=function () {
        let scrolltop=document.body.scrollTop + document.documentElement.scrollTop;
        if(scrolltop>0){
            $('.head_').css('background','rgba(255,255,255,0.9)');
            $('#head a').css('color','#888');

        }
        if(scrolltop==0){
            $('#head').css({background:'url("img/mask.png") no-repeat',
                             backgroundSize: '100% 110%'});
            $('.head_').css('background','rgba(255,255,255,0)');
            $('#head a').css('color','#fff');
        }

            $('#box9').css({position:'fixed',
                            top:'50px',
                            background:'#fff'});
        /*if(scrolltop<1000){
            $('#box9').css({position:'none'
               });
        }*/
    };
    //点击微信切换
     /* $("#guding1").animate({right: '-100px'}, "slow");
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
    })*/
    //轮播图
    var mySwiper = new Swiper ('.swiper1 .swiper-container', {
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper1 .swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
        effect:'coverflow',
        autoplay: 3000,
    });
    //轮播图
    var mySwiper_1 = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView: 2.5,
        slidesPerColumn: 1,
        paginationClickable: true,
        spaceBetween: 20,
        //autoplay: 3000,
        pagination: '.swiper-pagination',
    });

    //买
    $('.hello_1').click(function () {
        $(".hello_1").animate({left: '-100px'}, "slow");
        $(".hello_2").animate({left: '-4px'}, "slow");
    })
    $('.a_one').click(function () {
        $(".hello_1").animate({left: '20px'}, "slow");
        $(".hello_2").animate({left: '-210px'}, "slow");
    })
    $('.hello').click(function () {
        $("body").animate({scrollTop: '0px'}, "slow");
    });
    $('.helloo').click(function () {
        $("body").animate({scrollTop: '0px'}, "slow");
    });
    //加减商品数
    $('.jian').click(function(){
        let num=$('.hehe').val();
        if(num==1){
            $('.hehe').val(1);
        }else{
            $('.hehe').val(num-1);
        }
    })
    $('.jia').click(function(){
        let num=parseInt($('.hehe').val());
        $('.hehe').val(num+1);
    });
    $('.main_42').click(function () {
        location.href='../html/shopcar.html';
    });

    //手机端无需鼠标移上
   /* $('.swiper-container').mouseenter(function () {
        mySwiper.stopAutoplay();
    }).mouseleave(function () {
        mySwiper.startAutoplay();
    })*/

    /*//QQ
    $('.qqzx').mouseenter(function(){
        $('.qqzx').animate({'bottom':'220px'},'slow');
    });
    $('.qqzx').mouseleave(function(){
        $('.qqzx').animate({'bottom':'200px'},'slow');
    });
    //手机端
    $('.tiger').click(function () {
        $('#celan').toggle('slow');
    })*/
})
