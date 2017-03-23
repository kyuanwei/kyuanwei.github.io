
(function(){
	var play ;
	var rotateSwitch=function(){
		play = setInterval(function(){
			var imgs=$(".imgBanner .imgBox a");
			var tot = imgs.length - 1 ;
			imgs.eq(tot).stop().fadeOut(250,function(){
				var idx=$(this).prev().attr("idx");
				$(".imgBanner .pagingBox a").removeClass("active");
				$('#'+idx).addClass("active");	
				$(this).show().prependTo(".imgBox");
			});
		},2500);
	};
	rotateSwitch();

	$(".imgBanner .pagingBox a").hover(function(){ //鼠标移入标签块停止轮播
		clearInterval(play);
		var idxs = $(this).attr("id");
		var tot =  $(".imgBanner .imgBox a").length ;

		for(i=0; i<tot; i++){
			var imgobj = $(".imgBanner .imgBox a"); // 每次循环得到的imgobj数组都不一样,该语句必须写在此处，
			var idxR = imgobj.eq(tot-1).attr("idx");
			if(idxs == idxR){
				$(".imgBanner .pagingBox a").removeClass("active");
				$('#'+idxs).addClass("active");	
				$(".imgBanner .imgBox a[idx="+idxs+"]").fadeIn(250);  //注意字符串的链接方式
			}else{
				imgobj.eq(tot-1).show().prependTo(".imgBox");
			}
		}
	});

	$(".imgBanner").hover(function(){
		clearInterval(play);
	},function(){
		rotateSwitch();
	});

})()











