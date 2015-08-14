/* 
 | ------------------------------------------------------------
 | Create Theatrix object
 | ------------------------------------------------------------
 | This variable is the Theatrix object. Which is 
 | used for setting the default values of the 
 | settings, and attaching function.
 | 
 */
var Theatrix = {
	info: {
		version: '0.3',
		documentation: 'https://github.com/gundvang/theatrix',
	},
	scroll: {
		lock: 50,
	},
	data: {
		direction: '',
		in: '',
		out: '',
	},
	settings: {
		defaultLock: 200,
		navigation: 'navigation',
		hashEnabled: true,
		// parallaxEnabled: true,
		clickEnabled: true,
		keyboardEnabled: true,
		scrollEnabled: true,
		swipeEnabled: true,
		// reverseSwipe: false,
		fastClickEnabled: true,
		bodyClassEnabled: true,
		bodyDataEnabled: true,
		// scrollHorizontal: false,
	}
};

/* 
 | ------------------------------------------------------------
 | Setup Theatrix
 | ------------------------------------------------------------
 | This function is used to overwrite the default 
 | values of the Theatrix object. If any are 
 | ammitted to the setup function.
 |
 */
Theatrix.setup = function(e) { 
	if (typeof(e.navigation) != 'undefined') { Theatrix.settings.navigation = e.navigation; }
	if (typeof(e.hashEnabled) != 'undefined') { Theatrix.settings.hashEnabled = e.hashEnabled; }
	if (typeof(e.parallaxEnabled) != 'undefined') { Theatrix.settings.parallaxEnabled = e.parallaxEnabled; }
	if (typeof(e.keyboardEnabled) != 'undefined') { Theatrix.settings.keyboardEnabled = e.keyboardEnabled; }
	if (typeof(e.scrollEnabled) != 'undefined') { Theatrix.settings.scrollEnabled = e.scrollEnabled; }
	if (typeof(e.swipeEnabled) != 'undefined') { Theatrix.settings.swipeEnabled = e.swipeEnabled; }
	if (typeof(e.reverseSwipe) != 'undefined') { Theatrix.settings.reverseSwipe = e.reverseSwipe; }
	if (typeof(e.fastClickEnabled) != 'undefined') { Theatrix.settings.fastClickEnabled = e.fastClickEnabled; }
	if (typeof(e.bodyClassEnabled) != 'undefined') { Theatrix.settings.bodyClassEnabled = e.bodyClassEnabled; }
	if (typeof(e.bodyDataEnabled) != 'undefined') { Theatrix.settings.bodyDataEnabled = e.bodyDataEnabled; }
	if (typeof(e.scrollHorizontal) != 'undefined') { Theatrix.settings.scrollHorizontal = e.scrollHorizontal; }
}

/* 
 | ------------------------------------------------------------
 | Initialize Theatrix
 | ------------------------------------------------------------
 | This function initializes Theatrix and sets the 
 | required tags/classes on the body. Plus activates 
 | the first element of the navigation.
 | 
 */
Theatrix.init = function() { 
	if (Theatrix.settings.fastClickEnabled) { FastClick.attach(document.body); }

	Theatrix.data.direction = 'start';
	Theatrix.data.out = '';

	$('body').removeData('in out direction');

	if (Theatrix.settings.hashEnabled && window.location.hash && $('#'+Theatrix.settings.navigation+' li#'+window.location.hash.replace('#','')).length) {
		Theatrix.data.in = window.location.hash.replace('#','');
	} else {
		Theatrix.data.in = $('#'+Theatrix.settings.navigation+' li:first-of-type').attr('id');
	}	
	Theatrix.change();
}

/* 
 | ------------------------------------------------------------
 | Change body classes and/or data-tags
 | ------------------------------------------------------------
 | This function is called when changing scene. It defaults 
 | to the values set in the Theatrix.data object. But the 
 | values can also be passed if a manual call is wanted.
 |
 */
