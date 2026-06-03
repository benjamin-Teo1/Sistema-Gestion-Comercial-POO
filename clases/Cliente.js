const Persona = require("./Persona");

class Cliente extends Persona {

    constructor(idCliente, nombre, apellido, email, telefono) {

        super(nombre, apellido, email, telefono);

        this.idCliente = idCliente;
    }

    obtenerCliente() {

        return `
ID Cliente: ${this.idCliente}
${this.mostrarDatos()}
`;
    }

}

module.exports = Cliente;