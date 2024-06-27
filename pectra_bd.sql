-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 20:44:22
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pectra`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `CitaID` int(11) NOT NULL,
  `FechaCita` date NOT NULL,
  `HoraCita` time NOT NULL,
  `SalonID` int(11) NOT NULL,
  `ServicioID` int(11) NOT NULL,
  `EstilistaID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estilistas`
--

CREATE TABLE `estilistas` (
  `EstilistaID` int(11) NOT NULL,
  `Nombre` text DEFAULT NULL,
  `Apellido` text DEFAULT NULL,
  `Descripcion` text DEFAULT NULL,
  `SalonID` int(11) DEFAULT NULL,
  `ServicioID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estilistas`
--

INSERT INTO `estilistas` (`EstilistaID`, `Nombre`, `Apellido`, `Descripcion`, `SalonID`, `ServicioID`) VALUES
(2, 'cristian', 'pestana', 'Soy yo jiji', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenas`
--

CREATE TABLE `resenas` (
  `ResenaID` int(11) NOT NULL,
  `Contenido` text DEFAULT NULL,
  `UsuarioID` int(11) DEFAULT NULL,
  `Puntuacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `RolID` int(11) NOT NULL,
  `NombreRol` varchar(50) DEFAULT NULL,
  `DescripcionRol` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`RolID`, `NombreRol`, `DescripcionRol`) VALUES
(1, 'Cliente', 'Usuario que agenda citas y utiliza los servicios'),
(2, 'Dueño', 'Usuario que administra el salón de belleza y tiene acceso completo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salon`
--

CREATE TABLE `salon` (
  `SalonID` int(11) NOT NULL,
  `NombreSalón` varchar(100) DEFAULT NULL,
  `Dirección` varchar(200) DEFAULT NULL,
  `Numero` varchar(20) DEFAULT NULL,
  `Descripción` text DEFAULT NULL,
  `Horarios` varchar(100) DEFAULT NULL,
  `LinkPagina` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `ServicioID` int(11) NOT NULL,
  `NombreServicio` varchar(100) DEFAULT NULL,
  `Descripcion` text DEFAULT NULL,
  `Precio` decimal(10,2) DEFAULT NULL,
  `Duracion` time DEFAULT NULL,
  `SalónID` int(11) DEFAULT NULL,
  `EstilistaID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `UsuarioID` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Apellido` varchar(50) DEFAULT NULL,
  `Correo` varchar(100) DEFAULT NULL,
  `Contrasena` varchar(100) DEFAULT NULL,
  `Edad` int(11) DEFAULT NULL,
  `TipoDocumento` varchar(20) DEFAULT NULL,
  `NumeroDocumento` varchar(20) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL,
  `RolID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`UsuarioID`, `Nombre`, `Apellido`, `Correo`, `Contrasena`, `Edad`, `TipoDocumento`, `NumeroDocumento`, `Telefono`, `RolID`) VALUES
(3, 'cristian', 'Berrio', 'Pestana', '3121284', 12, 'cedula', '121334424', '121323', 2),
(4, 'erika', 'pestana', 'erika@gmail.com', '3432454', 12, 'cedula_extrajera', '31234', '124134', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`CitaID`),
  ADD KEY `SalonID` (`SalonID`),
  ADD KEY `ServicioID` (`ServicioID`),
  ADD KEY `EstilistaID` (`EstilistaID`);

--
-- Indices de la tabla `estilistas`
--
ALTER TABLE `estilistas`
  ADD PRIMARY KEY (`EstilistaID`),
  ADD KEY `SalonID` (`SalonID`),
  ADD KEY `ServicioID` (`ServicioID`);

--
-- Indices de la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`ResenaID`),
  ADD KEY `UsuarioID` (`UsuarioID`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`RolID`);

--
-- Indices de la tabla `salon`
--
ALTER TABLE `salon`
  ADD PRIMARY KEY (`SalonID`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`ServicioID`),
  ADD KEY `EstilistaID` (`EstilistaID`),
  ADD KEY `SalonID` (`SalónID`) USING BTREE;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`UsuarioID`),
  ADD KEY `RolID` (`RolID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `CitaID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estilistas`
--
ALTER TABLE `estilistas`
  MODIFY `EstilistaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `resenas`
--
ALTER TABLE `resenas`
  MODIFY `ResenaID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `RolID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `salon`
--
ALTER TABLE `salon`
  MODIFY `SalonID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `ServicioID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `UsuarioID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`SalonID`) REFERENCES `salon` (`SalonID`),
  ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`ServicioID`) REFERENCES `servicios` (`ServicioID`),
  ADD CONSTRAINT `citas_ibfk_3` FOREIGN KEY (`EstilistaID`) REFERENCES `estilistas` (`EstilistaID`);

--
-- Filtros para la tabla `estilistas`
--
ALTER TABLE `estilistas`
  ADD CONSTRAINT `estilistas_ibfk_1` FOREIGN KEY (`SalonID`) REFERENCES `salon` (`SalonID`),
  ADD CONSTRAINT `estilistas_ibfk_2` FOREIGN KEY (`ServicioID`) REFERENCES `servicios` (`ServicioID`);

--
-- Filtros para la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD CONSTRAINT `resenas_ibfk_1` FOREIGN KEY (`UsuarioID`) REFERENCES `usuarios` (`UsuarioID`) ON DELETE CASCADE;

--
-- Filtros para la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD CONSTRAINT `servicios_ibfk_1` FOREIGN KEY (`SalónID`) REFERENCES `salon` (`SalonID`),
  ADD CONSTRAINT `servicios_ibfk_2` FOREIGN KEY (`EstilistaID`) REFERENCES `estilistas` (`EstilistaID`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`RolID`) REFERENCES `rol` (`RolID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
