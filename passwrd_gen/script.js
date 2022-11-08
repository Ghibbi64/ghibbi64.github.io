let checkbox1;
let checkbox2;
let checkbox3;
let lunghezza;
let stringaFinale = [];
let caratteriSpeciali = ["!", "$", "&", "%", "+", "-", ";", ":", "/"];
let caratteriNumeri = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let caratteriMaiuscoli = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let caratteriMinuscoli = caratteriMaiuscoli.map(element => {
    return element.toLowerCase();
  });
let password = "";

console.log(caratteriMinuscoli)
window.onload = function() {
  checkbox1 = document.getElementById("checkbox1");
  checkbox2 = document.getElementById("checkbox2");
  checkbox3 = document.getElementById("checkbox3");
};

function genera() {
    document.getElementById("RISULTATO").value = "";
    lunghezza = parseInt(document.getElementById("lunghezza").value);
    //crea stringa completa
    stringaFinale = [].concat(caratteriMinuscoli);
    if (checkbox1.checked) {
        stringaFinale = [].concat(stringaFinale, caratteriMaiuscoli);
        console.log(stringaFinale)
    }
    if (checkbox2.checked) {
        stringaFinale = [].concat(stringaFinale, caratteriNumeri);
        console.log(stringaFinale)
    }
    if (checkbox3.checked) {
        stringaFinale = [].concat(stringaFinale, caratteriSpeciali);
        console.log(stringaFinale)
    }
    //genera stringa
    while (!(lunghezza == 0)) {
        let temp1;
        temp1 = parseInt(Math.random() * (stringaFinale.length));
        password = password + stringaFinale[temp1];
        lunghezza = lunghezza - 1;
    }
    document.getElementById("RISULTATO").value = password;
    password = "";
    stringaFinale = [];
}