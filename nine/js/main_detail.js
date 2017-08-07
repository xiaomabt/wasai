require(['cookieTools','jquery-1.8.3.min'],function(cookieTools){
		//UL二维码的出现消失
		$('.wowsai').mousemove(function(){
			$('.ewm').css('display','block');
		})
		$('.wowsai').mouseout(function(){
			$('.ewm').css('display','none');
		})
		//FIX二维码的出现消失
		$('#weixinma').mousemove(function(){
			$('#weixin2').css('display','block');
		})
		$('#weixinma').mouseout(function(){
			$('#weixin2').css('display','none');
		})
		
		window.onscroll = function(){ 
			//顶部隐藏
			let scrolltop=document.body.scrollTop + document.documentElement.scrollTop;
			if(scrolltop<100){
				$('.fix')[0].style.display="none";
			}
			if(scrolltop>=100){
				$('.fix')[0].style.display="block";
			}
		}
		
		//二级菜单隐藏
		$('.dingzhiyuan')[0].onmousemove=function(){
			$('.dingzhi')[0].style.display="block";
		}
		$('.dingzhiyuan')[0].onmouseout=function(){
			$('.dingzhi')[0].style.display="none";
		}
		$('.dingzhi')[0].onmousemove=function(){
			$('.dingzhi')[0].style.display="block";
		}
		$('.dingzhi')[0].onmouseout=function(){
			$('.dingzhi')[0].style.display="none";
		}
		//input onfocus事件
		$('.search')[0].onfocus=function(){
			$('.search')[0].cssText="border:2px solid #00cbcc";
		}
		//慢慢回到顶部
		$("#top").click(function(){
	        $("body").animate({scrollTop: '0px'}, "slow");
		});
		
		
		
		//detail  input
		for(let i=0;i<$('input').length;i++){
			$('input')[i].onfocus=function(){
				$('input')[i].style.border='2px solid #00cbcc';
			}
			$('input')[i].onblur=function(){
				$('input')[i].style.border='2px solid #ccc';
			}
		}
		
		//动态detail
		$.ajax({
			url:"../html/php/getGoodsInfo.php",
			async:true,
			type:"get",
			data:"goodsId="+cookieTools.getCookieValue("name"),
			success:function(data){
				 var obj=data;
					let goodsId=obj.goodsId;
					let goodsPrice=obj.goodsPrice;
					let goodsImg=obj.goodsImg;
					let goodsDesc=obj.goodsDesc;
					let str="<div class='hat1' style='background: url("+goodsImg+") no-repeat;background-size: 420px  420px;'><span class='box11'></span></div><div class='box22'><span class='hat11' style='background: url("+goodsImg+") no-repeat;background-size:1260px 1260px;'></span></div>";
					$('.hat').append(str);
					poor3();
					let str1="<span class='price1'>价 &nbsp;&nbsp;格：</span><span class='price2'>￥"+goodsPrice+"</span>"
					$('.price').append(str1);
					let str2=goodsDesc;
					$('.detail_010').append(str2);
			},
			dataType:"json"
		});
		
		
		//侧边栏的显现隐藏
		$('#paihang_two').click(function(){
			$('.uncle').css('display','none');
			$('#paihang_two').css({'background':'#ededed',
								   'border-top':'2px solid #229ca0'
								});
			$('#paihang_one').css({'background':'#f5f5f1',
								   'border-top':'2px solid #f5f5f1'
								});
			})
			$('#paihang_one').click(function(){
				$('.uncle').css('display','block');
				$('#paihang_one').css({'background':'#ededed',
									   'border-top':'2px solid #229ca0'
									});
				$('#paihang_two').css({'background':'#f5f5f1',
									   'border-top':'2px solid #f5f5f1'
									});
		});
	//加减商品数
	$('.chimaa').click(function(){
		let num=$('.chima_01').html();
		if(num==1){
			$('.chima_01').html(1);
		}else{
			$('.chima_01').html(num-1);
		}
	})
	$('.chima_a').click(function(){
		let num=parseInt($('.chima_01').html());
		$('.chima_01').html(num+1);
	})
	//地址显现隐藏
	$('#beijing').click(function(){
		$('#beijing_1').css({'display':'block',
							 'height':'195px'
		})
		
	})
	$('#beijing_2').click(function(){
		$('#beijing_1').animate({'height':'0px'},'slow',function(){
			$('#beijing_1').css('display','none');
		});
	})
	$('#beijing_3').children().click(function(){
		$('#beijingg').html($(this).html());
	})
	var strStoreDate = window.localStorage? localStorage.getItem("name"): Cookie.read("name");
		
		if(strStoreDate==null){
			$('#loadi').css('display','none');
		}else{
			$('#load_ing').css('display','none');
			$('#loadin').html(strStoreDate);
		}
		$('#top_99').click(function(){
			var storage=window.localStorage;
	            storage.a=1;
	            storage.setItem("name",3);
	            storage.clear();
	            location=location ;
		})
	
		$('.btn').click(function(){
			$.ajax({
			url:"../html/php/addShoppingCart.php",
			async:true,
			type:"get",
			data:"goodsId="+cookieTools.getCookieValue("name")+"&vipName="+strStoreDate+" &goodsCount="+$('.chima_01').html(),
			success:function(num){
				if(num=="1"){
					console.log("恭喜添加成功！");
				}
			}	
		});
	});

//放大镜

	function poor3(){
		let tuWidth=420;
		let tuHeight=420;
		let yuanWidth=150;
		let yuanHeight=150;

		
		
		$(".hat1")[0].onmousemove=function(event){
			let e=event||window.event;
			let offsetleft=$(".hat1")[0].offsetLeft;
			let offsettop=$(".hat1")[0].offsetTop;
			let scrolltop=document.body.scrollTop||document.documentElement.scrollTop
			let top=e.clientY-offsettop-yuanHeight/2+scrolltop;
			let left=e.clientX-offsetleft-yuanWidth/2;
				if(top<0){
					top=0;
				}else if(top>tuHeight-yuanHeight){
					top=tuHeight-yuanHeight;
				}
				if(left<0){
					left=0;
				}else if(left>tuWidth-yuanWidth){
					left=tuWidth-yuanWidth;
				}
			$(".box11")[0].style.top=top+"px";
			$(".box11")[0].style.left=left+"px";
	
			$(".hat11")[0].style.top=-3*top+"px";
			$(".hat11")[0].style.left=-3*left+"px";
	
			$('.box22').css('display','block');
			$(".hat1")[0].onmouseout=function(){
				$('.box22').css('display','none');
			}
		}
		
}
	
//完结
	});