# Theatrix (in development)
Vendor for creating animation based sites with keyboard and touch support

## Animation directions
.start / .up / .down / .left / .right / .link

## Creating navigation
Threatix works by looking through the navigation and looking for data-tags linking to different scenes for different directions. Below is shown an example of such a navigation:
```
<ul id="navigation">
	<li id="scene1" class="active" data-down="scene2" data-link="scene1" data-callbackin="function">Scene 1</li>
	<li id="scene2" data-up="scene1" data-link="scene2,1000" data-callbackout="function">Scene 2</li>
</ul>
```

## data-tags example
```
<body class="scene1-in scene2-out up" data-current="scene1" data-previous="scene2" data-direction="up">
```

## creating animations via css
To create animations on specific scenes and/or specific directions. You can target these in many ways. Below are shown a few examples:
```
body[data-current="scene1"][data-direction="up"] .scene {  }
body[data-from="scene1"][data-direction="up"] .scene {  }
body[data-current="scene1"].up .prop {  }
body[data-current="scene1"][data-direction="up"] .actor {  }
body[data-current="scene1"][data-direction="up"] .script {  }
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
]);
```

## Initialization
```
Theatrix.init();
```

## Recommended file structure
```
scripts:
	jquery
	fastclick?
modules:
	gulp
	sass-autoprefixer

structure:
	assets/
		css/ style.css
		img/
		js/ script.js
		vendors/
	scenes/
	index.html
```