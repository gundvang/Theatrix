# Theatrix (in development)
Vendor for creating animation based sites with keyboard and touch support

## Example
<body class="scene1-in scene2-out up" data-current="scene1" data-previous="scene2" data-direction="up">

.up / .down / .left / .right / .link

```
<ul id="pagination">
	<li id="scene1" class="active" data-down="scene2" data-link="scene1,1500" data-callbackin="function">Scene 1</li>
	<li id="scene2" data-up="scene1" data-link="scene2,1000" data-callbackout="function">Scene 2</li>
</ul>
```

```
body[data-current="scene1"][data-direction="up"] .stage {  }
body[data-current="scene1"][data-direction="up"] .scene {  }
body[data-current="scene1"].up .prop {  }
body[data-current="scene1"][data-direction="up"] .actor {  }
body[data-current="scene1"][data-direction="up"] .script {  }
```

## Setup customization
```
Theatrix.setup([
	'defaultTime' => ‘1000’, // lock time between scenes in milliseconds
	'navigation' => ‘pagination’, // id of navigation / defaults to "pagination"
	'swipeEnabled' => true, // turn touch swipe on/off
	'parallax' => true, // turns parallax functionality on/off
	'keysEnabled' => true, // turns arrow keys on/off
	'scrollEnabled' => true, // turns scroll on/off
]);
```

## Initialization
Theatrix.init();

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