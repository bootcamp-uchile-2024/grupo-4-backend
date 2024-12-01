INSERT INTO TipoUsuario (nombreTipo) VALUES
('ADMIN'),
('ADMIN_LECTURA'),
('INVITADO'),
('USUARIO_LOGGEADO');

-- Insertar datos en la tabla PaisOrigen
INSERT INTO PaisOrigen (nombre) VALUES
('Chile'),
('Colombia'),
('Perú'),
('Brasil'),
('Etiopía'),
('México'),
('Venezuela'),
('Honduras'),
('Costa Rica'),
('Guatemala');

-- Insertar datos en la tabla Categoria
INSERT INTO Categoria (nombre) VALUES
('Cafés'),
('Máquinas de Café'),
('Accesorios de Café'),
('Tazas'),
('Merchandising'),
('Libros sobre Café'),
('Box'),
('Suplementos');

-- Insertar datos en la tabla TipoProducto
INSERT INTO TipoProducto (nombre) VALUES
('Nuevo'),
('Usado'),
('Reacondicionado'),
('Edición Especial'),
('Oferta'),
('Promoción');

-- Insertar datos en la tabla Usuario
INSERT INTO Usuario (nombre, apellido, email, constrasenna, rut, tipoUsuarioId) VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'pass1234', '12345678-9', 1),
('María', 'González', 'maria.gonzalez@example.com', 'pass1234', '98765432-1', 2),
('Carlos', 'Fernández', 'carlos.fernandez@example.com', 'pass1234', '11122333-4', 4),
('Ana', 'Lopez', 'ana.lopez@example.com', 'pass1234', '55566778-2', 3),
('Luis', 'Ramírez', 'luis.ramirez@example.com', 'pass1234', '22233445-6', 4),
('Elena', 'Morales', 'elena.morales@example.com', 'pass1234', '99900111-3', 4),
('Pedro', 'García', 'pedro.garcia@example.com', 'pass1234', '44455667-5', 3),
('Laura', 'Martínez', 'laura.martinez@example.com', 'pass1234', '33344556-7', 3),
('Sofía', 'Hernández', 'sofia.hernandez@example.com', 'pass1234', '88899000-8', 4),
('Diego', 'Cruz', 'diego.cruz@example.com', 'pass1234', '66677889-0', 2);

-- Insertar datos en la tabla Producto
INSERT INTO Producto (nombre, descripcion, imagen, marca, formato, fechaVencimiento, precio, stock, categoriaId, tipoProductoId, paisOrigenId, destacado) VALUES
('Café Arábica', 'Café de grano Arábica de alta calidad', 'estaticos/cafe_arabica.jpg', 'Café Premium', 'Grano', NULL, 10000, 100, 1, 1, 1, 0),
('Café Robusta', 'Café de grano Robusta con un sabor fuerte', 'estaticos/cafe_robusta.jpg', 'Café Fuerte', 'Grano', NULL, 5990, 150, 1, 1, 2, 0),
('Máquina de Café Espresso', 'Máquina de café espresso de alta presión', 'estaticos/maquina_espresso.jpg', 'CaféTech', 'Eléctrica', NULL, 299990, 50, 2, 1, 1, 0),
('Molinillo de Café', 'Molinillo de café manual', 'estaticos/molinillo_cafe.jpg', 'CaféMaster', 'Manual', NULL, 30000, 75, 3, 1, 1, 0),
('Taza de Café', 'Taza de cerámica para café', 'estaticos/taza_cafe.jpg', 'CaféArt', 'Cerámica', NULL, 15000, 200, 4, 1, 1, 0),
('Libro sobre Café', 'Todo sobre la preparación del café', 'estaticos/libro_cafe.jpg', 'Editorial Café', 'Libro', NULL, 20000, 150, 6, 1, 3, 0),
('Filtro de Café', 'Filtro reutilizable para preparar café', 'estaticos/filtro_cafe.jpg', 'EcoCafé', 'Accesorio', NULL, 10000, 100, 3, 1, 1, 0),
('Café Orgánico', 'Café orgánico certificado de especialidad', 'estaticos/cafe_organico.jpg', 'Café Verde', 'Grano', NULL, 12990, 80, 1, 1, 1, 0),
('Café de Especialidad', 'Café de especialidad de origen único', 'estaticos/cafe_especialidad.jpg', 'Café Único', 'Grano', NULL, 14990, 60, 1, 1, 1, 0),
('Máquina de Café de Goteo', 'Máquina de café de goteo, ideal para casa', 'estaticos/maquina_goteo.jpg', 'CaféEasy', 'Eléctrica', NULL, 49990, 100, 2, 1, 1, 0);

