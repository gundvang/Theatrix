# theatrix
Vendor for creating animation based sites with keyboard and touch support

## Example
<body class=“scene1-in scene2-out up” data-current=“scene1” data-previous=“scene2” data-direction=“up”>

.up / .down / .left / .right / .link

<ul id=“pagination">
     <li id=“scene1” class=“active" data-down=“scene2” data-link=“scene1,1500” data-callbackin=“function”>Scene 1</li>
     <li id=“scene2” data-up=“scene1” data-link=“scene2,1000” data-callbackout=“function”>Scene 2</li>
</ul>

body[data-current=“scene1”][data-direction=“up”] .stage {  }
body[data-current=“scene1”][data-direction=“up”] .scene {  }
body[data-current=“scene1”].up .prop {  }
body[data-current=“scene1”][data-direction=“up”] .actor {  }
body[data-current=“scene1”][data-direction=“up”] .script {  }


## Setup customization
Theatrix.setup([
     ‘defaultTime’ => ‘1000’, // låst tid mellem scener i ms
     ’navigation’ => ‘pagination’, // id for navigation / defaulter til “pagination"
     ‘swipeEnabled’ => true, // slår touch swipe til / fra
     ‘parallax’ => true, // slår parallax funktionalitet til / fra
     ‘keysEnabled’ => true, // slår piltaster til / fra
     ‘scrollEnabled’ => true, // slår scroll til / fra
     
]);

direkte link: “http://url.dk/scene-nummer-1"

scripts:
     jquery
     fastclick?
modules:
     gulp
     sass-autoprefixer

struktur:
     assets /
          css / style.css
          img /
          js / script.js
          vendors /
     scenes /
     index.html
