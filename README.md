# 👨‍💻 Autores

> **Grupo de Trabajo — Proyecto Final**
> Materia: Introducción al Análisis Sistémico · Alfabetización Digital

---

# 👨‍🏫 Profesor

**Narciso Perez**

---

# 👥 Integrantes

| # | Integrante | Responsabilidades principales     |
| - | ---------- | --------------------------------- |
| 1 | Teo        | Desarrollo del sistema            |
| 2 | Ingrid     | Análisis y documentación          |
| 3 | Joaquín    | Diagramas UML y pruebas           |
| 4 | Bautista   | Gestión de GitHub y documentación |

---

# 🏪 Sistema de Gestión Comercial POO

## 📋 Descripción del Proyecto

Sistema de Gestión Comercial desarrollado en JavaScript utilizando Programación Orientada a Objetos (POO).

El objetivo del sistema es administrar las operaciones comerciales permitiendo registrar clientes, productos, ventas, facturas, reportes y auditorías.

El proyecto fue desarrollado aplicando conceptos de:

* Programación Orientada a Objetos (POO)
* Herencia
* Encapsulamiento
* Modularización
* Historias de Usuario
* Git y GitHub
* UML (Unified Modeling Language)
* GitHub Projects
* GitHub Issues
* Pull Requests

---

# 🎯 Objetivos

* Gestionar clientes.
* Gestionar productos.
* Registrar ventas.
* Calcular subtotales.
* Calcular impuestos.
* Generar facturas.
* Obtener reportes comerciales.
* Registrar auditorías.
* Aplicar Programación Orientada a Objetos.
* Utilizar control de versiones profesional.

---

# 🛠 Tecnologías Utilizadas

| Tecnología | Uso                        |
| ---------- | -------------------------- |
| JavaScript | Lógica del sistema         |
| Node.js    | Ejecución del proyecto     |
| Git        | Control de versiones       |
| GitHub     | Repositorio remoto         |
| UML        | Diseño orientado a objetos |
| Draw.io    | Diagramas UML              |

---

# 📂 Estructura del Proyecto

```text
Sistema-Gestion-Comercial-POO
│
├── docs
│   ├── diagrama-clases.png
│   └── diagrama-clases.drawio
│
├── clases
│   ├── Persona.js
│   ├── Cliente.js
│   ├── Producto.js
│   ├── DetalleVenta.js
│   ├── Venta.js
│   ├── Factura.js
│   ├── Reporte.js
│   └── Auditoria.js
│
├── app.js
│
└── README.md
```

---

# 📊 Diagrama de Clases UML

El siguiente diagrama UML representa la estructura orientada a objetos del sistema y las relaciones entre las clases principales.

## Vista del Diagrama

![Diagrama UML](docs/diagrama-clases.png)

## Archivo Editable

```text
docs/diagrama-clases.drawio
```

### Relaciones Principales

* Cliente hereda de Persona.
* Venta contiene varios DetalleVenta.
* DetalleVenta referencia un Producto.
* Venta genera una Factura.
* Reporte obtiene información de ventas.
* Auditoria registra eventos del sistema.

---

# 🏗 Diseño Orientado a Objetos

## Clase Persona

### Atributos

* nombre
* apellido
* email
* telefono

### Responsabilidad

Almacenar información general de una persona.

---

## Clase Cliente

### Herencia

Hereda de Persona.

### Atributos

* idCliente

### Responsabilidad

Representar los clientes registrados.

---

## Clase Producto

### Atributos

* idProducto
* nombre
* categoria
* precio
* stock

### Responsabilidad

Gestionar productos disponibles.

---

## Clase DetalleVenta

### Atributos

* producto
* cantidad

### Responsabilidad

Representar cada línea de una venta.

---

## Clase Venta

### Atributos

* idVenta
* cliente
* detalles

### Funciones

* agregarProducto()
* calcularSubtotal()
* calcularIVA()
* calcularTotal()
* generarFactura()

### Responsabilidad

Gestionar el proceso de venta.

---

## Clase Factura

### Atributos

* numeroFactura
* subtotal
* iva
* total

### Responsabilidad

Emitir comprobantes comerciales.

---

## Clase Reporte

### Responsabilidad

Generar estadísticas y reportes.

---

## Clase Auditoria

### Responsabilidad

Registrar eventos y actividades.

---

# 📖 Historias de Usuario

## Historia de Usuario 1 – Registrar Cliente

**COMO** vendedor

**QUIERO** registrar clientes

**PARA** mantener organizada la información comercial.

---

## Historia de Usuario 2 – Registrar Producto

**COMO** administrador

**QUIERO** registrar productos

**PARA** controlar el stock disponible.

---

## Historia de Usuario 3 – Registrar Venta

**COMO** vendedor

**QUIERO** registrar ventas

**PARA** llevar control de las operaciones comerciales.

---

## Historia de Usuario 4 – Calcular Subtotal

**COMO** sistema

**QUIERO** calcular subtotales automáticamente

**PARA** evitar errores manuales.

---

## Historia de Usuario 5 – Calcular IVA

**COMO** sistema

**QUIERO** calcular impuestos automáticamente

**PARA** obtener el total correcto.

---

## Historia de Usuario 6 – Generar Factura

**COMO** vendedor

**QUIERO** generar facturas

**PARA** entregar comprobantes.

---

## Historia de Usuario 7 – Generar Reportes

**COMO** administrador

**QUIERO** visualizar reportes

**PARA** analizar el rendimiento comercial.

---

## Historia de Usuario 8 – Auditoría

**COMO** administrador

**QUIERO** registrar eventos del sistema

**PARA** mantener control y seguridad.

---

# 🔀 Control de Versiones

El proyecto se desarrolló utilizando Git y GitHub siguiendo buenas prácticas de desarrollo colaborativo.

## Flujo de Trabajo

1. Creación de Issues.
2. Creación de ramas específicas.
3. Desarrollo de funcionalidades.
4. Commit de cambios.
5. Push al repositorio remoto.
6. Pull Request.
7. Revisión y Merge a main.

## Ejemplos de Ramas

```text
main
feature/registrar-cliente
feature/registrar-producto
feature/generar-factura
feature/reportes
feature/auditoria
```

## Herramientas Utilizadas

* Git
* GitHub
* GitHub Projects
* GitHub Issues
* Pull Requests

---

# 📌 Gestión del Proyecto

Se utilizó GitHub Projects para la organización de tareas.

### Estados

* Backlog
* To Do
* In Progress
* Review
* Done

### Elementos Gestionados

* Historias de Usuario
* Issues
* Pull Requests
* Mejoras del Sistema

---

# ▶ Ejecución del Proyecto

Instalar Node.js.

Verificar instalación:

```bash
node -v
```

Ejecutar el sistema:

```bash
node app.js
```

---

# 📈 Beneficios del Sistema

* Organización de ventas.
* Gestión de clientes.
* Gestión de productos.
* Control de stock.
* Facturación automática.
* Reportes comerciales.
* Auditoría de acciones.
* Aplicación de POO.
* Uso de UML.
* Uso profesional de Git y GitHub.

---

# 📄 Licencia

Proyecto académico desarrollado con fines educativos para la materia Introducción al Análisis Sistémico y Alfabetización Digital.
