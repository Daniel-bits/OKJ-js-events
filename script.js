const btn = document.querySelector('button');

btn.onmouseover = () => {

	btn.textContent = "Sikerült";

}
btn.onmouseleave = () => {
	btn.textContent = "Húzd ide az egeret";
	
}

btn.onclick = (ev) => {
	ev.target.style.backgroundColor = 'purple';
}

