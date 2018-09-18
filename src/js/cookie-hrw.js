
function grapheneModalCookiesCount() {
	var cookieVal = docCookies.getItem('graphene-modal-seen');
	var cookieStatus;
	if (cookieVal == null) {
		cookieStatus = 1;
		docCookies.setItem( 'graphene-modal-seen', 1, new Date(2020, 5, 12) );
	} else {
		cookieStatus = cookieVal;
		cookieStatus =  Number(cookieStatus) + 1;
		docCookies.setItem( 'graphene-modal-seen', cookieStatus, new Date(2020, 5, 12) );
	}
		document.getElementById('Message').style.display = 'block';
		document.getElementById('Message').innerHTML = '<code><strong>Times you have seen this modal: </strong> <br />' + cookieStatus + '</code>';
}
function grapheneModalCookiesLastAction() {
    var cookieActionVal = docCookies.getItem('graphene-modal-last-action');
  
    if (arguments[0] != null || arguments[0] != undefined) {

        var cookieAction = arguments[0];
        console.log('cookie action ' + cookieAction);
        
        var cookieStatus = docCookies.setItem( 'graphene-modal-last-action', cookieAction, new Date(2020, 5, 12) );

        document.getElementById('Message2').style.display = 'block';
        document.getElementById('Message2').innerHTML = '<code><strong>The modal was last closed by the: </strong> <br />' + cookieAction + '</code>';

    } else if (cookieActionVal != null || cookieActionVal != undefined) {

        document.getElementById('Message2').style.display = 'block';
        document.getElementById('Message2').innerHTML = '<code><strong>The modal was last closed by the: </strong> <br />' + cookieActionVal + '</code>';

    }
}