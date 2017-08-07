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
				$('#topp').css("display","none")
			}
			if(scrolltop>=100){
				$('.fix')[0].style.display="block";
				$('#topp').css("display","block")
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
	        $("body").animate({scrollTop: '-0px'}, "slow");
		});
		//QQ
		$('.qqzx').mouseenter(function(){
			$('.qqzx').animate({'bottom':'220px'},'slow');
		});
		$('.qqzx').mouseleave(function(){
			$('.qqzx').animate({'bottom':'200px'},'slow');
		});
		
		//list
		$.ajax({
			url:"../html/php/getGoodsList.php",
			async:true,
			type:"get",
			success:function(data){
			var obj=eval(data);
				for(i=0;i<24;i++){
					let goodsId=obj[i].goodsId;
					let goodsPrice=obj[i].goodsPrice;
					let goodsImg=obj[i].goodsImg;
					let goodsDesc=obj[i].goodsDesc;
					let str="<div class='l'><a href='../html/detail.html'><img class='cook' src='"+goodsImg+"' name='"+goodsId+"' /><span>收藏到橱窗</span></a><a href='detail.html'>"+goodsDesc+"</a><div class='outer'>￥"+goodsPrice+"</div></div>";
					$('#list_10').append(str);
				}
			}	
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
		//记录GoodsId
		$("#list_10").on("click",'.cook',function(){
			var nameer=$(this).attr("name");
			console.log(nameer)
			cookieTools.addCookie("name",nameer,7,"/");
		})
		
	});	