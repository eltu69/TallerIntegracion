class Display {
    constructor(displayValorRUT){
        this.displayValorRUT = displayValorRUT;
        this.valorRUT = '';
    }

    borrar() {
        this.valorRUT = this.valorRUT.toString().slice(0,-1);
        this.imprimirValores();
    }

    agregarNumero(numero) {
        this.valorRUT = this.valorRUT + numero;
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorRUT.textContent = this.valorRUT;
    }
}