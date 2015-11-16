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
		$('#regist').fadeIn();
	})
	$('.login').click(function(){
		$('#regist').fadeOut();			
		$('#login').fadeIn();
		window.clearInterval(InterValObj);
		 $(".identifyCode").removeAttr("disabled");//启用按钮
         $(".identifyCode").css('background',"#F4F4F4");
		 $(".identifyCode").val("点击获取验证码");
	})

	//找回密码
	$('.findPassword').click(function(){
		$('#login').fadeOut();	
		$('#findPassword').fadeIn();
	})

	//修改密码
	$('.revisePassword').click(function(){
		$('#findPassword').fadeOut();	
		$('#revisePassword').fadeIn();
	})

	//关闭弹出窗
	$('.dropBox').find('.closeBox').click(function(){
		$('.dropBox').fadeOut();	
		 window.clearInterval(InterValObj);
		 $(".identifyCode").removeAttr("disabled");//启用按钮
         $(".identifyCode").css('background',"#F4F4F4");
		 $(".identifyCode").val("点击获取验证码");
	})


	//tab切换代码
	$('.tab li').mouseover(function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings('li').removeClass('cur');
		$('.contentBox .tabList:eq('+ index +')').show().siblings().hide();
	})


	 // 发送验证码
		$(".identifyCode").click(function(){
		 	getcheckcode();
		})
        var InterValObj; //timer变量，控制时间
        var count = 60; //间隔函数，1秒执行
        var curCount;//当前剩余秒数

        function SetRemainTime() {
            if (curCount == 0) {                
                window.clearInterval(InterValObj);//停止计时器
                $(".identifyCode").removeAttr("disabled");//启用按钮
                $(".identifyCode").css('background',"#F4F4F4");
                $(".identifyCode").val("重新发送验证码");
            }
            else {
                curCount--;               
                $(".identifyCode").val(+ curCount + "秒后重新获取");                
            }
        }

        function getcheckcode(){           
            curCount = count;
            //设置button效果，开始计时
            $(".identifyCode").attr("disabled", "true");
            $(".identifyCode").val(+ curCount + "秒后重新获取");
            $(".identifyCode").css('background',"#d4d4d4");

            InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次 
        }       
		

})