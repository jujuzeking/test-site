var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Supreme-Logo.jpg') {
		myImage.setAttribute ('src','images/movement.jpg');
	} else {
		myImage.setAttribute ('src','images/Supreme-Logo.jpg');
		}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Supreme Antisocial Fam New Member, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Supreme Antisocial Fam New Member, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
