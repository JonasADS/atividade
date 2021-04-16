//operações devem retornar o resultado

var calcula = {

    soma: function (a, b) {
        return a + b
    },

    multi: function (a, b) {
        return a * b
    },

    div: function (a, b) {
        return a / b
    },

    sub: function (a, b) {
        return a - b
    },

    resto: function (a, b) {
        return a % b
    }
}
var operacao = function (n1, n2, operacao) {
    if (operacao == "soma") {
        return calcula.soma(n1, n2)
    } else if (operacao == "sub") {
        return calcula.sub(n1, n2)
    } else if (operacao == "div") {
        return calcula.div(n1, n2)
    } else if (operacao == "multi") {
        return calcula.multi(n1, n2)
    }
}
//tem q fazer o export por ultimo
module.exports = operacao