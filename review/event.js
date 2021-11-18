
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const letter = document.getElementById("title");

console.dir(letter);
function changeColor(loc) {
  letter.style.color=colors[loc];
}
function onMouse() {
  letter.innerText="The mouse is here!";
  changeColor(0);
} 
function offMouse() {
  letter.innerText="The mouse is gone!";
  changeColor(1);
}
function resize() {
  letter.innerText="You just resized!";
  changeColor(2);
}
function clickR(e) {
  if(e.which===3){
    letter.innerText="That was a right click!";
  changeColor(3);
  }
    
}
letter.addEventListener("mouseover", onMouse);
letter.addEventListener("mouseout",offMouse);
window.addEventListener("mousedown",clickR);
window.addEventListener("resize",resize);