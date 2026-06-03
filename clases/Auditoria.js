class Auditoria {

    static registrarEvento(evento) {

        const fecha = new Date();

        console.log(
            `[${fecha.toLocaleString()}] ${evento}`
        );
    }

}

module.exports = Auditoria;