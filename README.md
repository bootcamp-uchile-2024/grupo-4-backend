## Tostado Perfecto - API

Somos una e-commerce diseñada para personalizar tu experiencia de café en casa. Ofrecemos granos de café de especialidad, maquinaria y accesorios personalizados según tus gustos. Nuestra API permite gestionar un proceso de compra sencillo y entregas rápidas y confiables.

## Tabla de Contenidos

1. [Requisitos Previos](#1-requisitos-previos)
2. [Instalación](#2-instalación)
3. [Configuración](#3-configuración)
4. [Ejecución - Desarrollo](#4-ejecución---desarrollo)
5. [Ejecución - Producción](#5-ejecución---producción)
6. [Configuración del ORM](#6-configuración-del-orm)
7. [Configuración de MySql](#7-configuación-de-mysql)
8. [Configuracion de AWS Server](#8-configuración-aws-server)
9. [Estructura del Proyecto](#9-estructura-del-proyecto)
10. [Documentación de la API](#10-documentación-de-la-api)
11. [Implementación de servidor de estáticos](#11-servidor-de-estáticos)
12. [Flujo de Trabajo](#11-flujo-de-trabajo)
13. [Contacto](#12-contacto)

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

## 6. Configuración del ORM

 Para poder conectar la API con la base de datos es necesario realizar lo siguiente:

 ### Instalación del ORM en nuetro proyecto NEST
```bash
    npm install @nestjs/typeorm typeorm mysql2
```
Luego de ello toca configurar el ORM de forma modular, creando el modulo

```bash
    nest g module 
```
y luego en la sección de import desarrollar la siguiente estructura:

```bash

@Module({
    imports: [
        TypeOrmModule.forRoot({
         type: 'mysql',
         host: 'bd-server',
         port: 3306,
         username: 'root',
         password: '*******',
         database: 'cafeinados',
        entities: [
        Categoria, 
        EstadoDespacho, 
        PaisOrigen, 
        TipoProducto, 
        TipoUsuario, 
        PedidoItem,
        CarritoItem,
        CarritoDeCompras,
        Despacho,
        Pedido,
        DireccionEnvio,
        Usuario,
        Productos
             
         ],
    }),
    OrmModule
    ],
})
export class OrmModule {}

```

## 7. Configuación de MySQL.

Para poder utilizar las tablas en la base de datos , se deeben realizar el siguiente procedimiento:

### Configurar el Workbench con:
- Nombre de la conexion:se sugieren 2 nombres Desarollo y Produccion.

![Configuracion](/Imagenes/BD1.jpg)

### Ingresar la contraseña:

- El password se encuentra en las variables de entorno ya sea para el ambiente de Desarrollo o de Producción.

![Password](/Imagenes/BD2.jpg)

### Ingreso a la Base de Datos.

- Una vez ingresada la informacion que estará contenida en las variables de entorno para cada ambiente se podrá ingresar exitosamente a la base de datos "Cafeinados".

![Interior BD](/Imagenes/BD3.jpg)

## 8. Configuración AWS Server.
Para establecer una exitosa conexión entre la API - Producción y el servidor en AWS se requieren tener en cuenta las siguientes recomendaciones:

- Crear la cuenta en AWS.
- Crear una instancia en EC2 de AWS tomando en cuenta que se deberán configurar los siguientes parámetros:
1. Nombre de la instancia.
2. Seleccionar AMI (Amazon Machine Image).
3. Seleccionar el tipo de instancia (t2.micro).
4. Configurar la capacidad permitida.
5. Configurar la Key Pair, si no se tiene una clave de acceso - hacer click en CREAR PAR DE CLAVES; de allí se procederá a asignar un nombre a la clave para posteriormente descargar el (archivo.pem). 
    NOTA: Evitar la pérdida de la llave de acceso ya que sin esta no será posible realizar la conexión con la instancia.
6. Configurar el grupo de seguridad (Security Group):
En esta etapa se deberá agregar las reglas que permitirán el acceso a la instancia, tales como:
- SSH (puerto 22): permitirá el ingreso de las IP al interior de la instancia (IP pública actual de la/las computadoras).
- Node (puerto NODE): Anywhere (0.0.0.0/0) por medio de esta regla se podrá realizar la conexión con el Frontend.
- Mysql (puerto MYSQL): permitirá la conexión con la base de datos relacional (IP pública actual).
7. Una vez realizados los pasos anteriores dar a LANZAR INSTANCIA, y ya quedará lista para utilizar.

- Una vez creada la instancia, se deberá configurar el servidor del lado del cliente en la PC; para ello es necesario utilizar la clave privada; la cual fue dada por AWS al momento de la creación de la instancia.
    - Para realizar la configuración del servidor del lado cliente, a parte de la ya mencionada clave privada se deberá tener la IP pública, la cual esta en la sección de detalles -> resumen de la instancia. Con estos (2) elementos se podrá acceder y así proceder a configurar el servidor del lado cliente. 
    
    NOTA: La IP pública se mantedrá inalterable hasta que no se detenga la instancia, en caso contrario se actualizará la misma.
    
- Después de haber ingresado con éxito al servidor lado cliente se deberá realizar la instalación de Docker en el interior del mismo. Para dicha instalación se deberán realizar las siguientes instrucciones:

    https://docs.docker.com/engine/install/ubuntu/
    https://docs.docker.com/engine/install/linux-postinstall/ 

- Posteriormente, antes de ingresar los archivos al servidor del lado cliente se deberá:  

- Crear la imágen en el Docker, actualizando el número de versión de la API, la cual será utilizada para establecer la conexión con el server EC2 en AWS.
- Adjuntan las variables de entorno con la información necesaria para levantar el docker-compose.
- Ya teniendo las variables de entorno y el compose, se procede a dar inicio al contenedor.
- Finalmente quedará apta la instancia con los archivos ingresados para dar funcionalidad a la App en conjunto con el EC2.

### Conexión con Produccón a traves del servidor:
http://http://44.201.117.138:3000/api#/

## 9. Estructura del Proyecto

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

## 10. Documentación de la API

La documentación de esta API esta hecha en SWAGGER. Puedes acceder a la documentación despues de iniciar el servidor.

- 7.1. Se inicia el proyecto, segun el ambiente:


 docker compose up

- 7.2. Accede al Swagger desde el navegador:


 Debe dirigirse a la siguiente URL: http://localhost:3000/api (se deberá ajustar el puerto según sea el ambiente seleccionado)


Posteriormente, le llevará a la interfaz de Swagger; donde podrá acceder a los endpoints diseñados para la API.

## 11 . Implementación de servidor de estáticos

    Instalar dependencia
    
     npm install @nestjs/serve-static
  

    Posteriormente se deberá configurar en el Module de la aplicación:

    ![Estatico](/Imagenes/estatico.jpg)

 
    Se deja un ejemplo del link de estáticos del proyecto:

    http://44.201.117.138:3000/estaticos/molinillo_cafe.jpg


## 12. Flujo de Trabajo

Actualmente el flujo de trabajo se ha ido realizando conforme a las exigencias del desarrollo del proyecto. Cada rama representa el avance del proyecto con respecto a las solicitudes para cada entrega del mismo. Las actividades de avance realizadas en cada rama, posteriormente se unen en la rama principal `main` de trabajo.

## 13. Contacto

Si tienes alguna duda, puedes contactarnos a través de:

- [@Gfigueroa](https://github.com/GEFR00) Gabriela Figueroa - Lider Backend
- [@Csuescun](https://github.com/Suescun85) Carlos Suescun - Integrante Backend
