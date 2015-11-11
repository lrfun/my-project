$(document).ready(function () {

	// 侧边导航
	$(".slide").click(function(){			
		$(this).parent(".navBar").find(".myNav").toggle(500);
	})
	
	// 回到顶部	
	$(window).scroll(function () {
		if($(document).scrollTop() > 400){
			$(".backTop").fadeIn();
		}else{
			$(".backTop").fadeOut();
		}
	});
	$(".backTop").click(function(){$("html,body").animate({scrollTop:"0px"},500);});

	// 登陆和注册弹出窗
	$('.dropBox').hide();
	$('.regist').click(function(){
		$('#login').fadeOut();			
		$('#regist').fadeIn(500);
	})
	$('.login').click(function(){
		$('#regist').fadeOut();			
		$('#login').fadeIn(500);
	})

	//找回密码
	$('.findPassword').click(function(){
		$('#login').fadeOut();	
		$('#findPassword').fadeIn(500);
	})

	//修改密码
	$('.revisePassword').click(function(){
		$('#findPassword').fadeOut();	
		$('#revisePassword').fadeIn(500);
	})

	//关闭弹出穿
	$('.dropBox').find('.closeBox').click(function(){
		$('.dropBox').fadeOut(500);
	})


	//tab切换代码
	$('.tab li').mouseover(function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings('li').removeClass('cur');
		$('.contentBox .tabList:eq('+ index +')').show().siblings().hide();
	})

})