/**
|--------------------------------------------------
| Graphene Modal
| Simple vanilla javascript modal
|--------------------------------------------------
*/


// Setup variables (really constants, but IE10...)
var graphene = document.getElementById('graphene--modal');
var grapheneOverlay = document.getElementById('graphene--modal-overlay');

// hasClass polyfill
function hasClass(element,testClass){
  if ('classList' in element) { return element.classList.contains(testClass);
} else { return new RegExp(testClass).exec(element.className); } // this is better
  return false;
}

function removeClass(elem, name) {
  if (hasClass(elem, name)) {
     elem.className=elem.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),'').replace(/^\s+|\s+$/g, '');
     //elem.className=elem.className.replace('/\b' +name+ '\b/g', '');
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
  // We'll use `el` to track what triggered this close function. 
  // Used for cookies, analytics, callbacks and other functions.

  //graphene.className = graphene.className.replace(/\bgraphene--modal-init\b/g, 'graphene--modal-show');
  //grapheneOverlay.className = graphene.className.replace(/\bgraphene--modal-init\b/g, 'graphene--modal-show');
  removeClass(graphene, 'graphene--modal-init');
  removeClass(grapheneOverlay, 'graphene--modal-init');
  addClass(graphene, 'graphene--modal-show');
  addClass(grapheneOverlay, 'graphene--modal-show');
}

// Open modal fuction
function grapheneModalClickClose() {
  console.log('close ' + graphene.className);
  // Use `el` to track what triggered this function. 
  // Used for cookies, analytics, callbacks and other functions.
  
  //graphene.className = graphene.className.replace(/\bgraphene--modal-show\b/g, 'graphene--modal-hide');
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
  
  //graphene.className = graphene.className.replace(/\bgraphene--modal-hide\b/g, 'graphene--modal-init');

  graphene.removeEventListener("webkitAnimationEnd", grapheneCleanUp,true);
  graphene.removeEventListener("animationend", grapheneCleanUp,true);
  graphene.removeEventListener("onanimationend", grapheneCleanUp,true);

  console.log('cleaned up ' + graphene.className);
}

// Click `esc` key to close
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    // Fire the close function and pass along that it was triggered by the `esc` key
    grapheneModalClickClose('esc');
  }
};


document.getElementById('graphene--modal-overlay').addEventListener('click', function() {
  grapheneModalClickClose();
})
document.getElementById('graphene--modal-close-btn').addEventListener('click', function() {
  grapheneModalClickClose();
})
document.getElementById('graphene--modal-open-btn').addEventListener('click', function() {
  grapheneModalClickOpen();
})

// Document ready
document.onreadystatechange = function() {
	if (document.readyState == 'complete') {
		// Open up the modal when the page is ready and passing `auto` to track how it was opened
        grapheneModalClickOpen();
    } 
};