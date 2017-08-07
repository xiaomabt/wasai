/**
 * Created by Administrator on 2017/7/19.
 */
$(function () {
    //图片-phone
    $('.inner').mouseenter(function () {
        $(this).css({ backgroundPosition:'bottom',transition:'all 5s'});
    })
    $('.inner').mouseleave(function () {
        $(this).css({ backgroundPosition:'top',transition:'all 8s'});
    })
    $('.tack1').click(function () {
        $('.tack1 img').attr({src:'../img/q1.png'});
        $('.tack2 img').attr({src:'../img/q2.png'});
        $('.tack3 img').attr({src:'../img/23.png'});
        $('#one').animate({width:'400px'},'slow');
        $('.inner').css({background:'url("../img/112.png") no-repeat', backgroundSize: 'cover' })
    })
    //图片-ipd
    $('.tack2').click(function () {
        $('.tack1 img').attr({src:'../img/21.png'});
        $('.tack2 img').attr({src:'../img/22.png'});
        $('.tack3 img').attr({src:'../img/23.png'});
        $('#one').animate({width:'814px'},'slow');
        $('.inner').css({background:'url("../img/111.png") no-repeat', backgroundSize: 'cover' })
    })
    //图片-pc
    $('.tack3').click(function () {
        $('.tack1 img').attr({src:'../img/21.png'});
        $('.tack2 img').attr({src:'../img/q2.png'});
        $('.tack3 img').attr({src:'../img/q3.png'});
        $('#one').animate({width:'98%'},'slow');
        $('.inner').css({background:'url("../img/113.png") no-repeat', backgroundSize: 'cover' })
    })
})
