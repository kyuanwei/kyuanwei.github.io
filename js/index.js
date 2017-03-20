

$(function(){

	$(".header").ready(function(){
		$(".introRightArtic").show();
		$(".introRightArtic").animate({
			'left': '40px',
		},1000);
		$(".introRightArtic").animate({
			'left': '90px',
		},200);


		$(".introRight img").show();
		$(".introRight img").animate({
			'left': 30,
			"bottom": "20px"
		},3000,function(){
			var objSpan = $(".introMiddle span");
			var i = 0;
			$(".introMiddle .startk").css({"display":"block"})
			var spanShow = setInterval(function(){
				if(i>=4){
					$('.frontEnd').fadeOut(1000);
				}

				if(i>=9){
					// $('.frontEnd').css({'display':'none'})
					$(".gradient").css({"background": "radial-gradient(ellipse,#ccc 3%,#ccc 20%,#ddd 45%,#efefef 70%)"})
					// $(".introMiddle .startk").css({"visibility":"hidden"});
					$(".introMiddle .startk").html('前端大坑');
					// $(".introMiddle .startk").fadeOut(1000);
				}else{
					console.log(i);
					// objSpan.eq(i).show() // 此处用show会影响span的样式，(show尽量不用)
					// objSpan.eq(i).fadeIn(200,0.9); //此处fadeIn/fadeOut对span无效
					objSpan.eq(i).css({
						"display": "inline-block",
						// opacity: 0.5
						}); //animate()对display无效

					i++;
				}
			},1000)
		});
	})

//技能水平处鼠标移入移出效果	
	$(".skillItem").hover(function(){
		$(this).find(".skillContent").stop().fadeIn(1500)
		$(this).find(".skillLevel").stop().animate({"bottom":"-100%"},1000)
	},function(){
		$(this).find(".skillContent").stop().fadeOut(700)
		$(this).find(".skillLevel").stop().animate({"bottom":"0"},1000)
	})

// 项目经历处的鼠标移入移出效果
	$(".projectContent .imgItem").hide()
	$(".projectContent .imgItem").eq(0).show()

	$(".projectOption ul li").mouseenter(function(){
		$(".projectOption ul li").removeClass("active");
		$(this).addClass("active");

		var optionLeft = $(this).position().left;
		$(".projectSlide").stop().animate({
			"left": optionLeft + "px"
		},300)

		var idx = $(this).index(".projectOption ul li")
		$(".projectContent .imgItem").hide()
		$(".projectContent .imgItem").eq(idx).show()
	})






})






