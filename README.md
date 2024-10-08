## Tostado Perfecto - API

Somos una e-commerce diseñada para personalizar tu experiencia de café en casa. Ofrecemos granos de café de especialidad, maquinaria y accesorios personalizados según tus gustos. Nuestra API permite gestionar un proceso de compra sencillo y entregas rápidas y confiables.

## Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)
3. [Configuración](#configuración)
4. [Ejecución - Desarrollo](#ejecución---desarrollo)
5. [Ejecución - Producción](#ejecución---producción)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Documentación de la API](#documentación-de-la-api)
8. [Flujo de Trabajo](#flujo-de-trabajo)
9. [Contacto](#contacto)

## 1. Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes componentes:

- ![Node.js Icon](https://img.icons8.com/color/48/000000/nodejs.png) [Node.js](https://nodejs.org/) (para desarrollo local sin Docker)
- ![Docker Icon](https://img.icons8.com/color/48/000000/docker.png) [Docker](https://www.docker.com/get-started) (para entornos Dockerizados)
- ![VS Code Icon](https://img.icons8.com/color/48/000000/visual-studio-code-2019.png) [Visual Studio Code](https://code.visualstudio.com/download), se recomienda este editor de código.

## 2. Instalación

Ya teniendo instalados los programas anteriormente recomendados, a continuación deberá:

- 2.1. Clonar el repositorio:
  git clone https://github.com/bootcamp-uchile-2024/grupo-4-backend.git

`````
- 2.2. Entrar en el directorio del proyecto:
````bash
cd grupo-4-backend
`````

- 2.3. Instalar las dependencias:

```bash
npm install
```

## 3. Configuración

Según el ambiente en el que se desee desarrollar la API, se deben completar la siguiente información en las variables de entorno:

- PORT: Indica el número del puerto en el que se ejecutará la API.
- Ambiente: Indica el nombre del ambiente (Desarrollo o Producción) en el cual se ejecutará la API.

## 4. Ejecución - Desarrollo

- Las variables de entorno estarán definidas en el archivo .env.develop; dicho archivo tendrá en su interior definidas las variables nombradas en la sección anterior (PORT - Ambiente).
- Se inicia el docker desktop y a continuación, desde la ruta grupo-4-backend se debe colocar el siguiente comando:

```bash
.../grupo-4-backend/docker compose up
```

## 5. Ejecución - Producción

- Las variables de entorno estarán definidas en el archivo .env.production; dicho archivo tendrá en su interior definidas las variables nombradas en la sección anterior (PORT - Ambiente).
- Se inicia el docker desktop y a continuación, desde la ruta grupo-4-backend/prod se debe colocar el siguiente comando:

```bash
.../grupo-4-backend/prod/docker compose up
```

## 6. Estructura del Proyecto

A continuación se presentará un diagrama de árbol de la estructura actual del proyecto:

```bash
src
├── carrito-de-compras
│   ├── dto
│   │   ├── create-carrito-de-compra.dto.ts
│   │   ├── update-carrito-de-compra.dto.ts
│   │   ├── usuario-carrito-de-compra.dto.ts
│   ├── entities
│   │   ├── carrito-de-compra.entity.ts
│   │   ├── carrito-item.entity.ts
│   ├── carrito-de-compras.controller.spec.ts
│   ├── carrito-de-compras.controller.ts
│   ├── carrito-de-compras.module.ts
│   ├── carrito-de-compras.service.spec.ts
│   ├── carrito-de-compras.service.ts
├── general
│   ├── general.filter.spec.ts
│   ├── general.filter.ts
│   ├── general.interceptor.spec.ts
│   ├── general.interceptor.ts
│   ├── general.middleware.spec.ts
│   ├── general.middleware.ts
├── models
│   ├── categorias.ts
│   ├── tipos.ts
├── pedido
│   ├── dto
│   │   ├── create-pedido.dto.ts
│   │   ├── update-pedido.dto.ts
│   ├── entities
│   │   ├── pedido-item.entity.ts
│   │   ├── pedido.entity.ts
│   ├── pedido.controller.spec.ts
│   ├── pedido.controller.ts
│   ├── pedido.module.ts
│   ├── pedido.service.spec.ts
│   ├── pedido.service.ts
├── productos
│   ├── dto
│   │   ├── carrito-producto.dto.ts
│   │   ├── create-producto.dto.ts
│   │   ├── update-producto.dto.ts
│   ├── entities
│   │   ├── producto.entity.ts
│   ├── productos.controller.spec.ts
│   ├── productos.controller.ts
│   ├── productos.module.ts
│   ├── productos.service.spec.ts
│   ├── productos.service.ts
├── usuario
│   ├── dto
│   │   ├── create-usuario.dto.ts
│   │   ├── pedido-usuario.dto.ts
│   │   ├── update-usuario.dto.ts
│   ├── entities
│   │   ├── usuario.entity.ts
│   ├── usuario.controller.spec.ts
│   ├── usuario.controller.ts
│   ├── usuario.module.ts
│   ├── usuario.service.spec.ts
│   ├── usuario.service.ts
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts

```

## 7. Documentación de la API

La documentación de esta API esta hecha en SWAGGER. Puedes acceder a la documentación despues de iniciar el servidor.

- 7.1. Se inicia el proyecto, segun el ambiente:

```bash
 docker compose up
```

- 7.2. Accede al Swagger desde el navegador:

```bash
 Debe dirigirse a la siguiente URL: http://localhost:3000/api (se deberá ajustar el puerto según sea el ambiente seleccionado)
```

Posteriormente, le llevará a la interfaz de Swagger; donde podrá acceder a los endpoints diseñados para la API.

## 8. Flujo de Trabajo

Actualmente el flujo de trabajo se ha ido realizando conforme a las exigencias del desarrollo del proyecto. Cada rama representa el avance del proyecto con respecto a las solicitudes para cada entrega del mismo. Las actividades de avance realizadas en cada rama, posteriormente se unen en la rama principal `main` de trabajo.

## 9. Contacto

Si tienes alguna duda, puedes contactarnos a través de:

- [@Gfigueroa](https://github.com/GEFR00) Gabriela Figueroa - Lider Backend
- [@Rdonoso](https://github.com/ShagoDonosoP) Roberto Donoso - Integrante Backend
- [@Csuescun](https://github.com/Suescun85) Carlos Suescun - Integrante Backend
