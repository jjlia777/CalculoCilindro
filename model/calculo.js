class Calculadora {
    static volumeCilindro(raio, altura) {
        const pi = Math.PI;
        return pi * raio ** 2 * altura;
    }
}

module.exports = Calculadora;