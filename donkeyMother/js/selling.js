$(function () {
    time();
    setInterval(time,1000);
    function time(){
        let date1=new Date();
        let date2=new Date("2017-9-1");
        let time1=date1.getTime();
        let time2=date2.getTime();
        let time3=time2-time1;
        let day=Math.floor(time3/1000/60/60/24);
        let hour=Math.floor(time3/1000/60/60%24);
        let fen=Math.floor(time3/1000/60%60);
        let miao=Math.floor(time3/1000%60);
        let str=day+"天"+hour+"时"+fen+"分"+miao+"秒";
        $('.ziti').html(str);
    }

    $('.nav_1 ul li a').click(function () {
        $('.nav_1 ul li a').css({color:'#999',borderBottom:'2px solid #fff'});
        $(this).css({color:'#d30775',borderBottom:'2px solid #d30775'});
    })


})