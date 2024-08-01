function myFunction() {
    var x = document.getElementById("topo");
    if (x.className === "topo") {
      x.className += " responsivo";
    } else {
      x.className = "topo";
    }
  } 