function openNav() {
  document.getElementById("menu").style.width = "250px";
  document.getElementById("menu").style.border = "outset 3px wheat";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "#500000";
}

function closeNav() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("menu").style.border = "none";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "#860000";
}