const Factura = require("./Factura");

class Venta {

    constructor(idVenta, cliente) {

        this.idVenta = idVenta;
        this.cliente = cliente;
        this.detalles = [];
    }

    agregarProducto(detalleVenta) {

        this.detalles.push(detalleVenta);
    }

    calcularTotal() {

        let total = 0;

        this.detalles.forEach(detalle => {
            total += detalle.calcularSubtotal();
        });

        return total;
    }

    generarFactura() {

        return new Factura(
            `FAC-${this.idVenta}`,
            this.calcularTotal()
        );
    }

}

module.exports = Venta;