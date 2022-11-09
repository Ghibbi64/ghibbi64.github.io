var nomePopup;
var colorCheck = 0;

function showPopup(nomePopup) {
    var popup = document.getElementById(nomePopup);
    popup.classList.toggle("show");
  }
  
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function changeBkgColor() {
    if (colorCheck == 0) {
    document.getElementById("body").style.backgroundColor = "#FF0000";
    colorCheck = 1;
    } else {
      document.getElementById("body").style.backgroundColor = "#FAEBD7";
      colorCheck = 0;
    }
  }

  var i = 0

setInterval(function() {
    i++
    if (i == 1)
        document.getElementById("Ciao").value = "Test";
    else if (i == 2)
        document.getElementById("Ciao").value = " Tes";
    else if (i == 3)
        document.getElementById("Ciao").value = "t Te";
    else if (i == 4) 
        document.getElementById("Ciao").value = "st T";
    else {
        document.getElementById("Ciao").value = "est ";
        i = 0;
    }
}, 400)