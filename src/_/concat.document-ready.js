$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();r.indexOf("msie")!=-1&&(e="msie"),r.indexOf("trident")!=-1&&(e="msie"),r.indexOf("konqueror")!=-1&&(e="konqueror"),r.indexOf("firefox")!=-1&&(e="firefox"),r.indexOf("safari")!=-1&&(e="safari"),r.indexOf("chrome")!=-1&&(e="chrome"),r.indexOf("chromium")!=-1&&(e="chromium"),r.indexOf("opera")!=-1&&(e="opera"),r.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var t=$(this),a=$(t.attr("href")).eq(0),o=parseInt(t.attr("data-scrollto-diff"))||0,r=parseInt(t.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:a.offset().top+o},r),$(".navbar__nav .navbar__nav-item").removeClass("is--active"),t.parent().addClass("is--active")}),$(document.body).on("click",".navbar__collapse.is--open .navbar__nav-link.scrollto",{},function(e){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(e.preventDefault(),$(".navbar__hamburger-btn").trigger("click"))});
$(document.body).on("appear",".azbn_video",function(e,o){$(this).get(0).play()}),$(document.body).on("disappear",".azbn_video",function(e,o){$(this).get(0).pause()}),$(".azbn_video").appear({force_process:!0});
$("img").addClass("img-responsive");
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});
"use strict";$(function(){var s=$('[data-slider-slick="slick-header"]'),e=$('[data-slider-slick="slick-reviews"]'),i="",o='<button type="button" class="slick-prev  is--prev"><span class="slick-btn-icon"><svg class="icon-svg icon-prev" role="img"><use xlink:href="'+i+'/img/svg/sprite.svg#icon-prev"></use></svg></span><span>Prev</span></button>',l='<button type="button" class="slick-next  is--next"><span>Next</span><span class="slick-btn-icon"><svg class="icon-svg icon-next" role="img"><use xlink:href="'+i+'/img/svg/sprite.svg#icon-next"></use></svg></span></button>';s.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,dots:!1,autoplay:!0,autoplaySpeed:2e3,prevArrow:o,nextArrow:l,fade:!0}),e.slick({slidesToShow:3,slidesToScroll:3,arrows:!0,dots:!0,infinite:!0,prevArrow:o,nextArrow:l,responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1400,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:1025,settings:{arrows:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1}}]})});
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');