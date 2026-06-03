class Factura {

    constructor(numeroFactura, subtotal) {

        this.numeroFactura = numeroFactura;
        this.subtotal = subtotal;
        this.iva = subtotal * 0.21;
        this.total = subtotal + this.iva;
    }

    mostrarFactura() {

        console.log("================================");
        console.log("FACTURA");
        console.log("================================");
        console.log("Número:", this.numeroFactura);
        console.log("Subtotal:", this.subtotal);
        console.log("IVA:", this.iva);
        console.log("TOTAL:", this.total);
        console.log("================================");
    }

}

module.exports = Factura;