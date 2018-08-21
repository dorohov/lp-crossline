'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');	
	var reviews = $('[data-slider-slick="slick-reviews"]');	
	//var CMS__TPL_PATH = '/local/templates/azbn7theme';  
	//var CMS__TPL_PATH = '/esbvolga';  
	var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="slick-prev  is--prev"><span class="slick-btn-icon"><svg class="icon-svg icon-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-prev"></use></svg></span><span>Prev</span></button>';
	var nextArrow = '<button type="button" class="slick-next  is--next"><span>Next</span><span class="slick-btn-icon"><svg class="icon-svg icon-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-next"></use></svg></span></button>';	
	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: false,
		//infinite: true, 
		autoplay: true,
  		autoplaySpeed: 2000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	}); 
	reviews.slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 1400,
				settings: {
					//dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
}); 