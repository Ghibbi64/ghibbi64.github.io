//START SCRIPT
var container = [];
var temp1;
var sign;
var risultato;
var assign;
var temp_sign;
var sign_per = "*";
var sign_div = "/";
var sign_piu = "+";
var sign_meno = "-";
var punto = ".";
var chiave = "";

/* parte da function_tot, fa i calcoli necessari che verranno 
caricati nella textbox con reload() */
function calculate_reload() {
    if (temp1 != "") {
        if (sign == "+") {
            risultato = parseFloat(temp1) + parseFloat(container);
        } else if (sign == "-") {
            risultato = parseFloat(temp1) - parseFloat(container);
        } else if (sign == "*") {
            risultato = parseFloat(temp1) * parseFloat(container);
        } else if (sign == "/") {
            risultato = parseFloat(temp1) / parseFloat(container);
        }
    }
    container = risultato.toString();
    error_handler();
    reload();
    temp1 = "";
}

//parte da calculate_reload, esplicativo
function error_handler() {
    if (container == "Infinity") {
        container = "Impossibile dividere per 0";
    } else if (container == "NaN") {
        container = "Errore";
    }
}

/* parte da function_assign, function_sign e clear_all
inserisce i dati della variabile container dentro la textbox */
function reload(temp1) {
    if ((document.getElementById("RISULTATO").value != "Errore") && (document.getElementById("RISULTATO").value != "Impossibile dividere per 0")) {
    document.getElementById("RISULTATO").value = container;
    var temp1 = document.getElementById("RISULTATO").value;
    }
}

//funzione far registrare i numeri dall'html
function function_assign(assign) {
    if (!(container.length > 15)) {
        assign = String(assign);
        console.log(assign);
        if (container != undefined) { //check per vedere se container è vuoto o meno all'aggiunta dei dati
            container = (container + assign);
        } else container = assign;
        reload();
    } else console.log("Limite caratteri raggiunto")
}

//funzione per far registrare i segni dall'html
function function_sign(temp_sign) {
    console.log(temp_sign);
    temp1 = container;
    container = "";
    sign = temp_sign;
    reload();
}

function clear_all() {
    document.getElementById("RISULTATO").value = "";
    temp1 = 0;
    container = "";
    risultato = 0;
    reload();
}

document.onkeydown = function (e) {
    console.log(e.key)
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9" || e.key == "0" || e.key == "."){
        function_assign(e.key);
    } else if (e.key == "*" || e.key == "/" || e.key == "+" || e.key == "-") {
        function_sign(e.key);
    } else if (e.key == "Enter") {
        calculate_reload();
        if (chiave == "amongus") {
            container = "SUS";
            reload();
        }
    } else if (e.key == "c" || e.key == "C") {
        clear_all();
    } else if (e.key == "Backspace") {
        container = container.slice(0, container.length-1);
        reload();
    } else if ((e.key == "a") || (e.key == "m") || (e.key == "o") || (e.key == "n") || (e.key == "g") || (e.key == "u") || (e.key == "s")) {
        chiave = chiave + key.e;
    }
  }