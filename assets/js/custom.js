$(document).ready(function(){
	$("#homeSlider").slick({
    infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	speed: 1500,
		autoplay: true,
		autoplaySpeed: 4000,
		draggable: false,
		pauseOnHover: false,
		arrows: true,
		prevArrow: '<i class="arrows fas fa-caret-left fa-2x"></i>',
		nextArrow: '<i class="arrows fas fa-caret-right fa-2x"></i>',
		fade: true,
  	cssEase: 'linear'
	});
	$("#counterSlider").slick({
    infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	speed: 500,
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: false,
		pauseOnHover: true,
		responsive: [
	    	    {
	      breakpoint: 575,
	      settings: {
	        arrows: false,
					dots: true
	      }
	    }
	  ]
	});
	$("#newsticker").newsTicker({
		row_height: 19,
    max_rows: 1,
	});
	$("#tabs").tabs();
	$(".js-modal-btn").modalVideo({
		youtube:{
				controls:1,
				autoplay: 1,
			}
	});
})
