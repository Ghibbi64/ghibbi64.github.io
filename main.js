//START SCRIPT
var container
var temp1
var sign
var risultato

function calculate_reload() {
    if (temp1 != "") {
        if (sign == "+") {
            risultato = (parseInt(temp1)) + (parseInt(container))
        } else if (sign == "-") {
            risultato = (parseInt(temp1)) - (parseInt(container))
        } else if (sign == "*") {
            risultato = (parseInt(temp1)) * (parseInt(container))
        } else if (sign == "/") {
            risultato = (parseInt(temp1)) / (parseInt(container))
        }
    }
    container = risultato.toString()
    error_handler();
    reload()
    temp1 = ""
}

function error_handler() {
    if (container == "Infinity") {
        container = "Impossibile dividere per 0"
    }
}

function reload(temp1) {
    document.getElementById("RISULTATO").value = container;
    var temp1 = document.getElementById("RISULTATO").value;
}

function function_uno() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "1")
    } else container = "1"
    reload()
}

function function_due() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "2")
    } else container = "2"
    reload()
}

function function_tre() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "3")
    } else container = "3"
    reload()
}

function function_quattro() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "4")
    } else container = "4"
    reload()
}

function function_cinque() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "5")
    } else container = "5"
    reload()
}

function function_sei() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "6")
    } else container = "6"
    reload()
}

function function_sette() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "7")
    } else container = "7"
    reload()
}

function function_otto() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "8")
    } else container = "8"
    reload()
}

function function_nove() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "9")
    } else container = "9"
    reload()
}

function function_zero() {
    console.log("ciao")
    if (container != undefined) {
        container = (container + "0")
    } else container = "0"
    reload()
}


function function_piu() {
    console.log("ciao")
    temp1 = container
    container = ""
    sign = "+"
    reload();
}

function function_meno() {
    console.log("meno")
    temp1 = container
    container = ""
    sign = "-"
    reload();
}

function function_per() {
    console.log("ciao")
    temp1 = container
    container = ""
    sign = "*"
    reload();
}

function function_diviso() {
    console.log("ciao")
    temp1 = container
    container = ""
    sign = "/"
    reload();
}

function function_tot() {
    calculate_reload()
}

function clear_all() {
    temp1 = 0
    container = ""
    risultato = 0
    reload();
}