var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Supreme-Logo.jpg') {
		myImage.setAttribute ('src','images/movement.jpg');
	} else {
		myImage.setAttribute ('src','images/Supreme-Logo.jpg');
		}
}