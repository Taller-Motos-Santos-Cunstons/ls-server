<a name="readme-top"></a>

## 🚀 **Proyecto de Gestión de Talleres de Motos**

Este proyecto tiene como objetivo la **gestión de talleres de motos**, donde se llevan a cabo citas, mantenimientos y el control de inventarios de productos, como repuestos y accesorios. La plataforma permite gestionar usuarios, clientes, sucursales, talleres, citas y mantener un inventario eficiente de los productos.

### 🛠 **Tecnologías Utilizadas**

- **NestJS**: Framework de backend basado en Node.js que utiliza TypeScript.
- **Prisma**: ORM (Object Relational Mapping) para manejar la base de datos de manera eficiente.
- **GraphQL**: API que permite consultas eficientes y estructuradas entre el cliente y el servidor.
- **PostgreSQL**: Base de datos relacional para almacenar toda la información del sistema.

---

## 📌 **Arquitectura del Proyecto**

El proyecto sigue una **arquitectura modular**, lo que permite mantener una organización clara del código y facilita la extensibilidad del sistema. Cada módulo se encarga de una parte específica del negocio.

### 📆 **Estructura de Carpetas**

```plaintext
src/
│── modules/
│   ├── user/
│   │   ├── user.module.ts
│   │   ├── dto/
│   │   ├── resolvers/
│   │   ├── repositories/
│   ├── client/
│   ├── motorcycle/
│   ├── citation/
│   ├── workshop/
│   ├── inventory/
│── prisma/
│   ├── schema.prisma
│── main.ts
│── app.module.ts
```

### 📚 **Descripción de Carpetas**

#### 📂 `modules/`

Cada módulo representa una funcionalidad específica del sistema y contiene:

- **`module.ts`**: Archivo que define el módulo en NestJS.
- **`service.ts`**: Contiene la lógica de negocio.
- **`controller.ts`**: Define los endpoints REST para la interacción con el módulo.
- **`dto/`**: Contiene los **Data Transfer Objects (DTOs)** que validan los datos de entrada.
- **`resolvers/`**: Contiene los resolvers de **GraphQL**.
- **`repositories/`**: Implementaciones de los repositorios usando **Prisma**.

#### 📂 `prisma/`

Contiene la configuración y esquema de la base de datos gestionada con Prisma.

---

## 📚 **Modelo de Base de Datos**

A continuación se detallan las tablas que componen el modelo de base de datos para la gestión del taller de motos:
![Untitled](https://github.com/user-attachments/assets/7f03d2f9-84af-43cb-8908-d4fa32e13906)

## Colaboradores

<a href="https://github.com/Taller-Motos-Santos-Cunstons/ls-server/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Taller-Motos-Santos-Cunstons/ls-server" />
</a>
<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>
