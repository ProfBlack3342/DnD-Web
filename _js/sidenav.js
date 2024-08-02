function openNav() {
  document.getElementById("menu").style.width = "250px";
  document.getElementById("menu").style.border = "outset 3px wheat";
  document.getElementById("overlayEscuro").style.display = "block";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("menu").style.border = "none";
  document.getElementById("overlayEscuro").style.display = "none";
  document.getElementById("main").style.marginLeft = "0";
}