-- ANNI BOT
-- Base de Datos MySQL
-- Instituto Superior Tecnológico INAN
CREATE DATABASE IF NOT EXISTS anni_db;
USE anni_db;

-- TABLA USUARIOS
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cedula VARCHAR(10),
    nombre VARCHAR(100),
    password VARCHAR(255),
    rol ENUM('ESTUDIANTE','DOCENTE','ADMIN') NOT NULL,
    estado ENUM('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- TABLA CARRERAS
CREATE TABLE carreras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    estado ENUM('ACTIVO','INACTIVO') DEFAULT 'ACTIVO'
);

-- TABLA CICLOS
CREATE TABLE ciclos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- TABLA MATERIAS
CREATE TABLE materias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carrera_id INT NOT NULL,
    ciclo_id INT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    estado ENUM('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',

    FOREIGN KEY (carrera_id)
        REFERENCES carreras(id),

    FOREIGN KEY (ciclo_id)
        REFERENCES ciclos(id)
);

-- TABLA HORARIOS
CREATE TABLE horarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    materia_id INT NOT NULL,
    docente VARCHAR(150),
    dia VARCHAR(20) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    aula VARCHAR(50),
    estado ENUM('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
    jornada ENUM('MATUTINA','NOCTURNA','SABADO'),

    FOREIGN KEY (materia_id)
        REFERENCES materias(id)
);


-- TABLA CALENDARIO ACADEMICO
CREATE TABLE calendario_academico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    estado ENUM('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLA MALLAS

CREATE TABLE mallas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carrera_id INT,
    imagen_url VARCHAR(255)
);

-- TABLA INFORMACION INSTITUCIONAL
CREATE TABLE informacion_institucional (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    contenido TEXT NOT NULL,
    categoria VARCHAR(100),
    estado ENUM('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- TABLA FAQ
CREATE TABLE faq (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pregunta TEXT NOT NULL,
    respuesta TEXT NOT NULL,
    categoria VARCHAR(100),
    estado ENUM('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLA CONTACTOS
CREATE TABLE contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    departamento VARCHAR(100) NOT NULL,
    responsable VARCHAR(150),
    telefono VARCHAR(10),
    correo VARCHAR(150),
    horario_atencion VARCHAR(150),
    estado ENUM('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE usuarios
ADD UNIQUE (cedula);

ALTER TABLE carreras
ADD UNIQUE (nombre);

ALTER TABLE ciclos
ADD UNIQUE (nombre);

ALTER TABLE materias
ADD UNIQUE (carrera_id, ciclo_id, nombre);