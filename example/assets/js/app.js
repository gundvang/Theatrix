$('body').on('keydown', function(event) {
	Theatrix.checkKey(event);
});
$('[data-link]').on('click', function(event) {
	if ($(this).data('link') && $( '#'+$(this).data('link') ).length) {
		Theatrix.direction = 'link';
		Theatrix.from = Theatrix.active;
		Theatrix.active = $(this).data('link');
		Theatrix.change();
	}
});

Theatrix.setup({
//  	navigation: 'pagination',
});

Theatrix.init();

$('body').on('mousewheel', function(event) {
	console.log( event.deltaY );
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
	Theatrix.checkScroll(event);
});
