# Theatrix (in development)
Easily create interactive sites with keyboard, mouse and touch support.


## Requirements
Theatrix requires [jQuery](https://jquery.com/) (2.1.4 minimum) for its functionality to work correctly.  
Theatrix uses [Fastclick](https://github.com/ftlabs/fastclick) for quicker touch response. This can be disabled with `Theatrix.fastClickEnabled`.  
Theatrix uses [TouchSwipe](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin) for touch-functionality. This can be disabled with `Theatrix.swipeEnabled`.  


## Creating navigation
Theatrix works by looking through the navigation and looking for data-tags linking to different scenes for different directions. Below is shown an example of such a navigation:
```
<ul id="navigation">
	<li id="scene1" data-down="scene2" data-link="scene1">Scene 1</li>
	<li id="scene2" data-up="scene1" data-down="scene3" data-link="scene2">Scene 2</li>
	<li id="scene2" data-up="scene2" data-link="scene3">Scene 3</li>
</ul>
```

### data-tags
Data-tags are how you tell Theatrix what to do on certain inputs.  
Most of the tags are used in the navigation.  
But some can also be used outside of the navigation.


##### `data-up=""`
Link to a scene on up arrow / up scroll / down swipe. (used inside of navigation)  
(the value should be the id of an element in the navigation)


##### `data-down=""`
Link to a scene on down arrow / down scroll / up swipe. (used inside of navigation)  
(the value should be the id of an element in the navigation)


##### `data-left=""`
Link to a scene on left arrow / right swipe. (used inside of navigation)  
(the value should be the id of an element in the navigation)


##### `data-right=""`
Link to a scene on right arrow / left swipe. (used inside of navigation)  
(the value should be the id of an element in the navigation)


##### `data-esc=""`
Link to a scene on escape key. (used inside of navigation) (keyboard only)  
(the value should be the id of an element in the navigation)


##### `data-enter=""`
Link to a scene on enter key. (used inside of navigation) (keyboard only)  
(the value should be the id of an element in the navigation)


##### `data-callback-in=""`
Call a js function when entering scene. (used inside of navigation)  
(the value should be the name of a custom javascript function)


##### `data-callback-out"=""`
Call a js function on out. (used inside of navigation)  
(the value should be the name of a custom javascript function)


##### `data-link=""`
Link to a scene on click.  
(the value should be the name of an element in the navigation)


##### `data-direction=""`
Overwrites data-link's default data-direction.  
(possible values: `start`/`up`/`down`/`left`/`right`/`link`/`esc`/`enter`)


##### `data-trigger=""`
Triggers another call on the active scene on click. (used outside of navigation)  
(possible values: `start`/`up`/`down`/`left`/`right`/`link`/`esc`/`enter`)



## Example of generated body-tag
When initialized. The body-tag will get classes and/or data-tags showing the current scene (in), previous scene (out) and direction.
```
<body class="scene1 scene1-out scene2 scene2-in down" data-in="scene2" data-out="scene1" data-direction="down">
```  

### Targeting interactivity via css
To create animations on specific scenes and/or specific directions.  
You can target these in many ways.  
Below are shown a few examples:
```
body[data-out="scene1"][data-in="scene2"][data-direction="down"] .scene {  }
body[data-out="scene1"][data-in="scene2"].down .scene {  }
body.scene1-out.scene2-in.down .scene {  }
```
```
body[data-in="scene2"][data-direction="down"] .scene {  }
body[data-in="scene2"].down .scene {  }
body.scene2-in.down .scene {  }
```


## Setup customization
Theatrix can be customized by changing the settings in the setup function (`Theatrix.setup({});`) before initializing.
Below is a list of settings that can be changed via the setup function:

##### `defaultTime: 1000`
Choose the default number of milliseconds that the scenes are locked when changing scene.

##### `navigation: 'navigation'`
Choose the id of the navigation that is used for navigating the scenes.

##### `urlEnabled: true`
Turn url hashing on or off.

##### `parallaxEnabled: true`
Turn parallax functionality on or off.

##### `keyboardEnabled: true`
Turn keyboard keys on or off.

##### `scrollEnabled: true`
Turn scrolling on or off.

##### `swipeEnabled: true`
Turn touch swiping on or off.

##### `reverseSwipe: false`
Choose if touch swiping should be reversed.

##### `fastclickEnabled: true`
Turn the Fastclick support on or off.

##### `bodyClassEnalbed: true`
Turn body classes on or off.

##### `bodyDataEnabled: true`
Turn body data-tags on or off.

## Initialization
```
Theatrix.init();
```