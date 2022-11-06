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