-- Insertar datos en la tabla CarritoDeCompras
INSERT INTO CarritoDeCompras (usuarioId) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

-- Insertar datos en la tabla CarritoItem
INSERT INTO CarritoItem (productoId, cantidad, carritoDeComprasId) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 1, 2),
(4, 3, 2),
(5, 2, 3),
(6, 1, 4),
(7, 1, 4),
(8, 2, 5),
(9, 3, 6),
(10, 1, 6);

-- Insertar datos en la tabla Pedido
INSERT INTO Pedido (fecha, usuarioId) VALUES
('2024-10-01', 1),
('2024-10-05', 2),
('2024-10-10', 3),
('2024-10-15', 4),
('2024-10-20', 5),
('2024-10-25', 6),
('2024-10-30', 7),
('2024-11-01', 8),
('2024-11-05', 9),
('2024-11-10', 10);

-- Insertar datos en la tabla PedidoItem
INSERT INTO PedidoItem (productoId, cantidad, pedidoId) VALUES
(1, 1, 1),
(2, 1, 1),
(3, 2, 2),
(4, 1, 2),
(5, 3, 3),
(6, 1, 4),
(7, 1, 4),
(8, 2, 5),
(9, 3, 6),
(10, 1, 7),
(1, 1, 8),
(2, 2, 9),
(3, 3, 10),
(4, 1, 10);

-- Insertar datos en la tabla DireccionEnvio
INSERT INTO DireccionEnvio (direccion, ciudad, codigoPostal, usuarioId) VALUES
('Av. Libertador 1234', 'Santiago', '8320000', 1),
('Calle Falsa 5678', 'Valparaíso', '2340000', 2),
('Calle 1, N°234', 'Concepción', '4030000', 3),
('Calle del Sol 12', 'La Serena', '1700000', 4),
('Calle Luna 45', 'Antofagasta', '1240000', 5),
('Calle 1234', 'Temuco', '4780000', 6),
('Calle 987', 'Talca', '3460000', 7),
('Calle 456', 'Iquique', '1100000', 8),
('Calle 789', 'Coquimbo', '4600000', 9),
('Calle 000', 'Osorno', '5500000', 10);

-- Insertar datos en la tabla EstadoDespacho
INSERT INTO EstadoDespacho (nombreEstado) VALUES
('Pendiente'),
('En Proceso'),
('Enviado'),
('Entregado'),
('Cancelado'),
('Devuelto'),
('Reembolsado'),
('Retrasado'),
('En Almacén'),
('Completado');

-- Insertar datos en la tabla Despacho
INSERT INTO Despacho (estado, fechaDespacho, fechaEntregaEstimada, direccionEnvioId) VALUES
(1, '2024-10-02', '2024-10-05', 1),
(2, '2024-10-06', '2024-10-10', 2),
(3, '2024-10-11', '2024-10-15', 3),
(4, '2024-10-16', '2024-10-20', 4),
(5, '2024-10-21', '2024-10-25', 5),
(1, '2024-10-26', '2024-10-30', 6),
(2, '2024-11-01', '2024-11-05', 7),
(3, '2024-11-06', '2024-11-10', 8),
(4, '2024-11-11', '2024-11-15', 9),
(5, '2024-11-16', '2024-11-20', 10);
