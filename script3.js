const fdsa = document.querySelector('img');
const fdsa2 = document.querySelector('#output');

function loaded() {
fdsa2.textContent = 'Betöltődött';
}
window.addEventListener('load', loaded());

fdsa.onclick = () => {
	fdsa2.textContent = 'Rákattintott';
}
