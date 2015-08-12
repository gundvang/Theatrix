$('body').on('keydown', function(event) {
	Theatrix.checkKey(event);
});
$('[data-link]').on('click', function(event) {
	if ($(this).data('link') && $( '#'+$(this).data('link') ).length) {
		Theatrix.data.direction = 'link';
		Theatrix.data.out = Theatrix.data.in;
		Theatrix.data.in = $(this).data('link');
		Theatrix.change();
	}
});

Theatrix.setup({
  	navigation: 'navigation',
});

Theatrix.init();

$('body').on('mousewheel', function(event) {
	console.log( event.deltaY );
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
	Theatrix.checkScroll(event);
});
