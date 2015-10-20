
$('article').click(function(){
	// hide other articles details section
	var $detailsToHide = $(this).siblings().children('.details');
	$detailsToHide.slideUp(500);
	//show OR hide clicked articles details section
	var $detailsToShow = $(this).children('.details')
	$detailsToShow.slideToggle(500);
});



// $(window).scroll(function(e){
//   parallax();
// });

// function parallax(){
//   var scrolled = $(window).scrollTop();
//   $('header').css('margin-top',-(scrolled*1.5)+'px');
// }

// $('.parallax-window').parallax({imageSrc: 'assets/header.jpg'});
