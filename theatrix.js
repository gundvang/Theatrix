// create object
var Theatrix = {
	version: '0.2',
	documentation: 'http://github.com/gundvang/theatrix',
	defaultTime: 1000,
	navigation: 'navigation',
	urlEnabled: true,
	parallaxEnabled: true,
	keyboardEnabled: true,
	scrollEnabled: true,
	swipeEnabled: true,
	reverseSwipe: false,
	fastClickEnabled: true,
	data: {
		direction: 'start',
		in: '',
		out: '',
	},
};

// setup
Theatrix.setup = function(e) { 
	if (e.navigation) { Theatrix.navigation = e.navigation; }
	if (e.urlEnabled) { Theatrix.urlEnabled = e.urlEnabled; }
	if (e.parallaxEnabled) { Theatrix.parallaxEnabled = e.parallaxEnabled; }
	if (e.keyboardEnabled) { Theatrix.keyboardEnabled = e.keyboardEnabled; }
	if (e.scrollEnabled) { Theatrix.scrollEnabled = e.scrollEnabled; }
	if (e.swipeEnabled) { Theatrix.swipeEnabled = e.swipeEnabled; }
	if (e.reverseSwipe) { Theatrix.reverseSwipe = e.reverseSwipe; }
	if (e.fastClickEnabled) { Theatrix.fastClickEnabled = e.fastClickEnabled; }
}

// initialize
Theatrix.init = function() { 
	Theatrix.data.direction = 'start';

	if (Theatrix.fastClickEnabled) { FastClick.attach(document.body); }
	
	$('#'+Theatrix.navigation).children('li:first-of-type').addClass('active');
	Theatrix.data.in = $('.active').attr('id');
	Theatrix.change();
}

// change body tags
Theatrix.change = function(active, from, direction) { 
	if ( Theatrix.data.direction != 'start' ) {
		$('#'+Theatrix.navigation+' li').removeClass('active');
		$('body').attr('data-out', Theatrix.data.out);
	}	
	$('#'+Theatrix.data.in).addClass('active');
	$('body').removeClass();
	if (Theatrix.data.out) {
		$('body').addClass(Theatrix.data.out+' '+Theatrix.data.out+'-out');
	}
	if (Theatrix.data.in) {
		$('body').addClass(Theatrix.data.in+' '+Theatrix.data.in+'-in');
	}
	$('body').addClass(Theatrix.data.direction);
	$('body').attr('data-in', Theatrix.data.in);
	$('body').attr('data-direction', Theatrix.data.direction);
}

// check for keypress interaction
Theatrix.checkKey = function(e) {
	Theatrix.data.direction = '';
	
	if (e.keyCode == 38 && $('.active').data('up') && $( '#'+$('.active').data('up') ).length) {
		Theatrix.data.direction = 'up';
	} else if (e.keyCode == 39 && $('.active').data('right') && $( '#'+$('.active').data('right') ).length) {
		Theatrix.data.direction = 'right';
	} else if (e.keyCode == 40 && $('.active').data('down') && $( '#'+$('.active').data('down') ).length) {
		Theatrix.data.direction = 'down';
	} else if (e.keyCode == 37 && $('.active').data('left') && $( '#'+$('.active').data('left') ).length) {
		Theatrix.data.direction = 'left';
	} else if (e.keyCode == 27 && $('.active').data('esc') && $( '#'+$('.active').data('esc') ).length) {
		Theatrix.data.direction = 'esc';
	} else if (e.keyCode == 13 && $('.active').data('enter') && $( '#'+$('.active').data('enter') ).length) {
		Theatrix.data.direction = 'enter';
	}
	
	if (Theatrix.data.direction) {
		Theatrix.data.out = Theatrix.data.in;
		Theatrix.data.in = $('.active').data( Theatrix.data.direction );
		Theatrix.change();
	}
}

// check for scroll interaction
Theatrix.checkScroll = function(e) {
	Theatrix.data.direction = '';
	
	if (event.deltaY > 0 && $('.active').data('up') && $( '#'+$('.active').data('up') ).length) {
		Theatrix.data.direction = 'up';
	} else if (event.deltaY < 0 && $('.active').data('right') && $( '#'+$('.active').data('right') ).length) {
		Theatrix.data.direction = 'down';
	}
	
	if (Theatrix.data.direction) {
		Theatrix.data.out = Theatrix.data.in;
		Theatrix.data.in = $('.active').data( Theatrix.data.direction );
		Theatrix.change();
	}
}