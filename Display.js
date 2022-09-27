class Display {
    constructor(displayValorRUT){
        this.displayValorRUT = displayValorRUT;
        this.valorRUT = '';
    }

    agregarNumero(numero) {
        this.valorRUT = this.valorRUT + numero;
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorRUT.textContent = this.valorRUT;
    }
}