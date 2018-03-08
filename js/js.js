$(function(){
	$("#top_title ul li").click(function(){
		$("#top_title ul li").removeClass('active');
		$(this).addClass("active");
	});
	var i=3;
	var Himg=setInterval(function(){
		if (i==1) {
			var id='#Himg'+i;
			$(id).fadeOut(function(){
				i=3;
				id="#Himg"+i;
				$(id).fadeIn();
			});
		}else{
		var id='#Himg'+i;
		$(id).fadeOut(function(){
			i--;
			id="#Himg"+i;
			$(id).fadeIn();
			});
		}
	},3000);
});
$(window).scroll(function(){
	if ($(window).scrollTop()>$("#home").offset().top&&$(window).scrollTop()<$("#services").offset().top) {
		$("#top_title ul li").removeClass('active');
		$("#nav1").addClass("active");
	}
	if ($(window).scrollTop()>$("#services").offset().top&&$(window).scrollTop()<$("#project").offset().top) {
		$("#top_title ul li").removeClass('active');
		$("#nav2").addClass("active");
	}
	if ($(window).scrollTop()>$("#project").offset().top&&$(window).scrollTop()<$("#team").offset().top) {
		$("#top_title ul li").removeClass('active');
		$("#nav3").addClass("active");
	}
	if ($(window).scrollTop()>$("#team").offset().top&&$(window).scrollTop()<$("#contact").offset().top) {
		$("#top_title ul li").removeClass('active');
		$("#nav4").addClass("active");
	}
	var scrollTop = $(this).scrollTop();
　　var scrollHeight = $(document).height();
　　var windowHeight = $(this).height();
　　if(scrollTop + windowHeight == scrollHeight){
		$("#top_title ul li").removeClass('active');
		$("#nav5").addClass("active");
　　}
$(".lb-number").text("");
})
