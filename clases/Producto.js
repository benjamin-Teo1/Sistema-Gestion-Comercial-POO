class Producto {

    constructor(idProducto, nombre, categoria, precio, stock) {

        this.idProducto = idProducto;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }

    actualizarStock(cantidad) {
        this.stock -= cantidad;
    }

    mostrarProducto() {

        return `
ID: ${this.idProducto}
Nombre: ${this.nombre}
Categoría: ${this.categoria}
Precio: $${this.precio}
Stock: ${this.stock}
`;
    }

}

module.exports = Producto;