var n;
var resolucao;
var conta = String("");
var form;
var draw = window.document.getElementById("areatela");

function digitar(caracter) {
    n = caracter;

    if (conta.length > 15) {
        draw.innerHTML = "numero max</i>";
    } else {
        conta = conta + n;
        form = conta;
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
    resolucao = parseFloat(form);
    alert(resolucao);
}