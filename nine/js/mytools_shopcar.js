	$(function(){
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
			//var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	      	//  console.log(scrollTop)
	        $("body").animate({scrollTop: '0px'}, "slow");
		});
		//倒计时
		time();
		
		setInterval(time,1000);
		
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
		
		
		//添加至购物车
		$.ajax({
			url:"../html/php/getShoppingCart.php",
			async:true,
			type:"get",
			data:"vipName="+strStoreDate,
			success:function(date){
				let obj=eval(date);
				for(i=0;i<obj.length;i++){
					let goodsId=obj[i].goodsId;
					let goodsPrice=obj[i].goodsPrice;
					let goodsImg=obj[i].goodsImg;
					let goodsDesc=obj[i].goodsDesc;
					let goodsCount=obj[i].goodsCount;
					let str="<div class='car_4'><span class='car_4_1'><input class='inputer' value='"+goodsId+"' type='checkbox' /></span><dl><dt><img src='"+goodsImg+"' /></dt><dd>"+goodsDesc+"<br/>颜色:白色 尺码:M</dd></dl><span class='money'>￥<em>"+goodsPrice+"</em></span><ul><li class='monet l _one'>-</li><li class='monet l _two'>"+goodsCount+"</li><li class='monet l _three'>+</li></ul><span class='car_5'>--</span><span class='car_6'>￥<em>"+goodsPrice+"</em></span><span class='car_7'><a class='car_8' href='#'>加入最爱</a><a class='car_9' onclick='deleteGoods("+goodsId+")' href='#'>删除</a></span></div>";
					$('#car').append(str);
				}
					let str_1="购物车状态（"+obj.length+"/99）";
					$('.pp_1').append(str_1);
					jiajian();
					zong();
			}	
		});
		
			
	});
	function $q(id){
		return document.getElementById(id);
	}
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
	
	
	//加减商品
	function jiajian(){
		let count=$('._one');
		for(let i=0;i<count.length;i++){
			$('._one')[i].onclick=function(){
				let num=$(this).next('li').html();
					if(num==1){
						$(this).next('li').html(1);
					}else{
						$(this).next('li').html(num-1);
						let test=$(this).parent().prev().find('em').html();
						let test2=test*$(this).next().html();
						$(this).parent().next().next().find('em').html(test2);
						zong();
					}
			}
			
		}
		for(let i=0;i<count.length;i++){
			$('._three')[i].onclick=function(){
				let num=$(this).prev('li').html();
				let num1=parseInt(num)
					$(this).prev('li').html(num1+1);
					let test=$(this).parent().prev().find('em').html();
					let test2=test*$(this).prev().html();
					$(this).parent().next().next().find('em').html(test2);
					zong();
				}

			}
		
		}
	
	//删除商品
	function deleteGoods(goodsId){
		var strStoreDate = window.localStorage? localStorage.getItem("name"): Cookie.read("name");
			$.ajax({
				url:"../html/php/deleteGoods.php",
				async:true,
				type:"get",
				data:{
					vipName:strStoreDate,
					goodsId:goodsId
				},
				success:function(data){
					if(data=="1"){
						alert('删除成功');
					}
				}
			});
			location=location;
		}
	
	//总价钱
	function zong(){
		let zong=$('.car_6').find('em');
		let xx=0;
		for(let i=0;i<zong.length;i++){
			xx+=parseFloat(zong[i].innerHTML);
		}
		$('#zongjia').find('em').html(xx);
	}
	