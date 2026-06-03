const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {

    console.log("\n========================");
    console.log("SISTEMA COMERCIAL");
    console.log("========================");
    console.log("1. Registrar Cliente");
    console.log("2. Registrar Producto");
    console.log("3. Registrar Venta");
    console.log("4. Reportes");
    console.log("5. Auditoría");
    console.log("0. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {

        switch(opcion){

            case "1":
                console.log("Registrar Cliente");
                break;

            case "2":
                console.log("Registrar Producto");
                break;

            case "3":
                console.log("Registrar Venta");
                break;

            case "4":
                console.log("Ver Reportes");
                break;

            case "5":
                console.log("Auditoría");
                break;

            case "0":
                rl.close();
                return;

            default:
                console.log("Opción inválida");
        }

        mostrarMenu();
    });
}

mostrarMenu();