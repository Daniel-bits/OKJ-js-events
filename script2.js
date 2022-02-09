const inpt = document.getElementsByTagName('input');

function onFocus() {
	this.style.color = 'red';
}
function onFocusOut() {
	this.style.color = 'black';
}

for (let values of inpt) {

	values.addEventListener('focus', onFocus);
	values.addEventListener('blur', onFocusOut);

}



