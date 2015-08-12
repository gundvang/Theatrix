# Theatrix (in development)
Easily create interactive sites with keyboard, mouse and touch support.

## Requirements
Theatrix requires [jQuery](https://jquery.com/) (2.1.4 minimum).

Theatrix is bundled together with [Fastclick](https://github.com/ftlabs/fastclick) and [TouchSwipe](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin).

## Animation directions
.start / .up / .down / .left / .right / .link / .esc / .enter

## Creating navigation
Theatrix works by looking through the navigation and looking for data-tags linking to different scenes for different directions. Below is shown an example of such a navigation:
```
<ul id="navigation">
	<li id="scene1" data-down="scene2" data-link="scene1" data-callbackin="function">Scene 1</li>
	<li id="scene2" data-up="scene1" data-link="scene2,1000" data-callbackout="function">Scene 2</li>
</ul>
```

#### data-tags
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
<body class="scene1 scene1-out scene2 scene2-in down" data-in="scene2" data-out="scene1" data-direction="down">
```

## Targeting interactivity via css
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
Theatrix.setup({
	defaultTime: 1000, // lock time between scenes in milliseconds
	navigation: 'navigation', // id of navigation / defaults to "navigation"
	urlEnabled: true,  // turns url hashing on/off
	parallaxEnabled: true, // turns parallax functionality on/off
	keyboardEnabled: true, // turns keyboard keys on/off
	scrollEnabled: true, // turns scroll on/off
	swipeEnabled: true, // turn touch swipe on/off
	reverseSwipe: false, // reverses swipe directions
	fastClickEnabled: true, // turns fastClick script on/off
	bodyClassEnabled: true, // turns body classes on/off
	bodyDataEnabled: true, // turns body data-tags on/off
});
```

#### defaultTime = 1000
Choose the default number of milliseconds that the scenes are locked when changing.
Default is `defaultTime: 1000`.

#### navigation = 'navigation'
Choose the navigation id that is used for the navigation for the input.
Default is `navigation: 'navigation'`.


## Initialization
```
Theatrix.init();
```