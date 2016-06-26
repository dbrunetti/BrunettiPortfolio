function backwards() {
	string = document.forms['javafun']['fun'].value
	result = ""
	for (var i = string.length-1; i >=0; i--) {
		result = result + string[i];
	};
	document.forms['javafun']['fun'].value = String(result);
};