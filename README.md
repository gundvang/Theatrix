# Theatrix (in development)
Easily create interactive sites with keyboard, mouse and touch support.

## Requirements
Theatrix requires [jQuery](https://jquery.com/) (2.1.4 minimum).

Theatrix is bundled together with [Fastclick](https://github.com/ftlabs/fastclick) and [TouchSwipe](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin).

## Animation directions
.start / .up / .down / .left / .right / .link / .esc

## Creating navigation
Threatix works by looking through the navigation and looking for data-tags linking to different scenes for different directions. Below is shown an example of such a navigation:
```
<ul id="navigation">
	<li id="scene1" class="active" data-down="scene2" data-link="scene1" data-callbackin="function">Scene 1</li>
	<li id="scene2" data-up="scene1" data-link="scene2,1000" data-callbackout="function">Scene 2</li>
</ul>
```

### data-tags
```
data-link="" // click link to a scene (can be used outside of navigation as well)
data-direction="" // overwrites data-link's default data-direction (can be used outside of navigation as well)
data-up="" // link to a scene on up arrow / up scroll / down swipe
data-down="" // link to a scene on down arrow / down scroll / up swipe
data-left="" // link to a scene on left arrow / right swipe
data-right="" // link to a scene on right arrow / left swipe
data-esc="" // link to a scene on escape key (keyboard only)
data-enter="" // link to a scene on enter key (keyboard only)
data-callbackin="" // call a js function on in
data-callbackout="" // call a js function on out
```

## Example of generated body-tag
```
<body class="scene1 scene1-in scene2 scene2-out up" data-in="scene1" data-out="scene2" data-direction="up">
```

## Targeting interativity via css
To create animations on specific scenes and/or specific directions. You can target these in many ways. Below are shown a few examples:
```
body[data-out="scene1"][data-in="scene2"][data-direction="down"] .scene {  }
body[data-out="scene1"][data-in="scene2"].down .scene {  }
body.scene1-out.scene2-in.down .scene {  }
body[data-in="scene2"][data-direction="down"] .scene {  }
body[data-in="scene2"].down .scene {  }
body.scene2-in.down .scene {  }
```

## Setup customization
```
Theatrix.setup([
	'defaultTime' => '1000', // lock time between scenes in milliseconds
	'navigation' => 'navigation', // id of navigation / defaults to "navigation"
	'swipeEnabled' => true, // turn touch swipe on/off
	'parallax' => true, // turns parallax functionality on/off
	'keysEnabled' => true, // turns arrow keys on/off
	'scrollEnabled' => true, // turns scroll on/off
	'reverseSwipe' => false, // reverses swipe directions
]);
```

## Initialization
```
Theatrix.init();
``