function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("sidenav").style.border = "outset 3px wheat";
  document.getElementById("overlayEscuro").style.display = "block";
  document.getElementsByClassName("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("sidenav").style.border = "none";
  document.getElementById("overlayEscuro").style.display = "none";
  document.getElementsByClassName("main").style.marginLeft = "0";
}