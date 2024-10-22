USE ecommerce_db;

-- Tabla TipoUsuario
CREATE TABLE TipoUsuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombreTipo VARCHAR(20) NOT NULL
);

-- Tabla PaisOrigen
CREATE TABLE PaisOrigen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL
);

-- Tabla Categoria
CREATE TABLE Categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla TipoProducto
CREATE TABLE TipoProducto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla Usuario
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    constrasenna VARCHAR(10) NOT NULL,
    rut VARCHAR(10) UNIQUE NOT NULL,
    tipoUsuarioId INT,
    FOREIGN KEY (tipoUsuarioId) REFERENCES TipoUsuario(id)
);

-- Tabla Producto
CREATE TABLE Producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(200),
    imagen VARCHAR(200),
    marca VARCHAR(50),
    formato VARCHAR(10),
    fechaVencimiento DATE,
    precio FLOAT NOT NULL,
    stock INT NOT NULL,
    categoriaId INT,
    tipoProductoId INT,
    paisOrigenId INT,
    FOREIGN KEY (categoriaId) REFERENCES Categoria(id),
    FOREIGN KEY (tipoProductoId) REFERENCES TipoProducto(id),
    FOREIGN KEY (paisOrigenId) REFERENCES PaisOrigen(id)
);

-- Tabla CarritoDeCompras
CREATE TABLE CarritoDeCompras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES Usuario(id)
);

-- Tabla CarritoItem
CREATE TABLE CarritoItem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productoId INT,
    cantidad INT NOT NULL,
    carritoDeComprasId INT,
    FOREIGN KEY (productoId) REFERENCES Producto(id),
    FOREIGN KEY (carritoDeComprasId) REFERENCES CarritoDeCompras(id)
);

-- Tabla Pedido
CREATE TABLE Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES Usuario(id)
);

-- Tabla PedidoItem
CREATE TABLE PedidoItem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productoId INT,
    cantidad INT NOT NULL,
    pedidoId INT,
    FOREIGN KEY (productoId) REFERENCES Producto(id),
    FOREIGN KEY (pedidoId) REFERENCES Pedido(id)
);

-- Tabla DireccionEnvio
CREATE TABLE DireccionEnvio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(100) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    codigoPostal VARCHAR(10) NOT NULL,
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES Usuario(id)
);

-- Tabla EstadoDespacho
CREATE TABLE EstadoDespacho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombreEstado VARCHAR(20) NOT NULL
);

-- Tabla Despacho
CREATE TABLE Despacho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estado INT,
    fechaDespacho DATE,
    fechaEntregaEstimada DATE,
    direccionEnvioId INT,
    FOREIGN KEY (direccionEnvioId) REFERENCES DireccionEnvio(id),
    FOREIGN KEY (estado) REFERENCES EstadoDespacho(id)
);
