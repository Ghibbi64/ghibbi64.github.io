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
    if (checkbox1.checked) {
        console.log("LETTERE MAIUSCOLE");
        checkbox1 = true;
    } else checkbox1 = false;
    if (checkbox2.checked) {
        console.log("NUMERI");
        checkbox2 = true;
    } else checkbox2 = false;
    if (checkbox3.checked) {
        console.log("CARATTERI SPECIALI");
        checkbox3 = true;
    } else checkbox3 = false;
    lunghezza = parseInt(document.getElementById("lunghezza").value);

    //crea stringa completa
    stringaFinale = caratteriMinuscoli;
    if (checkbox1) {
        stringaFinale = [].concat(stringaFinale, caratteriMaiuscoli);
    }
    if (checkbox2) {
        stringaFinale = [].concat(stringaFinale, caratteriNumeri);
    }
    if (checkbox3) {
        stringaFinale = [].concat(stringaFinale, caratteriSpeciali);
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