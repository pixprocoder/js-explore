// Option 1
// <button onclick="document.body.style.backgroundColor = 'red'">Click me</button>;

// Option 2
const makeBlue = document.getElementById("btn");
makeBlue.onclick = blue;
function blue() {
  document.body.style.backgroundColor = "blue";
}

// option 3
const purple = document.getElementById("btn2");
purple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option 4
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// Option 5
const makePink = document.getElementById("make-pink");
makePink.addEventListener("click", pink);
function pink() {
  document.body.style.backgroundColor = "pink";
}

// easy option
document.getElementById("make-yellow").addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});
