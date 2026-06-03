const Cliente = require("./clases/Cliente");
const Producto = require("./clases/Producto");
const DetalleVenta = require("./clases/DetalleVenta");
const Venta = require("./clases/Venta");
const Auditoria = require("./clases/Auditoria");

const cliente = new Cliente(
    1,
    "Juan",
    "Perez",
    "juan@gmail.com",
    "351123456"
);

const mouse = new Producto(
    1,
    "Mouse Gamer",
    "Periféricos",
    25000,
    50
);

const teclado = new Producto(
    2,
    "Teclado Mecánico",
    "Periféricos",
    40000,
    20
);

const venta = new Venta(
    1001,
    cliente
);

venta.agregarProducto(
    new DetalleVenta(mouse, 2)
);

venta.agregarProducto(
    new DetalleVenta(teclado, 1)
);

const factura = venta.generarFactura();

factura.mostrarFactura();

Auditoria.registrarEvento(
    "Venta registrada correctamente"
);