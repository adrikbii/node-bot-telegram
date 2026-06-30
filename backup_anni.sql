-- MySQL dump 10.13  Distrib 8.4.10, for Linux (x86_64)
--
-- Host: localhost    Database: anni_db
-- ------------------------------------------------------
-- Server version	8.4.10-0ubuntu0.26.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `anuncios`
--

DROP TABLE IF EXISTS `anuncios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anuncios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `contenido` text NOT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anuncios`
--

LOCK TABLES `anuncios` WRITE;
/*!40000 ALTER TABLE `anuncios` DISABLE KEYS */;
INSERT INTO `anuncios` VALUES (1,'Suspensión de actividades','Las actividades académicas quedan suspendidas por mantenimiento institucional.','ACTIVO','2026-06-21 22:55:31');
/*!40000 ALTER TABLE `anuncios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calendario_academico`
--

DROP TABLE IF EXISTS `calendario_academico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendario_academico` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `url_archivo` text NOT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendario_academico`
--

LOCK TABLES `calendario_academico` WRITE;
/*!40000 ALTER TABLE `calendario_academico` DISABLE KEYS */;
INSERT INTO `calendario_academico` VALUES (1,'Calendario Académico INAN','https://tecnologicoinan.edu.ec/proyecto/imagenes/calendarioacademico.jpg','ACTIVO','2026-06-07 21:28:50');
/*!40000 ALTER TABLE `calendario_academico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carreras`
--

DROP TABLE IF EXISTS `carreras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carreras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`),
  UNIQUE KEY `nombre_2` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carreras`
--

LOCK TABLES `carreras` WRITE;
/*!40000 ALTER TABLE `carreras` DISABLE KEYS */;
INSERT INTO `carreras` VALUES (1,'Desarrollo de Software','ACTIVO'),(2,'Marketing Digital y Comercio Electrónico','ACTIVO'),(3,'Contabilidad y Asesoría Tributaria','ACTIVO'),(4,'Enfermería','ACTIVO'),(5,'Administración Presencial','ACTIVO'),(6,'Administración Híbrida','ACTIVO'),(7,'Administración Virtual','ACTIVO');
/*!40000 ALTER TABLE `carreras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciclos`
--

DROP TABLE IF EXISTS `ciclos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciclos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`),
  UNIQUE KEY `nombre_2` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciclos`
--

LOCK TABLES `ciclos` WRITE;
/*!40000 ALTER TABLE `ciclos` DISABLE KEYS */;
INSERT INTO `ciclos` VALUES (1,'1er Ciclo'),(2,'2do Ciclo'),(3,'3er Ciclo'),(4,'4to Ciclo');
/*!40000 ALTER TABLE `ciclos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactos`
--

DROP TABLE IF EXISTS `contactos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `departamento` varchar(100) NOT NULL,
  `responsable` varchar(150) DEFAULT NULL,
  `telefono` varchar(30) DEFAULT NULL,
  `correo` varchar(150) DEFAULT NULL,
  `horario_atencion` varchar(150) DEFAULT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactos`
--

LOCK TABLES `contactos` WRITE;
/*!40000 ALTER TABLE `contactos` DISABLE KEYS */;
INSERT INTO `contactos` VALUES (4,'Secretaría Académica','Personal administrativo','Pendiente','secretaria@tecnologicoinan.edu.ec','Lunes a viernes de 08h00 a 13h00 y de 14h00 a 21h00. Sábados de 07h30 a 13h00 y de 13h00 a 15h30.','ACTIVO','2026-06-16 03:53:29'),(5,'Bienestar Estudiantil','Personal de bienestar','Pendiente','bienestar@tecnologicoinan.edu.ec','Miércoles y viernes de 17h00 a 21h00. Sábados de 09h00 a 13h00.','ACTIVO','2026-06-16 03:54:21'),(6,'Talento Humano','Personal administrativo','Pendiente','talento.humano@tecnologicoinan.edu.ec','Viernes de 08h00 a 16h00. Jueves de 10h00 a 13h00 y de 18h00 a 20h00.','ACTIVO','2026-06-16 03:54:57'),(7,'Contabilidad','Personal contable','Pendiente','contabilidad@tecnologicoinan.edu.ec','Lunes a viernes de 08h30 a 13h00 y de 14h30 a 18h00.','ACTIVO','2026-06-16 03:56:40'),(8,'Vinculación','Personal de vinculación','Pendiente','vinculacion@tecnologicoinan.edu.ec','Martes de 09h00 a 18h00. Miércoles de 15h00 a 18h00. Jueves de 15h00 a 20h00. Viernes de 08h00 a 14h00.','ACTIVO','2026-06-16 03:58:17'),(9,'Titulación','Personal de titulación','Pendiente','titulacion@tecnologicoinan.edu.ec','Horario sujeto a cambios. Atención de lunes a viernes en diferentes franjas horarias entre 08h00 y 20h00.','ACTIVO','2026-06-16 04:02:10'),(10,'Rectorado','Rectorado','Pendiente','rectorado@tecnologicoinan.edu.ec','Pendiente','ACTIVO','2026-06-16 04:02:52'),(11,'Vicerrectorado','Vicerrectorado','Pendiente','vicerrectorado@tecnologicoinan.edu.ec','Pendiente','ACTIVO','2026-06-16 04:03:08'),(12,'Soporte Informático','Área de soporte','Pendiente','soporte@tecnologicoinan.edu.ec','Pendiente','ACTIVO','2026-06-16 04:03:39'),(13,'Biblioteca','Personal de biblioteca','Pendiente','biblioteca@tecnologicoinan.edu.ec','Pendiente','ACTIVO','2026-06-16 04:04:55');
/*!40000 ALTER TABLE `contactos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pregunta` text NOT NULL,
  `respuesta` text NOT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES (1,'¿Cómo solicito un certificado académico?','Debes acercarse a secretaría personalmente para realizar debida solicitud.','Secretaría','ACTIVO','2026-06-11 06:46:12'),(2,'¿Cuál es el horario de atención?','El horario de atención es de Lunes a Viernes de 08:30 a 13:00 y de 13:30 a 21:00 y Sábados de 08:00 a 13:00.','Secretaría','ACTIVO','2026-06-11 06:46:55'),(3,'¿Cómo puedo consultar la malla curricular?','La malla curricular puede ser consultada a través de la coordinación académica o los medios oficiales del instituto.','Académico','ACTIVO','2026-06-11 06:48:04'),(4,'¿Cómo solicito una tutoría?','Debes comunicarte con el docente de la asignatura o con la coordinación académica para agendar una tutoría.','Académico','ACTIVO','2026-06-11 06:48:37');
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horarios`
--

DROP TABLE IF EXISTS `horarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carrera_id` int NOT NULL,
  `ciclo_id` int NOT NULL,
  `jornada` enum('MATUTINA','NOCTURNA','SABADO') NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `url_archivo` text NOT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `carrera_id` (`carrera_id`),
  KEY `ciclo_id` (`ciclo_id`),
  CONSTRAINT `horarios_ibfk_1` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id`),
  CONSTRAINT `horarios_ibfk_2` FOREIGN KEY (`ciclo_id`) REFERENCES `ciclos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horarios`
--

LOCK TABLES `horarios` WRITE;
/*!40000 ALTER TABLE `horarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `horarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horarios_docentes`
--

DROP TABLE IF EXISTS `horarios_docentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horarios_docentes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `url_imagen` text NOT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `horarios_docentes_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horarios_docentes`
--

LOCK TABLES `horarios_docentes` WRITE;
/*!40000 ALTER TABLE `horarios_docentes` DISABLE KEYS */;
INSERT INTO `horarios_docentes` VALUES (1,2,'Horario Docente','https://ejemplo.com/horario_docente.jpg','ACTIVO','2026-06-16 08:15:26');
/*!40000 ALTER TABLE `horarios_docentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horarios_imagenes`
--

DROP TABLE IF EXISTS `horarios_imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horarios_imagenes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carrera_id` int NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `url_imagen` text NOT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_horario_carrera` (`carrera_id`),
  CONSTRAINT `horarios_imagenes_ibfk_1` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horarios_imagenes`
--

LOCK TABLES `horarios_imagenes` WRITE;
/*!40000 ALTER TABLE `horarios_imagenes` DISABLE KEYS */;
INSERT INTO `horarios_imagenes` VALUES (1,2,'Horario - Desarrollo de Software','https://ejemplo.com/horario_ds.jpg','ACTIVO','2026-06-07 21:26:01');
/*!40000 ALTER TABLE `horarios_imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informacion_institucional`
--

DROP TABLE IF EXISTS `informacion_institucional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informacion_institucional` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `contenido` text NOT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informacion_institucional`
--

LOCK TABLES `informacion_institucional` WRITE;
/*!40000 ALTER TABLE `informacion_institucional` DISABLE KEYS */;
INSERT INTO `informacion_institucional` VALUES (1,'Misión','Somos un Instituto Superior Tecnológico organizado que brinda servicios educativos de calidad para la formación integral de profesionales éticos, con competencias en emprendimiento, investigación e innovación, preparados para el campo laboral y comprometidos con el desarrollo social, la interculturalidad y la sostenibilidad.',NULL,'ACTIVO','2026-06-11 07:54:53'),(2,'Visión','Constituirnos en un referente de formación técnica y tecnológica, integrando innovación, responsabilidad social y compromiso con el desarrollo local.',NULL,'ACTIVO','2026-06-11 07:55:08'),(3,'Información General','El Instituto Tecnológico INAN ofrece programas académicos orientados a la formación profesional en diferentes áreas del conocimiento, promoviendo el desarrollo de competencias técnicas y humanas.',NULL,'ACTIVO','2026-06-11 07:56:11');
/*!40000 ALTER TABLE `informacion_institucional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mallas_curriculares`
--

DROP TABLE IF EXISTS `mallas_curriculares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mallas_curriculares` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carrera_id` int NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `url_imagen` text NOT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_malla_carrera` (`carrera_id`),
  CONSTRAINT `mallas_curriculares_ibfk_1` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mallas_curriculares`
--

LOCK TABLES `mallas_curriculares` WRITE;
/*!40000 ALTER TABLE `mallas_curriculares` DISABLE KEYS */;
INSERT INTO `mallas_curriculares` VALUES (1,1,'Malla Curricular - Desarrollo de Software','https://tecnologicoinan.edu.ec/proyecto/imagenes/malladessofware.jpg','ACTIVO','2026-06-07 20:36:18'),(2,2,'Malla Curricular - Marketing Digital y Comercio Electrónico','https://tecnologicoinan.edu.ec/proyecto/imagenes/mallamarketing.jpg','ACTIVO','2026-06-07 20:36:18'),(3,3,'Malla Curricular - Contabilidad y Asesoría Tributaria','https://tecnologicoinan.edu.ec/proyecto/imagenes/mallacontasetrib.jpg','ACTIVO','2026-06-07 20:36:18'),(4,4,'Malla Curricular - Enfermería','https://tecnologicoinan.edu.ec/proyecto/imagenes/mallaenfermeria.jpg','ACTIVO','2026-06-07 20:36:18'),(5,5,'Malla Curricular - Administración Presencial','https://tecnologicoinan.edu.ec/proyecto/imagenes/mallaadmpres.jpg','ACTIVO','2026-06-07 20:36:18'),(6,6,'Malla Curricular - Administración Híbrida','https://tecnologicoinan.edu.ec/proyecto/imagenes/mallaadminhibr.jpg','ACTIVO','2026-06-07 20:36:18'),(7,7,'Malla Curricular - Administración Virtual','https://tecnologicoinan.edu.ec/proyecto/imagenes/mallaadmvirt.jpg','ACTIVO','2026-06-07 20:36:18');
/*!40000 ALTER TABLE `mallas_curriculares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias`
--

DROP TABLE IF EXISTS `materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carrera_id` int NOT NULL,
  `ciclo_id` int NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  PRIMARY KEY (`id`),
  UNIQUE KEY `carrera_id` (`carrera_id`,`ciclo_id`,`nombre`),
  UNIQUE KEY `carrera_id_2` (`carrera_id`,`ciclo_id`,`nombre`),
  KEY `ciclo_id` (`ciclo_id`),
  CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id`),
  CONSTRAINT `materias_ibfk_2` FOREIGN KEY (`ciclo_id`) REFERENCES `ciclos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=470 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias`
--

LOCK TABLES `materias` WRITE;
/*!40000 ALTER TABLE `materias` DISABLE KEYS */;
INSERT INTO `materias` VALUES (1,1,1,'Programación 1','ACTIVO'),(2,1,1,'Lógica Informática','ACTIVO'),(3,1,1,'Sistemas Operativos 1','ACTIVO'),(4,1,1,'Matemáticas 1','ACTIVO'),(5,1,1,'Metodología a la Investigación','ACTIVO'),(6,1,1,'Ofimática en la Nube','ACTIVO'),(7,1,2,'Programación 2','ACTIVO'),(8,1,2,'Redes 1','ACTIVO'),(9,1,2,'Sistemas Operativos 2','ACTIVO'),(10,1,2,'Base de Datos 1','ACTIVO'),(11,1,2,'Estadística','ACTIVO'),(12,1,2,'Ingeniería de Software','ACTIVO'),(13,1,3,'Programación 3','ACTIVO'),(14,1,3,'Hardware y Software','ACTIVO'),(15,1,3,'Redes 2','ACTIVO'),(16,1,3,'Inglés 1','ACTIVO'),(17,1,3,'Desarrollo Web 1','ACTIVO'),(18,1,3,'Base de Datos 2','ACTIVO'),(19,1,4,'Desarrollo de Aplicaciones Móviles','ACTIVO'),(20,1,4,'Seguridad Informática','ACTIVO'),(21,1,4,'Big Data','ACTIVO'),(22,1,4,'Inglés 2','ACTIVO'),(23,1,4,'Desarrollo Web 2','ACTIVO'),(24,1,4,'Unidad de Integración Curricular','ACTIVO'),(25,2,1,'Gestión Administrativa','ACTIVO'),(26,2,1,'Contabilidad','ACTIVO'),(27,2,1,'Marketing','ACTIVO'),(28,2,1,'Matemáticas','ACTIVO'),(29,2,1,'Metodología a la Investigación','ACTIVO'),(30,2,1,'Ofimática','ACTIVO'),(31,2,2,'Emprendimiento e Innovación','ACTIVO'),(32,2,2,'Publicidad Digital','ACTIVO'),(33,2,2,'Estadística','ACTIVO'),(34,2,2,'Legislación Laboral','ACTIVO'),(35,2,2,'Neuroventas','ACTIVO'),(36,2,2,'Marketing Instruccional','ACTIVO'),(37,2,3,'Identidad Corporativa','ACTIVO'),(38,2,3,'Presupuestos','ACTIVO'),(39,2,3,'Investigación de Mercados','ACTIVO'),(40,2,3,'Inglés 1','ACTIVO'),(41,2,3,'Marketing Digital','ACTIVO'),(42,2,3,'Marketing Estratégico','ACTIVO'),(43,2,4,'Gestión de Talento Humano','ACTIVO'),(44,2,4,'Plan de MKT y Estrategias Digitales','ACTIVO'),(45,2,4,'Inglés 2','ACTIVO'),(46,2,4,'Comercio Exterior y E-Commerce','ACTIVO'),(47,2,4,'Promoción y Posicionamiento en la Web','ACTIVO'),(48,2,4,'Unidad de Integración Curricular','ACTIVO'),(49,3,1,'Gestión Administrativa','ACTIVO'),(50,3,1,'Contabilidad','ACTIVO'),(51,3,1,'Tributación 1','ACTIVO'),(52,3,1,'Matemáticas','ACTIVO'),(53,3,1,'Metodología a la Investigación','ACTIVO'),(54,3,1,'Ofimática','ACTIVO'),(55,3,2,'Contabilidad de Costos','ACTIVO'),(56,3,2,'Estadística','ACTIVO'),(57,3,2,'Legislación Laboral','ACTIVO'),(58,3,2,'Contabilidad II','ACTIVO'),(59,3,2,'Matemática Financiera','ACTIVO'),(60,3,2,'Tributación II','ACTIVO'),(61,3,3,'Presupuestos','ACTIVO'),(62,3,3,'Análisis Financiero','ACTIVO'),(63,3,3,'Costos II','ACTIVO'),(64,3,3,'Inglés 1','ACTIVO'),(65,3,3,'Auditoría 1','ACTIVO'),(66,3,3,'Contabilidad III','ACTIVO'),(67,3,4,'Inglés II','ACTIVO'),(68,3,4,'Auditoría II','ACTIVO'),(69,3,4,'Emprendimiento','ACTIVO'),(70,3,4,'Administración Financiera','ACTIVO'),(71,3,4,'Auditoría Tributaria','ACTIVO'),(72,3,4,'Unidad de Integración Curricular','ACTIVO'),(73,4,1,'Fundamentos y Técnicas Básicas de Enfermería','ACTIVO'),(74,4,1,'Morfofisiología','ACTIVO'),(75,4,1,'Psicología y Salud Mental','ACTIVO'),(76,4,1,'Comunicación Oral y Escrita','ACTIVO'),(77,4,1,'Ofimática','ACTIVO'),(78,4,2,'Enfermería en Pediatría','ACTIVO'),(79,4,2,'Fundamentos de Farmacología','ACTIVO'),(80,4,2,'Salud Pública','ACTIVO'),(81,4,2,'Metodología de la Investigación','ACTIVO'),(82,4,2,'Inglés I','ACTIVO'),(83,4,3,'Enfermería en Gineco-Obstetricia','ACTIVO'),(84,4,3,'Enfermedades Básicas y Terapéuticas Esenciales','ACTIVO'),(85,4,3,'Est. Vital y Data Clínica','ACTIVO'),(86,4,3,'Bioética de la Enfermería','ACTIVO'),(87,4,3,'Inglés II','ACTIVO'),(88,4,4,'Enfermería del Adulto Mayor','ACTIVO'),(89,4,4,'Riesgos y Normas de Bioseguridad','ACTIVO'),(90,4,4,'Enfermería Familiar y Comunitaria','ACTIVO'),(91,4,4,'Inglés III','ACTIVO'),(92,4,4,'Unidad de Integración Curricular','ACTIVO'),(93,5,1,'Gestión Administrativa','ACTIVO'),(94,5,1,'Contabilidad','ACTIVO'),(95,5,1,'Marketing','ACTIVO'),(96,5,1,'Matemáticas','ACTIVO'),(97,5,1,'Metodología a la Investigación','ACTIVO'),(98,5,1,'Ofimática','ACTIVO'),(99,5,2,'Emprendimiento e Innovación','ACTIVO'),(100,5,2,'Contabilidad de Costos','ACTIVO'),(101,5,2,'Estadística','ACTIVO'),(102,5,2,'Legislación Laboral','ACTIVO'),(103,5,2,'Neuroventas','ACTIVO'),(104,5,2,'Matemáticas Financieras','ACTIVO'),(105,5,3,'Inglés I','ACTIVO'),(106,5,3,'Presupuestos','ACTIVO'),(107,5,3,'Investigación de Mercados','ACTIVO'),(108,5,3,'Legislación Tributaria','ACTIVO'),(109,5,3,'Marketing Digital','ACTIVO'),(110,5,3,'Análisis Financiero','ACTIVO'),(111,5,4,'Comercio Exterior y E-Commerce','ACTIVO'),(112,5,4,'Formulación y Evaluación de Proyectos','ACTIVO'),(113,5,4,'Planificación Estratégica','ACTIVO'),(114,5,4,'Gestión del Talento Humano','ACTIVO'),(115,5,4,'Inglés II','ACTIVO'),(116,5,4,'Integración Curricular','ACTIVO'),(117,6,1,'Gestión Administrativa','ACTIVO'),(118,6,1,'Contabilidad','ACTIVO'),(119,6,1,'Marketing','ACTIVO'),(120,6,1,'Matemáticas','ACTIVO'),(121,6,1,'Metodología a la Investigación','ACTIVO'),(122,6,1,'Ofimática','ACTIVO'),(123,6,2,'Emprendimiento e Innovación','ACTIVO'),(124,6,2,'Contabilidad de Costos','ACTIVO'),(125,6,2,'Estadística','ACTIVO'),(126,6,2,'Legislación Laboral','ACTIVO'),(127,6,2,'Neuroventas','ACTIVO'),(128,6,2,'Matemáticas Financieras','ACTIVO'),(129,6,3,'Inglés I','ACTIVO'),(130,6,3,'Presupuestos','ACTIVO'),(131,6,3,'Investigación de Mercados','ACTIVO'),(132,6,3,'Legislación Tributaria','ACTIVO'),(133,6,3,'Marketing Digital','ACTIVO'),(134,6,3,'Análisis Financiero','ACTIVO'),(135,6,4,'Comercio Exterior y E-Commerce','ACTIVO'),(136,6,4,'Formulación y Evaluación de Proyectos','ACTIVO'),(137,6,4,'Planificación Estratégica','ACTIVO'),(138,6,4,'Gestión del Talento Humano','ACTIVO'),(139,6,4,'Inglés II','ACTIVO'),(140,6,4,'Integración Curricular','ACTIVO'),(141,7,1,'Fundamentos de Administración','ACTIVO'),(142,7,1,'Contabilidad','ACTIVO'),(143,7,1,'Ventas','ACTIVO'),(144,7,1,'Matemáticas','ACTIVO'),(145,7,1,'Comunicación Oral y Escrita','ACTIVO'),(146,7,1,'Estadística','ACTIVO'),(147,7,2,'Emprendimiento','ACTIVO'),(148,7,2,'Contabilidad de Costos','ACTIVO'),(149,7,2,'Introducción a la Investigación','ACTIVO'),(150,7,2,'Informática Empresarial','ACTIVO'),(151,7,2,'Investigación de Mercados','ACTIVO'),(152,7,2,'Gestión de la Producción','ACTIVO'),(153,7,3,'Matemáticas Financieras','ACTIVO'),(154,7,3,'Legislación Empresarial','ACTIVO'),(155,7,3,'Legislación Tributaria','ACTIVO'),(156,7,3,'Marketing Digital','ACTIVO'),(157,7,3,'Gestión de Talento Humano','ACTIVO'),(158,7,3,'Presupuestos','ACTIVO'),(159,7,4,'Comercio Exterior','ACTIVO'),(160,7,4,'Formulación y Evaluación de Proyectos','ACTIVO'),(161,7,4,'Estrategia Empresarial','ACTIVO'),(162,7,4,'Análisis Financiero','ACTIVO'),(163,7,4,'E-Commerce','ACTIVO'),(164,7,4,'Trabajo de Titulación','ACTIVO');
/*!40000 ALTER TABLE `materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN'),(2,'DOCENTE'),(3,'ESTUDIANTE');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cedula` varchar(10) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol` enum('ESTUDIANTE','DOCENTE','ADMIN') DEFAULT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `carrera_id` int DEFAULT NULL,
  `rol_id` int DEFAULT NULL,
  `horario_url` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cedula` (`cedula`),
  KEY `fk_usuario_rol` (`rol_id`),
  CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'1234567890','Adminuser','admin123','ADMIN','ACTIVO',NULL,1,NULL),(2,'0987654321','Docenteuser','docente123','DOCENTE','ACTIVO',NULL,2,'https://ejemplo.com/horario_docente.jpg'),(3,'1122334455','Estudianteuser','estudiante123','ESTUDIANTE','ACTIVO',2,3,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-30 22:08:44
