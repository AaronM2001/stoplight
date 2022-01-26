let stop = document.getElementById("stopButton");
let stopBulb = document.getElementById("stopLight");
let slow = document.getElementById("slowButton");
let slowBulb = document.getElementById("slowLight");
let go = document.getElementById("goButton");
let goBulb = document.getElementById("goLight");
// Event Listener Toggle For When Stop Button Is Clicked //
stop.addEventListener("click", function() {
  // Grabs Red Light In CSS//
  stopBulb.classList.toggle('stop')
})
slow.addEventListener("click", function() {
  // Grabs Red Light In CSS//
  slowBulb.classList.toggle('slow')
})
go.addEventListener("click", function() {
  // Grabs Red Light In CSS//
  goBulb.classList.toggle('go')
})
var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '5px dotted orange';
  enterEventCount++;
  addListItem('Mouse has enterd ' + enterEventCount + '.');
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '1px solid #333';
  leaveEventCount++;
  addListItem('Mose has left ' + leaveEventCount + '.');
});

function addListItem(text) {
  // Create a new text node using the supplied text
  var newTextNode = document.createTextNode(text);

  // Create a new li element
  var newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);
}