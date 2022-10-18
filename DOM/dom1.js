var h1Ele = document.querySelector('h1');
h1Ele.style.color = 'green';

var isYellow = false;
var bodyElement = document.querySelector('body')

var selectall = document.querySelectorAll('.back');
console.log(selectall)

var manipulatorDiv = document.querySelector('.back');
manipulatorDiv.style.height = '50px';
manipulatorDiv.style.width = '400px';
manipulatorDiv.style.backgroundColor = 'blue';
manipulatorDiv.style.fontSize = '30px';
manipulatorDiv.style.border = '5px solid black';

// setInterval(function() {
//     if (isYellow) {
//         bodyElement.style.background = 'white';
//     } else {
//         bodyElement.style.background = 'yellow';
//     }
//     isYellow = !isYellow;
// }, 1000);

var selectID = document.getElementById('oath');
console.log(selectID)

var selctclass = document.getElementsByClassName('back');
console.log(selctclass)

var selectTag = document.getElementsByTagName('h1');
console.log(selectTag)