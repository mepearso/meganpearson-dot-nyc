
$('article').click(function(){
	// hide other articles details section
	var detailsToHide = $(this).siblings().children('.details');
	detailsToHide.slideUp(500);
	//show clicked articles details section
	$(this).children('.details').slideDown(500);
});

