/* ==============================================
   Countdown
=============================================== */
	// Create a countdown instance. Change the launchDay according to your needs.
	// The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
	// Thus the launchDay below denotes 7 May, 2014.

var newYear = new Date();
newYear = new Date(2016, 6-1, 24);
$('.defaultCountdown').countdown({until: newYear, format: 'DHMS'});




/* ==============================================
	For Tooltip.
=====================================================================*/

$(function(){
     $('[data-rel="tooltip"]').tooltip();
});

/* ==============================================
	For WOW Animation.
=====================================================================*/
$(document).ready( function() {
 new WOW().init();

/* ==============================================
	For smooth anchor scrolling
=====================================================================*/
 $('a[href^="#"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $(target);

     $('html, body').stop().animate({
         'scrollTop': $target.offset().top
     }, 750, 'swing');
 });

/* ==============================================
	For Fixed Menu.
=====================================================================*/
var s = $("#stick_menu");
    var pos = s.position();
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top) {
            s.addClass("stick_menu");
        } else {
            s.removeClass("stick_menu");
        }
    });

/* ==============================================
	Remove Full Screen Image in Mobile view.
=====================================================================*/
if ($(window).width() < 514) {
     $('#head').removeClass('intro');
	  $('#head').css('height', 'auto')
} else {
	$('#head').addClass('intro');

}

$(window).resize(function() {
    if ($(window).width() < 1050) {
     $('#head').removeClass('intro');
	 $('#head').css('height', 'auto')
    } else {
	$('#head').addClass('intro');
    }
}).resize();


/* ==============================================
	For Full Screen Header Part.
=====================================================================*/

		"use strict";

		var winHeight = $(window).height();
		var winWidth = $(window).width();

		if (winWidth > 979) {
			$('.intro').css({
				'height': winHeight,
			});
			} else{
			$('.intro').css({
				'height': '536px'
			});
		};

		$(window).resize(function(){
			var winHeight = $(window).height();
			var winWidth = $(window).width();

			if (winWidth > 979) {
				$('.intro').css({
					'height': winHeight
				});
				} else{
				$('.intro').css({
					'height': '536px'
				});
			};
		});
	});
