
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'maze1.jpg') {
      myImage.setAttribute ('src','maze2.jpg');
    } else {
      myImage.setAttribute ('src','maze1.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'MazeGlow is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'MazeGlow is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
