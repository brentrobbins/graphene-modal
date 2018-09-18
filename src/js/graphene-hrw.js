/**
|--------------------------------------------------
| Graphene Modal
| Simple vanilla javascript modal
|--------------------------------------------------
*/

var graphene = document.getElementById('graphene--modal');
var grapheneOverlay = document.getElementById('graphene--modal-overlay');

// hasClass polyfill
function hasClass(element,testClass){
  if ('classList' in element) { return element.classList.contains(testClass);
} else { return new RegExp(testClass).exec(element.className); }
  return false;
}

function removeClass(elem, name) {
  if (hasClass(elem, name)) {
     elem.className=elem.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),'').replace(/^\s+|\s+$/g, '');
   }
}

function addClass(elem, className){
    if(elem.className.indexOf(className) == -1) {
        elem.className += ' ' + className;
    }          
}

/* Not IE9 or older */
if (document.all && !window.atob) {
    console.log('IE9 or older');
    addClass( document.body, 'IE9');
} else {
    addClass( document.body, 'notIE9');
}

// Close modal function
function grapheneModalClickOpen() {
  console.log('open ' + graphene.className);
  grapheneModalCookiesCount();
  grapheneModalCookiesLastAction();

  removeClass(graphene, 'graphene--modal-init');
  removeClass(grapheneOverlay, 'graphene--modal-init');
  addClass(graphene, 'graphene--modal-show');
  addClass(grapheneOverlay, 'graphene--modal-show');
}

// Open modal fuction
function grapheneModalClickClose() {
  console.log('close ' + graphene.className);
  grapheneModalCookiesLastAction(arguments[0]);
  removeClass(graphene, 'graphene--modal-show');
  addClass(graphene, 'graphene--modal-hide');
  graphene.addEventListener("webkitAnimationEnd", grapheneCleanUp,true);
  graphene.addEventListener("animationend", grapheneCleanUp,true);
  graphene.addEventListener("onanimationend", grapheneCleanUp,true);
  console.log('closed ' + graphene.className);
}

// Cleanup function to remove the hide class and reset it to the initial class
function grapheneCleanUp() {
  console.log('clean up ' + graphene.className);
  removeClass(graphene, 'graphene--modal-hide');
  addClass(graphene, 'graphene--modal-init');
  graphene.removeEventListener("webkitAnimationEnd", grapheneCleanUp,true);
  graphene.removeEventListener("animationend", grapheneCleanUp,true);
  graphene.removeEventListener("onanimationend", grapheneCleanUp,true);
  console.log('cleaned up ' + graphene.className);
}

// Click `esc` key to close
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    grapheneModalClickClose('esc key');
  }
};


document.getElementById('graphene--modal-overlay').addEventListener('click', function() {
  grapheneModalClickClose('overlay');
})
document.getElementById('graphene--modal-close-btn').addEventListener('click', function() {
  grapheneModalClickClose('close button');
})
document.getElementById('graphene--modal-open-btn').addEventListener('click', function() {
  grapheneModalClickOpen();
})

document.onreadystatechange = function() {
	if (document.readyState == 'complete') {
        grapheneModalClickOpen();
    } 
};