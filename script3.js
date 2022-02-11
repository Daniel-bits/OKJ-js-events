const imgTag = document.querySelector('img');
const spanTag = document.querySelector('#output span');

function loaded() {
spanTag.textContent = 'Betöltődött';
}
window.addEventListener('load', loaded());

imgTag.onclick = () => {
	spanTag.textContent = 'Rákattintott';
}
