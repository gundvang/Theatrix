// create object
var Theatrix = {
	version: '0.1',
	creator: 'Michael Gundvang',
	documentation: 'http://github.com/theatrix',
	navigation: 'test',
	direction: 'start',
	navigation: 'pagination',
	fastClickEnabled: true,
};

// setup
Theatrix.setup = function(e) { 
	if (e.navigation) {
		Theatrix.navigation = e.navigation;
	}
}

// initialize
Theatrix.init = function() { 
	if (Theatrix.fastClickEnabled){ FastClick.attach(document.body); }
	
	$('#'+Theatrix.navigation).children('li:first-of-type').addClass('active');
	Theatrix.active = $('.active').attr('id');
	Theatrix.change();
}

// change body tags
Theatrix.change = function() { 
	if ( Theatrix.direction != 'start' ) {
		$('#'+Theatrix.navigation+' li').removeClass('active');
		$('body').attr('data-from', Theatrix.from);
	}	
	$('#'+Theatrix.active).addClass('active');
	$('body').removeClass();
	$('body').addClass( Theatrix.from+' '+Theatrix.active+' '+Theatrix.direction);
	$('body').attr('data-active', Theatrix.active);
	$('body').attr('data-direction', Theatrix.direction);
}

// check for keypress interaction
Theatrix.checkKey = function(e) {
	Theatrix.direction = '';
	
	if (e.keyCode == 38 && $('.active').data('up') && $( '#'+$('.active').data('up') ).length) {
		Theatrix.direction = 'up';
	} else if (e.keyCode == 39 && $('.active').data('right') && $( '#'+$('.active').data('right') ).length) {
		Theatrix.direction = 'right';
	} else if (e.keyCode == 40 && $('.active').data('down') && $( '#'+$('.active').data('down') ).length) {
		Theatrix.direction = 'down';
	} else if (e.keyCode == 37 && $('.active').data('left') && $( '#'+$('.active').data('left') ).length) {
		Theatrix.direction = 'left';
	} else if (e.keyCode == 27 && $('.active').data('esc') && $( '#'+$('.active').data('esc') ).length) {
		Theatrix.direction = 'esc';
	} else if (e.keyCode == 13 && $('.active').data('enter') && $( '#'+$('.active').data('enter') ).length) {
		Theatrix.direction = 'enter';
	}
	
	if (Theatrix.direction) {
		Theatrix.from = Theatrix.active;
		Theatrix.active = $('.active').data( Theatrix.direction );
		Theatrix.change();
	}
}

// check for scroll interaction
Theatrix.checkScroll = function(e) {
	Theatrix.direction = '';
	
	if (event.deltaY > 0 && $('.active').data('up') && $( '#'+$('.active').data('up') ).length) {
		Theatrix.direction = 'up';
	} else if (event.deltaY < 0 && $('.active').data('right') && $( '#'+$('.active').data('right') ).length) {
		Theatrix.direction = 'down';
	}
	
	if (Theatrix.direction) {
		Theatrix.from = Theatrix.active;
		Theatrix.active = $('.active').data( Theatrix.direction );
		Theatrix.change();
	}
}