Theatrix.change = function(direction, active, from, lock) {
	if (active) { Theatrix.data.in = active; }
	if (from) { Theatrix.data.out = from; }
	if (direction) { Theatrix.data.direction = direction; }
	if (lock) { Theatrix.data.lock = lock; }
	
	$('#'+Theatrix.settings.navigation+' li').removeClass('active');
	$('#'+Theatrix.data.in).addClass('active');

	if (Theatrix.settings.bodyClassEnabled) {
		$('body').removeClass();
		if (Theatrix.data.out) {
			$('body').addClass(Theatrix.data.out+' '+Theatrix.data.out+'-out');
		}
		if (Theatrix.data.in) {
			$('body').addClass(Theatrix.data.in+' '+Theatrix.data.in+'-in');
		}
		$('body').addClass(Theatrix.data.direction);
	}

	if (Theatrix.settings.bodyDataEnabled) {
		if ( Theatrix.data.direction != 'start' ) {
			$('body').attr('data-out', Theatrix.data.out);
		}
		$('body').attr('data-in', Theatrix.data.in);
		$('body').attr('data-direction', Theatrix.data.direction);
	}

	if (Theatrix.data.lock == '') {
		Theatrix.data.lock = Theatrix.settings.defaultLock;
	}
	if (Theatrix.settings.clickEnabled) {
		Theatrix.settings.clickEnabled = false;
		setTimeout(function() {
			Theatrix.settings.clickEnabled = true;
		}, Theatrix.data.lock);
	}
	if (Theatrix.settings.scrollEnabled) {
		Theatrix.settings.scrollEnabled = false;
		setTimeout(function() {
			Theatrix.settings.scrollEnabled = true;
		}, Theatrix.data.lock);
	}
	if (Theatrix.settings.keyboardEnabled) {
		Theatrix.settings.keyboardEnabled = false;
		setTimeout(function() {
			Theatrix.settings.keyboardEnabled = true;
		}, Theatrix.data.lock);
	}
	if (Theatrix.settings.swipeEnabled) {
		Theatrix.settings.swipeEnabled = false;
		setTimeout(function() {
			Theatrix.settings.swipeEnabled = true;
		}, Theatrix.data.lock);
	}
	Theatrix.data.lock = '';

	if (Theatrix.settings.hashEnabled) {
		window.location.hash = $('#'+Theatrix.settings.navigation+' li.active').attr('id');
	} else {
		window.location.hash = '';
	}
}

/* 
 | ------------------------------------------------------------
 | Check for keypress interaction
 | ------------------------------------------------------------
 | This function is called on keydown and checks 
 | which key has been pressed. And then acts as 
 | defined by the navigation.
 |
 */
Theatrix.checkKey = function(e) {
	if (!Theatrix.settings.keyboardEnabled) { return; }
	Theatrix.data.direction = '';
	
	if (e.keyCode == 38 && $('#'+Theatrix.settings.navigation+' li.active').data('up') && $( '#'+$('#'+Theatrix.settings.navigation+' li.active').data('up') ).length) {
		Theatrix.data.direction = 'up';
	} else if (e.keyCode == 39 && $('#'+Theatrix.settings.navigation+' li.active').data('right') && $('#'+$('#'+Theatrix.settings.navigation+' li.active').data('right') ).length) {
		Theatrix.data.direction = 'right';
	} else if (e.keyCode == 40 && $('#'+Theatrix.settings.navigation+' li.active').data('down') && $('#'+$('#'+Theatrix.settings.navigation+' li.active').data('down') ).length) {
		Theatrix.data.direction = 'down';
	} else if (e.keyCode == 37 && $('#'+Theatrix.settings.navigation+' li.active').data('left') && $('#'+$('#'+Theatrix.settings.navigation+' li.active').data('left') ).length) {
		Theatrix.data.direction = 'left';
	} else if (e.keyCode == 27 && $('#'+Theatrix.settings.navigation+' li.active').data('esc') && $('#'+$('#'+Theatrix.settings.navigation+' li.active').data('esc') ).length) {
		Theatrix.data.direction = 'esc';
	} else if (e.keyCode == 13 && $('#'+Theatrix.settings.navigation+' li.active').data('enter') && $('#'+$('#'+Theatrix.settings.navigation+' li.active').data('enter') ).length) {
		Theatrix.data.direction = 'enter';
	}
	
	if (Theatrix.data.direction) {
		Theatrix.data.out = Theatrix.data.in;
		Theatrix.data.in = $('#'+Theatrix.settings.navigation+' li.active').data(Theatrix.data.direction).split(',')[0].trim();
		if ($('#'+Theatrix.settings.navigation+' li.active').data(Theatrix.data.direction).split(',')[1]) {
			Theatrix.data.lock = $('#'+Theatrix.settings.navigation+' li.active').data(Theatrix.data.direction).split(',')[1].trim();
		}
		Theatrix.change();
	}
}
if (Theatrix.settings.keyboardEnabled) {
	$('body').on('keydown', Theatrix.checkKey);
}

