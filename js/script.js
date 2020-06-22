$(function(){
	$("#gnb li a").mouseenter(function(){
		$("#gnb li a").next().stop().slideDown(500);
		$("#back").stop().slideDown(500);
	});
	$("#gnb li a").mouseleave(function(){
		$("#gnb li a").next().stop().slideUp(500);
		$("#back").stop().slideUp(500);
	
	/*button 1*/	
	});
	$("#section1 a:nth-of-type(2), .box, .circle, #section1 img:nth-of-type(3)").mouseenter(function(){
		$("#section1 a:nth-of-type(2)").stop().animate({letterSpacing:"5px"});
	});
	$("#section1 a:nth-of-type(2), .box, .circle, #section1 img:nth-of-type(3)").mouseleave(function(){
		$("#section1 a:nth-of-type(2)").stop().animate({letterSpacing:"2px"});
	});	
	
	$("#section1 a:nth-of-type(2), .box, .circle, #section1 img:nth-of-type(3)").mouseenter(function(){
		$(".circle").stop().animate({left:"1345px"})	
	});
	$("#section1 a:nth-of-type(2), .box, .circle, #section1 img:nth-of-type(3)").mouseleave(function(){
		$(".circle").stop().animate({left:"1280px"})	
	});
	
	/*button 2*/	
	$("#section2 a:nth-of-type(2), .box2, .circle2, #section2 img:nth-of-type(6)").mouseenter(function(){
		$("#section2 a:nth-of-type(2)").stop().animate({letterSpacing:"5px"});
	});
	$("#section2 a:nth-of-type(2), .box2, .circle2, #section2 img:nth-of-type(6)").mouseleave(function(){
		$("#section2 a:nth-of-type(2)").stop().animate({letterSpacing:"2px"});
	});	
	
	$("#section2 a:nth-of-type(2), .box2, .circle2, #section2 img:nth-of-type(6)").mouseenter(function(){
		$(".circle2").stop().animate({left:"655px"})	
	});
	$("#section2 a:nth-of-type(2), .box2, .circle2, #section2 img:nth-of-type(6)").mouseleave(function(){
		$(".circle2").stop().animate({left:"590px"})	
	});
	
	/*button 3*/
	$(".detail3, .box3, .circle3, .arrow2").mouseenter(function(){
		$(".detail3").stop().animate({letterSpacing:"5px"});
	});
	$(".detail3, .box3, .circle3, .arrow2").mouseleave(function(){
		$(".detail3").stop().animate({letterSpacing:"2px"});
	});	
	
	$(".detail3, .box3, .circle3, .arrow2").mouseenter(function(){
		$(".circle3").stop().animate({left:"905px"})	
	});
	$(".detail3, .box3, .circle3, .arrow2").mouseleave(function(){
		$(".circle3").stop().animate({left:"835px"})	
	});
	
	/*이미지 fadeIn, fadeOut*/
	setInterval(function(){
	$("#section3 li:eq(2)").fadeOut(2000,function(){
		$("#section3 li:eq(2)").insertBefore("#section3 li:eq(0)");
		$("#section3 li:eq(0)").fadeIn();
		});
		},3000);
			
	/*section1 효과	
	setInterval(function(){
		$(window).scroll(function(){
		var aa=$(this).scrollTop();
		});
	});
	*/	
	
	/*section1 효과	*/
	$("#section1").mouseenter(function(){
	$("#section1 p:nth-of-type(1)").fadeIn(500);
	$(".box, .circle, #section1 a:nth-of-type(2), #section1 img:nth-of-type(3)").delay(300).fadeIn(500);
	});		
	
	/*section2 효과	*/
	$("#section2").mouseenter(function(){
	$("#section2 img:nth-of-type(3)").fadeIn(500);
	$("#section2 img:nth-of-type(4)").delay(300).fadeIn(500);
	$("#section2 img:nth-of-type(5)").delay(500).fadeIn(500);
	$(".right").delay(1000).fadeIn(500);
	});		















		
			
});
