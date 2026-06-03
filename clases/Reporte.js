class Reporte {

    static ventasTotales(listaVentas) {

        let total = 0;

        listaVentas.forEach(venta => {
            total += venta.calcularTotal();
        });

        return total;
    }

}

module.exports = Reporte;