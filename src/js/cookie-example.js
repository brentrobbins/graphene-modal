// Fire the Cookie fucntion when the `graphene--modal-open` class is clicked
var classname = document.getElementsByClassName("graphene--modal-open");
  for(i=0;i<classname.length;i++){
    classname[i].addEventListener('click', function(e) {
      // Trigger the cookie funcation when the open modal link/button has been fired
	  grapheneModalCookies();
	});
}

// Cookie function: Simple example of showing how many times you have seen the cookie modal
// This function is storing the count and retrieving it and displaying it in the modal
function grapheneModalCookies() {
	var cookieVal = docCookies.getItem('graphene-modal');
	var cookieStatus;
	if (cookieVal == null) {
		cookieStatus = 1;
		docCookies.setItem( 'graphene-modal', 1, new Date(2020, 5, 12) );
	} else {
		cookieStatus = cookieVal;
		cookieStatus =  Number(cookieStatus) + 1;
		docCookies.setItem( 'graphene-modal', cookieStatus, new Date(2020, 5, 12) );
	}
		document.getElementById('formMessage').style.display = 'block';
		document.getElementById('formMessage').innerHTML = '<code><strong>Times you have seen this modal:</strong> <br />' + cookieStatus + '</code>';
}