/* 
 | ------------------------------------------------------------
 | Check for scroll interaction
 | ------------------------------------------------------------
 | This function is called on mousewheel/touchpad 
 | scroll and checks in which direction is scrolled. 
 | And then acts as defined by the navigation.
 | 
 */
Theatrix.checkScroll = function(e) {
	clearTimeout(Theatrix.scroll.timer);
	Theatrix.scroll.timer = setTimeout(function() {
		Theatrix.scroll.active = false;
	}, Theatrix.scroll.lock);

	if (!Theatrix.settings.scrollEnabled || Theatrix.scroll.active) { return; }

	Theatrix.scroll.active = true;

	var xy = e.originalEvent.wheelDelta || -e.originalEvent.detail,
		x = e.originalEvent.wheelDeltaX || (e.originalEvent.axis == 1 ? xy : 0),
		y = e.originalEvent.wheelDeltaY || (e.originalEvent.axis == 2 ? xy : 0);
	
	// IE11 Fix
	if (x === 0 && y === 0 && xy !== 0) { y = xy; }
	
	if (Theatrix.settings.scrollHorizontal) {
		x = y; 
		y = 0;
	}

	if (Math.abs(x) > Math.abs(y)) {
		if (x > 0) { 
			Theatrix.data.direction = 'left';
		} else { 
			Theatrix.data.direction = 'right';
		}
	} else {
		if (y > 0) { 
			Theatrix.data.direction = 'up';
		} else { 
			Theatrix.data.direction = 'down';
		}
	}
	if ($('#'+Theatrix.settings.navigation+' li.active').data(Theatrix.data.direction)) {
		Theatrix.data.out = Theatrix.data.in;
		Theatrix.data.in = $('#'+Theatrix.settings.navigation+' li.active').data(Theatrix.data.direction).split(',')[0].trim();
		if ($('#'+Theatrix.settings.navigation+' li.active').data(Theatrix.data.direction).split(',')[1]) {
			Theatrix.data.lock = $('#'+Theatrix.settings.navigation+' li.active').data(Theatrix.data.direction).split(',')[1].trim();
		}
		Theatrix.change();
	}
	return false;
}
if (Theatrix.settings.scrollEnabled) {
	$(document).on('mousewheel DOMMouseScroll', Theatrix.checkScroll);
}

/* 
 | ------------------------------------------------------------
 | data-link click
 | ------------------------------------------------------------
 | This event is called when an 
 | element with data-link is clicked.
 | 
 */
if (Theatrix.settings.clickEnabled) {
	$('[data-link]').on('click', function(event) {
		if (!Theatrix.settings.clickEnabled) { return; }
		if ($(this).data('link') && $( '#'+$(this).data('link') ).length) {
			Theatrix.data.direction = 'link';
			Theatrix.data.out = Theatrix.data.in;
			Theatrix.data.in = $(this).data('link').split(',')[0].trim();
			if ($(this).data('link').split(',')[1]) {
				Theatrix.data.lock = $(this).data('link').split(',')[1].trim();			
			}
			Theatrix.change();
		}
	});
}

/* 
 | ------------------------------------------------------------
 | data-trigger click
 | ------------------------------------------------------------
 | This event is called when an element 
 | with data-trigger is clicked.
 |
 */
if (Theatrix.settings.clickEnabled) {
	$('[data-trigger]').on('click', function(event) {
		if (!Theatrix.settings.clickEnabled) { return; }
		if ($('#'+Theatrix.settings.navigation+' li.active').data($(this).data('trigger'))) {
			Theatrix.data.direction = $(this).data('trigger');
			Theatrix.data.out = Theatrix.data.in;
			Theatrix.data.in = $('#'+Theatrix.settings.navigation+' li.active').data($(this).data('trigger').split(',')[0].trim());
			if ($(this).data('trigger').split(',')[1]) {
				Theatrix.data.lock = $(this).data('trigger').split(',')[1].trim();			
			}
			Theatrix.change();
		}
	});
}

/* 
 | ------------------------------------------------------------
 | Check for Hash change
 | ------------------------------------------------------------
 | This event is called when the hash is changed.
 |
 */
if (Theatrix.settings.hashEnabled) {
	$(window).on('hashchange', function(event) {
		if (!Theatrix.settings.hashEnabled || (window.location.hash && $('#'+Theatrix.settings.navigation+' li#'+window.location.hash.replace('#','')).hasClass('active'))) {
			return false;
		}	
		if ($('#'+Theatrix.settings.navigation+' li#'+window.location.hash.replace('#','')).length) {
			window.location.reload();
		}
	});
}
