alert("a calculadora é point-click, use o mouse para escrever! ")
var n;
var resolucao = false;
var conta = String("");
var form;
var draw = window.document.getElementById("areatela");
const erase = "";

function digitar(caracter) {
    n = String(caracter);
    conta.length = 14;
    if (conta.length > 15) {
        draw.innerHTML = "numero max</i>";
    } else {
        conta = conta + n;

        draw.innerHTML = conta;

        return form;
    }
}

function limpar() {
    if (conta == "") {
        draw.innerHTML = "<i>vazio</i>";
    } else {

        conta = conta.replace(conta, "");
        draw.innerHTML = conta;
    }
}

function apagar() {

    if (conta.length == 1) {
        limpar()
    }

    if (conta == "") {
        draw.innerHTML = "<i>vazio</i>";
    } else {

        conta = conta.replace(n, erase);
        draw.innerHTML = conta;
    }
}



function calcular() {
    conta = conta.replace("%", "/100");
    conta = conta.replace("^", "**");

    if (conta.length > 15) {
        conta.length = 13;

        form = eval(conta); //função

        draw.innerHTML = form;
        conta = String(form);
    } else {
        form = eval(conta); //função

        draw.innerHTML = form;
        conta = String(form);
    }
}