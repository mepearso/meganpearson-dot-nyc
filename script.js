
$('article').click(function(){
	// hide other articles details section
	var detailsToHide = $(this).siblings().children('.details');
	detailsToHide.slideUp(500);
	//show clicked articles details section
	$(this).children('.details').slideDown(500);
});

// $(window).scroll(function(e){
//   parallax();
// });

// function parallax(){
//   var scrolled = $(window).scrollTop();
//   $('header').css('margin-top',-(scrolled*1.5)+'px');
// }