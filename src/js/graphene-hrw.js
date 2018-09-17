/**
|--------------------------------------------------
| Graphene Modal
| Simple vanilla javascript modal
|--------------------------------------------------
*/

/* Not IE9 or older */
// if (document.all && !window.atob) {
//     console.log('IE9 or older');
//     addClass( document.body, 'ie9');
// } else {
//     addClass( document.body, 'Notie9');
// }

// function addClass(elem, className){
//     if(elem.className.indexOf(className) == -1) {
//         elem.className += className;
//     }          
// }


// Setup variables (really constants, but IE10...)
var graphene = document.getElementById('graphene--modal');
var grapheneOverlay = document.getElementById('graphene--modal-overlay');

// Close modal function
function grapheneModalClickOpen(el) {
  console.log('open');
  // We'll use `el` to track what triggered this close function. 
  // Used for cookies, analytics, callbacks and other functions.
  graphene.className = graphene.className.replace(/\bgraphene--modal-init\b/g, 'graphene--modal-show');
  grapheneOverlay.className = graphene.className.replace(/\bgraphene--modal-init\b/g, 'graphene--modal-show');
}

// Open modal fuction
function grapheneModalClickClose(el) {
  console.log('close');
  // Use `el` to track what triggered this function. 
  // Used for cookies, analytics, callbacks and other functions.
  graphene.className = graphene.className.replace(/\bgraphene--modal-show\b/g, 'graphene--modal-hide');
  graphene.addEventListener("webkitAnimationEnd", grapheneCleanUp,false);
  graphene.addEventListener("animationend", grapheneCleanUp,false);
  graphene.addEventListener("onanimationend", grapheneCleanUp,false);
}

// Cleanup function to remove the hide class and reset it to the initial class
function grapheneCleanUp() {
  graphene.className = graphene.className.replace(/\bgraphene--modal-hide\b/g, 'graphene--modal-init');
}

// Click `esc` key to close
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    // Fire the close function and pass along that it was triggered by the `esc` key
    grapheneModalClickClose('esc');
  }
};

// Fire the Open fucntion when the `graphene--modal-open` class is clicked
var classname = document.getElementsByClassName("graphene--modal-open");
  for(i=0;i<classname.length;i++){
    classname[i].addEventListener('click', function(e) {
      // Open modal - pass along the text used in the element to track where it was triggered
      grapheneModalClickOpen(this.innerHTML);
    });
}

// Fire the Close fucntion when the `graphene--modal-close` class is clicked
var classname = document.getElementsByClassName("graphene--modal-close");
  for(i=0;i<classname.length;i++){
    classname[i].addEventListener('click', function() {
      // Open modal - pass along the text used in the element to track where it was triggered
      grapheneModalClickClose(this.innerHTML);
    });
}

// Document ready
document.onreadystatechange = function() {
	if (document.readyState == 'complete') {
		// Open up the modal when the page is ready and passing `auto` to track how it was opened
        grapheneModalClickOpen('auto');
    } 
};

