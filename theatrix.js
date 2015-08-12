/* 
 | ----------------------------------------
 | create object
 | ----------------------------------------
 */
var Theatrix = {
	version: '0.2',
	documentation: 'https://github.com/gundvang/theatrix',
	defaultTime: 1000,
	navigation: 'navigation',
	urlEnabled: true,
	parallaxEnabled: true,
	keyboardEnabled: true,
	scrollEnabled: true,
	swipeEnabled: true,
	reverseSwipe: false,
	fastClickEnabled: true,
	bodyClassEnabled: true,
	bodyDataEnabled: true,
	data: {
		direction: 'start',
		in: '',
		out: '',
	},
};

/* 
 | ----------------------------------------
 | setup
 | ----------------------------------------
 */
Theatrix.setup = function(e) { 
	if (typeof(e.navigation) != 'undefined') { Theatrix.navigation = e.navigation; }
	if (typeof(e.urlEnabled) != 'undefined') { Theatrix.urlEnabled = e.urlEnabled; }
	if (typeof(e.parallaxEnabled) != 'undefined') { Theatrix.parallaxEnabled = e.parallaxEnabled; }
	if (typeof(e.keyboardEnabled) != 'undefined') { Theatrix.keyboardEnabled = e.keyboardEnabled; }
	if (typeof(e.scrollEnabled) != 'undefined') { Theatrix.scrollEnabled = e.scrollEnabled; }
	if (typeof(e.swipeEnabled) != 'undefined') { Theatrix.swipeEnabled = e.swipeEnabled; }
	if (typeof(e.reverseSwipe) != 'undefined') { Theatrix.reverseSwipe = e.reverseSwipe; }
	if (typeof(e.fastClickEnabled) != 'undefined') { Theatrix.fastClickEnabled = e.fastClickEnabled; }
	if (typeof(e.bodyClassEnabled) != 'undefined') { Theatrix.bodyClassEnabled = e.bodyClassEnabled; }
	if (typeof(e.bodyDataEnabled) != 'undefined') { Theatrix.bodyDataEnabled = e.bodyDataEnabled; }
}

/* 
 | ----------------------------------------
 | initialize
 | ----------------------------------------
 */
Theatrix.init = function() { 
	if (Theatrix.fastClickEnabled) { FastClick.attach(document.body); }

	Theatrix.data.direction = 'start';
	Theatrix.data.out = '';
	
	$('body').removeData('in out direction');
	$('#'+Theatrix.navigation+' li').removeClass('active');
	$('#'+Theatrix.navigation+' li:first-of-type').addClass('active');
	Theatrix.data.in = $('.active').attr('id');
	Theatrix.change();
}

/* 
 | ----------------------------------------
 | change body tags
 | ----------------------------------------
 */
Theatrix.change = function(direction, active, from) {
	if (active) { Theatrix.data.in = active; }
	if (from) { Theatrix.data.out = from; }
	if (direction) { Theatrix.data.direction = direction; }
	
	$('#'+Theatrix.navigation+' li').removeClass('active');
	$('#'+Theatrix.data.in).addClass('active');

	if (Theatrix.bodyClassEnabled) {
		$('body').removeClass();
		if (Theatrix.data.out) {
			$('body').addClass(Theatrix.data.out+' '+Theatrix.data.out+'-out');
		}
		if (Theatrix.data.in) {
			$('body').addClass(Theatrix.data.in+' '+Theatrix.data.in+'-in');
		}
		$('body').addClass(Theatrix.data.direction);
	}
	if (Theatrix.bodyDataEnabled) {
		if ( Theatrix.data.direction != 'start' ) {
			$('body').attr('data-out', Theatrix.data.out);
		}
		$('body').attr('data-in', Theatrix.data.in);
		$('body').attr('data-direction', Theatrix.data.direction);
	}
}

/* 
 | ----------------------------------------
 | check for keypress interaction
 | ----------------------------------------
 */
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


/* 
 | ----------------------------------------
 | check for scroll interaction
 | ----------------------------------------
 */
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