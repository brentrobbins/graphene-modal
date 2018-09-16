function ajaxForm(e) {
	var inputs = document.querySelector('form').elements;
	var values = {};
	// Remove the 'submit' input button value
	for (i = 0; i < inputs.length; i++) {
		if (inputs[i].name != 'submit') {
			values[inputs[i].name] = inputs[i].value;
		}
	}
	var data = JSON.stringify(values);
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
	xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
	xhr.onload = function() {

		var res = JSON.parse(this.response);
		if (xhr.readyState === xhr.DONE) {
			console.log(xhr.status);
			// 201 = Created
			if (xhr.status === 201) {
				console.log(xhr.response);
				document.querySelector('form').reset();
				document.getElementById('formMessage').style.display = 'block';
				document.getElementById('formMessage').innerHTML = '<code><strong>Form response:</strong> <br />' + data + '</code>';
			} else {
				console.err(xhr.response);
			}
		}
	};
	xhr.send(data);
	// Reset form inputs	
}