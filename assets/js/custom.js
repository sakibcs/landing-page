$(document).ready(function(){
	$("#homeSlider").slick({
    //infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,		//how many items will move
  	speed: 2000,			//how quick the slide moves
		//autoplay: true,
		autoplaySpeed: 4000,		//how long the slide stays stable
		draggable: false,
		//pauseOnFocus: false,	//default:true -slider pauses when click
		pauseOnHover: false,
		arrows: false,			//arrows show or not, if true then it takes some space
		fade: true,
  	cssEase: 'linear'
		//appendArrows:
		//prevArrow: '<i class="fa fa"></i>'
		//nextArrow: '<i class="fa fa"></i>'
	});
	$("#counterSlider").slick({
    infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,		//how many items will move
  	speed: 500,			//how quick the slide moves
		autoplay: true,
		autoplaySpeed: 5000,		//how long the slide stays stable
		draggable: false,
		//pauseOnFocus: false,	//default:true -slider pauses when click
		pauseOnHover: true,
		//arrows: false,			//arrows show or not, if true then it takes some space
		//prevArrow: "<i class='fas fa-angle-left'></i>",
		//nextArrow: "<i class='fas fa-angle-right'></i>",
	});
})
