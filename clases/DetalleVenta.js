class DetalleVenta {

    constructor(producto, cantidad) {

        this.producto = producto;
        this.cantidad = cantidad;
    }

    calcularSubtotal() {

        return this.producto.precio * this.cantidad;
    }

}

module.exports = DetalleVenta;