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

function apagar() {
    if (conta == "") {
        draw.innerHTML = "<i>vazio</i>";
    } else {

        conta = conta.replace(n, " ");
        draw.innerHTML = conta;
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

    form = eval(conta);
    draw.innerHTML = form;
    conta = String(form);
}