// JS scripts placed here
var outerContainer = document.getElementById('outer-container');

function getPosition(event) {
	var top = event.clientY;
	var left = event.clientX;
	var size = "circle(0 at";
	var clipStyle = size + " " + left + "px " + top + "px)";
	event.target.nextElementSibling.style.transition = "0s";
	event.target.nextElementSibling.style.webkitClipPath = clipStyle;
	event.target.nextElementSibling.style.clipPath = clipStyle;
}

function show(event) {
	var top = event.clientY;
	var left = event.clientX;
	var size = "circle(150% at";
	var clipStyle = size + " " + left + "px " + top + "px)";
	event.target.nextElementSibling.style.transition = "2s ease-out";
	event.target.nextElementSibling.style.webkitClipPath = clipStyle;
	event.target.nextElementSibling.style.clipPath = clipStyle;
}

function preventMouseOut(event) {	
	event.target.previousElementSibling.removeEventListener('mousemove', getPosition);
}

for (var i = 0; i < outerContainer.children.length; i++) {
	outerContainer.children[i].addEventListener('click', show);
	outerContainer.children[i].addEventListener('mousemove', getPosition);
	outerContainer.children[i].addEventListener('mouseout', preventMouseOut);
}