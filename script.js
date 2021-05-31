var n;
var resolucao = false;
var conta = String("");
var form;
var draw = window.document.getElementById("areatela");

function digitar(caracter) {
    n = caracter;
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