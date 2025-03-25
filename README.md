## 🚀 **Proyecto de Gestión de Talleres de Motos**

Este proyecto tiene como objetivo la **gestión de talleres de motos**, donde se llevan a cabo citas, mantenimientos y el control de inventarios de productos, como repuestos y accesorios. La plataforma permite gestionar usuarios, clientes, sucursales, talleres, citas y mantener un inventario eficiente de los productos.

### 🛠 **Tecnologías Utilizadas**

- **NestJS**: Framework de backend basado en Node.js que utiliza TypeScript.
- **Prisma**: ORM (Object Relational Mapping) para manejar la base de datos de manera eficiente.
- **GraphQL**: API que permite consultas eficientes y estructuradas entre el cliente y el servidor.
- **PostgreSQL**: Base de datos relacional para almacenar toda la información del sistema.

---

## 📌 **Arquitectura del Proyecto**

El proyecto sigue el patrón de **Clean Architecture** para garantizar una buena separación de responsabilidades y facilitar el mantenimiento y la escalabilidad. A continuación, se detalla la estructura del proyecto:

### 📦 **Estructura de Carpetas**

```plaintext
📦 src/
│── 📂 application/        # Casos de uso (Aplicación)
│   ├── 📂 dto/            # Data Transfer Objects (DTOs)
│   ├── 📂 use-cases/      # Casos de uso (lógica de negocio)
│
│── 📂 domain/             # Dominio de negocio
│   ├── 📂 entities/       # Entidades de dominio
│   ├── 📂 repositories/   # Interfaces de repositorios
│
│── 📂 infrastructure/     # Infraestructura
│   ├── 📂 config/         # Configuración de Prisma
│   ├── 📂 persistence/    # Implementaciones de repositorios
│
│── 📂 interfaces/         # Interfaces de entrada (GraphQL)
│   ├── 📂 graphql/        # Resolvers y esquemas
│
│── 📂 main.ts             # Punto de entrada de la aplicación
│── 📂 app.module.ts       # Módulo raíz
│── 📂 user.module.ts      # Módulo de usuario
```

### 📂 **Descripción de Carpetas**

#### 📂 `application/`
Esta capa contiene los **casos de uso** y la lógica de negocio.

- **`dto/`**: Contiene los **Data Transfer Objects (DTOs)** que se usan para definir la forma de los datos que entran y salen de las capas de la aplicación.
- **`use-cases/`**: Aquí se definen las acciones que puede realizar la aplicación, como crear un usuario, agendar una cita, realizar un mantenimiento, etc. Esta capa interactúa con los repositorios para obtener o modificar los datos.

#### 📂 `domain/`
Contiene la **lógica de dominio** que es independiente de cualquier tecnología externa.

- **`entities/`**: Aquí se encuentran las entidades que representan las **tablas de la base de datos**, como `Cliente`, `Usuario`, `Mantenimiento`, etc.
- **`repositories/`**: Define las interfaces que se utilizan para interactuar con las bases de datos, como obtener un cliente, guardar una cita, etc. Las implementaciones de estos repositorios estarán en la capa de infraestructura.

#### 📂 `infrastructure/`
Contiene los detalles de implementación, como el acceso a la base de datos.

- **`config/`**: Configura Prisma y otras dependencias externas.
- **`persistence/`**: Implementaciones de los repositorios utilizando Prisma para interactuar con la base de datos.

#### 📂 `interfaces/`
Contiene las **interfaces de entrada** de la aplicación, en este caso usando **GraphQL**.

- **`graphql/`**: Define los **resolvers** y los **esquemas** de GraphQL que permiten la interacción entre el cliente y el servidor.

---

## 📚 **Modelo de Base de Datos**

A continuación se detallan las tablas que componen el modelo de base de datos para la gestión del taller de motos:
![Untitled](https://github.com/user-attachments/assets/7f03d2f9-84af-43cb-8908-d4fa32e13906)

## Colaboradores
- [Kevin Villegas](https://github.com/kevin-villegas13)
- [Julián Andrés Caracas](https://github.com/julianandrescaracas0623)
- [Alejandro Galvis Giraldo](https://github.com/iburpy)
- [gburpy](https://github.com/gburpy)

