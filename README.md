# 🏪 Sistema de Gestión Comercial POO

## 📋 Descripción del Proyecto

Sistema de Gestión Comercial desarrollado en JavaScript utilizando Programación Orientada a Objetos (POO).

El objetivo del sistema es administrar las operaciones comerciales de una empresa permitiendo registrar clientes, productos, ventas, facturas, reportes y auditorías.

Este proyecto fue desarrollado aplicando conceptos de:

- Programación Orientada a Objetos (POO)
- Herencia
- Encapsulamiento
- Modularización
- Historias de Usuario
- Git y GitHub
- Diagramas UML

---

# 🎯 Objetivos

- Gestionar clientes.
- Gestionar productos.
- Registrar ventas.
- Calcular subtotales e impuestos.
- Generar facturas.
- Obtener reportes comerciales.
- Registrar eventos de auditoría.

---

# 🛠 Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| JavaScript | Lógica del sistema |
| Node.js | Ejecución del proyecto |
| Git | Control de versiones |
| GitHub | Repositorio remoto |
| UML | Diseño de clases |

---

# 📂 Estructura del Proyecto

```text
Sistema-Gestion-Comercial-POO
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

# 🏗 Diseño Orientado a Objetos

## Clase Persona

Clase base del sistema.

### Atributos

- nombre
- apellido
- email
- telefono

### Responsabilidad

Almacenar información general de una persona.

---

## Clase Cliente

Hereda de la clase Persona.

### Atributos

- idCliente

### Responsabilidad

Representar los clientes registrados en el sistema.

---

## Clase Producto

### Atributos

- idProducto
- nombre
- categoria
- precio
- stock

### Responsabilidad

Gestionar los productos disponibles para la venta.

---

## Clase DetalleVenta

### Atributos

- producto
- cantidad

### Responsabilidad

Representar cada producto vendido dentro de una venta.

---

## Clase Venta

### Atributos

- idVenta
- cliente
- detalles

### Responsabilidad

Gestionar el proceso completo de venta.

### Funciones

- agregarProducto()
- calcularTotal()
- generarFactura()

---

## Clase Factura

### Atributos

- numeroFactura
- subtotal
- iva
- total

### Responsabilidad

Generar comprobantes de venta.

---

## Clase Reporte

### Responsabilidad

Generar estadísticas y reportes comerciales.

---

## Clase Auditoria

### Responsabilidad

Registrar eventos importantes del sistema.

---

# 📊 Diagrama de Clases UML

```text
                 ┌─────────────┐
                 │   Persona   │
                 └──────┬──────┘
                        │
                        │ Herencia
                        ▼
                 ┌─────────────┐
                 │   Cliente   │
                 └─────────────┘


┌─────────────┐
│  Producto   │
└──────┬──────┘
       │
       │
       ▼
┌─────────────┐
│DetalleVenta │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Venta    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Factura   │
└─────────────┘


┌─────────────┐
│   Reporte   │
└─────────────┘


┌─────────────┐
│  Auditoria  │
└─────────────┘
```

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

**PARA** obtener el total correcto de la venta.

---

## Historia de Usuario 6 – Generar Factura

**COMO** vendedor

**QUIERO** generar facturas

**PARA** entregar comprobantes a los clientes.

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

- Organización de ventas.
- Control de clientes.
- Gestión de productos.
- Control de stock.
- Facturación automática.
- Reportes comerciales.
- Auditoría de acciones.

---

# 👨‍💻 Autor

**Benjamín Teo**

Proyecto académico desarrollado para la materia Laboratorio de Computación utilizando Programación Orientada a Objetos, Historias de Usuario y UML.
