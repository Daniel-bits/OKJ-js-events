const imgTag = document.querySelector('img');
const pTag = document.querySelector('#output p');

function loaded() {
pTag.textContent = 'Betöltődött';
}
window.addEventListener('load', loaded());

imgTag.onclick = () => {
	pTag.textContent = 'Rákattintott';
}
