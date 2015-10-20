(function ( $ ) {

	$.fn.theFantasyImageSlider = function(options) {
		
		// This is the easiest way to have default options.
		var settings = $.extend({
			// These are the defaults.
			slideViewTime: 3000
		}, options );
		
		var currentSlider = 1;
		
		var containerDiv = this;
		var fadeTime = 1000;
				
		containerDiv.find("img:first").css({"opacity":"1","display":"block"});
		containerDiv.parent().find("#dot1").css("background-color","#000000");
		
		function repeat(){
			old = currentSlider - 1;
				
			if(old < 0){
				old = 0;
			}
			
			maxLngth = containerDiv.find("img").length - 1;
			if(currentSlider > maxLngth){
				currentSlider = 0;
				old = maxLngth;
				$("#dot3").css("background-color","#FFFFFF");
			}
			
			containerDiv.find("img:eq(" + old + ")").animate({"opacity": 0}, fadeTime);
			
			containerDiv.find("img:eq(" + currentSlider + ")").css("display", "block");
			//alert(currentSlider);
			containerDiv.parent().find("#dot" + (currentSlider)).css("background-color","#FFFFFF");
			containerDiv.parent().find("#dot" + (currentSlider+1)).css("background-color","#000000");
			
			containerDiv.find("img:eq(" + currentSlider + ")").animate({"opacity": 1}, fadeTime);
		
			currentSlider++;
		}
		
		
		var myInterval = setInterval(repeat, settings.slideViewTime + fadeTime);

		$("#dot1").click(function(){
			currentSlider = 1;
			$("#dot1").css("background-color","#000000");
			$("#dot2").css("background-color","#FFFFFF");
			$("#dot3").css("background-color","#FFFFFF");
			$(".myHomeSlides").find("img:eq(" + 1 + ")").animate({"opacity": 0}, fadeTime);
			$(".myHomeSlides").find("img:eq(" + 2 + ")").animate({"opacity": 0}, fadeTime);
			$(".myHomeSlides").find("img:eq(" + 0 + ")").css("display", "block");
			$(".myHomeSlides").find("img:eq(" + 0 + ")").animate({"opacity": 1}, fadeTime);
			clearInterval(myInterval);
			myInterval = setInterval(repeat, settings.slideViewTime + fadeTime);
		});
		
		$("#dot2").click(function(){
			currentSlider = 2;
			$("#dot2").css("background-color","#000000");
			$("#dot1").css("background-color","#FFFFFF");
			$("#dot3").css("background-color","#FFFFFF");
			$(".myHomeSlides").find("img:eq(" + 0 + ")").animate({"opacity": 0}, fadeTime);
			$(".myHomeSlides").find("img:eq(" + 2 + ")").animate({"opacity": 0}, fadeTime);
			$(".myHomeSlides").find("img:eq(" + 1 + ")").css("display", "block");
			$(".myHomeSlides").find("img:eq(" + 1 + ")").animate({"opacity": 1}, fadeTime);
			clearInterval(myInterval);
			myInterval = setInterval(repeat, settings.slideViewTime + fadeTime);
		});
		
		$("#dot3").click(function(){
			currentSlider = 3;
			$("#dot3").css("background-color","#000000");
			$("#dot1").css("background-color","#FFFFFF");
			$("#dot2").css("background-color","#FFFFFF");
			$(".myHomeSlides").find("img:eq(" + 0 + ")").animate({"opacity": 0}, fadeTime);
			$(".myHomeSlides").find("img:eq(" + 1 + ")").animate({"opacity": 0}, fadeTime);
			$(".myHomeSlides").find("img:eq(" + 2 + ")").css("display", "block");
			$(".myHomeSlides").find("img:eq(" + 2 + ")").animate({"opacity": 1}, fadeTime);
			clearInterval(myInterval);
			myInterval = setInterval(repeat, settings.slideViewTime + fadeTime);
		});
		
	}
	
	
	
	
}( jQuery ));

