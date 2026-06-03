class Persona {

    constructor(nombre, apellido, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
    }

    mostrarDatos() {
        return `
Nombre: ${this.nombre}
Apellido: ${this.apellido}
Email: ${this.email}
Teléfono: ${this.telefono}
`;
    }

}

module.exports = Persona;