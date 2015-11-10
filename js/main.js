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
})