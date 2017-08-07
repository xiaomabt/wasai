/**
 * @author: zhangyh-k@glondon.com
 * @description:
 * @Date: 2017/8/1 20:17
 */
$(function () {
   //search
    $('.input_11').blur(function(){
        var sval = $('.input_11').val();
        if(sval != ""){
            $('.box1').attr('style','width:150px');
        }else{
            $('.box1').attr('style','width:37px');
            $('.input_11').removeAttr("autofocus");
        }
    });
    $('.box1_1').toggle(function () {
        $('.box1').attr('style','width:150px');
        $('.input_11').attr("autofocus",'autofocus');
    },function () {
        $('.box1').attr('style','width:37px');
        $('.input_11').removeAttr("autofocus");
    });
    /*$('#all').click(function () {
        $('.box1').css({width:'37px'});
    });*/
    //左上显隐
    $('.box2').click(function (e) {
        $('.beng').toggle();
        e.stopPropagation();
    });

    $(document).click(function(){
        $('.beng').slideUp();
    });
    //左边菜单
    $('.firsr_ul>li>a').toggle(function () {
        $(this).next().slideDown();
        $(this).next().next().css({transform:'rotate(90deg)'})
    },function () {
        $(this).next().slideUp();
        $(this).next().next().css({transform:'rotate(0deg)'})
    });
   //===================================//
    $('.menu').toggle(function () {
        stop(true,true);
        $('main section').animate({left:'-240px'},"fast");
        $('article').css({width:'0px'});
    },function () {
        stop(true,true);
        $('main section').animate({left:'0px'},"fast");
        $('article').css({width:'240px'});
    });


    //图片
    $('.uli').mouseenter(function () {
        stop();
        $(this).children().next().animate({top:'22%'},"fast");
    });
    $('.uli').mouseleave(function () {
        stop();
        $(this).children().next().animate({top:'100%'},"fast");
    });





});