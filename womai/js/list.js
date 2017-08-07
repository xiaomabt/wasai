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
        if(scrolltop>109){
            $('.nav_2').css({position:'fixed',
                top:'0px',
                zIndex:'10',
                background:'#fff'});
        }else {
            $('.nav_2').css({position:'inherit',
                top:'0px',
                zIndex:'10'});
        }
        /*if(scrolltop<1000){
            $('#box9').css({position:'none'
               });
        }*/
    };

    //点击换页面
    $('.main_11').click(function () {
        location.href='../html/detail.html';
    });
    $('.main_14').click(function () {
        location.href='../html/shopcar.html';
    });
    $('.hello').click(function () {
        location.href='../html/shopcar.html';
    });

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

    //买
    $('.hello_1').click(function () {
        $(".hello_1").animate({left: '-100px'}, "slow");
        $(".hello_2").animate({left: '-4px'}, "slow");
    })
    $('.a_one').click(function () {
        $(".hello_1").animate({left: '20px'}, "slow");
        $(".hello_2").animate({left: '-210px'}, "slow");
    })

    $('.helloo').click(function () {
        $("body").animate({scrollTop: '0px'}, "slow");
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
