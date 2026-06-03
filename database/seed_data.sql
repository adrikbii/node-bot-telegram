-- ANNI BOT
USE anni_db;

-- CARRERAS
INSERT INTO carreras (nombre) VALUES
('Desarrollo de Software'),
('Marketing Digital y Comercio Electrónico'),
('Contabilidad y Asesoría Tributaria'),
('Enfermería'),
('Administración Presencial'),
('Administración Híbrida'),
('Administración Virtual');

-- CICLOS
INSERT INTO ciclos (nombre) VALUES
('1er Ciclo'),
('2do Ciclo'),
('3er Ciclo'),
('4to Ciclo');

-- DESARROLLO DE SOFTWARE
-- carrera_id = 1
INSERT INTO materias (carrera_id, ciclo_id, nombre) VALUES
(1, 1, 'Programación 1'),
(1, 1, 'Lógica Informática'),
(1, 1, 'Sistemas Operativos 1'),
(1, 1, 'Matemáticas 1'),
(1, 1, 'Metodología a la Investigación'),
(1, 1, 'Ofimática en la Nube'),

(1, 2, 'Programación 2'),
(1, 2, 'Redes 1'),
(1, 2, 'Sistemas Operativos 2'),
(1, 2, 'Base de Datos 1'),
(1, 2, 'Estadística'),
(1, 2, 'Ingeniería de Software'),

(1, 3, 'Programación 3'),
(1, 3, 'Hardware y Software'),
(1, 3, 'Redes 2'),
(1, 3, 'Inglés 1'),
(1, 3, 'Desarrollo Web 1'),
(1, 3, 'Base de Datos 2'),

(1, 4, 'Desarrollo de Aplicaciones Móviles'),
(1, 4, 'Seguridad Informática'),
(1, 4, 'Big Data'),
(1, 4, 'Inglés 2'),
(1, 4, 'Desarrollo Web 2'),
(1, 4, 'Unidad de Integración Curricular');

-- MARKETING DIGITAL Y COMERCIO ELECTRÓNICO
-- carrera_id = 2
INSERT INTO materias (carrera_id, ciclo_id, nombre) VALUES
(2, 1, 'Gestión Administrativa'),
(2, 1, 'Contabilidad'),
(2, 1, 'Marketing'),
(2, 1, 'Matemáticas'),
(2, 1, 'Metodología a la Investigación'),
(2, 1, 'Ofimática'),

(2, 2, 'Emprendimiento e Innovación'),
(2, 2, 'Publicidad Digital'),
(2, 2, 'Estadística'),
(2, 2, 'Legislación Laboral'),
(2, 2, 'Neuroventas'),
(2, 2, 'Marketing Instruccional'),

(2, 3, 'Identidad Corporativa'),
(2, 3, 'Presupuestos'),
(2, 3, 'Investigación de Mercados'),
(2, 3, 'Inglés 1'),
(2, 3, 'Marketing Digital'),
(2, 3, 'Marketing Estratégico'),

(2, 4, 'Gestión de Talento Humano'),
(2, 4, 'Plan de MKT y Estrategias Digitales'),
(2, 4, 'Inglés 2'),
(2, 4, 'Comercio Exterior y E-Commerce'),
(2, 4, 'Promoción y Posicionamiento en la Web'),
(2, 4, 'Unidad de Integración Curricular');

-- CONTABILIDAD Y ASESORÍA TRIBUTARIA
-- carrera_id = 3
INSERT INTO materias (carrera_id, ciclo_id, nombre) VALUES
(3, 1, 'Gestión Administrativa'),
(3, 1, 'Contabilidad'),
(3, 1, 'Tributación 1'),
(3, 1, 'Matemáticas'),
(3, 1, 'Metodología a la Investigación'),
(3, 1, 'Ofimática'),

(3, 2, 'Contabilidad de Costos'),
(3, 2, 'Estadística'),
(3, 2, 'Legislación Laboral'),
(3, 2, 'Contabilidad II'),
(3, 2, 'Matemática Financiera'),
(3, 2, 'Tributación II'),

(3, 3, 'Presupuestos'),
(3, 3, 'Análisis Financiero'),
(3, 3, 'Costos II'),
(3, 3, 'Inglés 1'),
(3, 3, 'Auditoría 1'),
(3, 3, 'Contabilidad III'),

(3, 4, 'Inglés II'),
(3, 4, 'Auditoría II'),
(3, 4, 'Emprendimiento'),
(3, 4, 'Administración Financiera'),
(3, 4, 'Auditoría Tributaria'),
(3, 4, 'Unidad de Integración Curricular');

-- ENFERMERÍA
-- carrera_id = 4
INSERT INTO materias (carrera_id, ciclo_id, nombre) VALUES
(4, 1, 'Fundamentos y Técnicas Básicas de Enfermería'),
(4, 1, 'Morfofisiología'),
(4, 1, 'Psicología y Salud Mental'),
(4, 1, 'Comunicación Oral y Escrita'),
(4, 1, 'Ofimática'),

(4, 2, 'Enfermería en Pediatría'),
(4, 2, 'Fundamentos de Farmacología'),
(4, 2, 'Salud Pública'),
(4, 2, 'Metodología de la Investigación'),
(4, 2, 'Inglés I'),

(4, 3, 'Enfermería en Gineco-Obstetricia'),
(4, 3, 'Enfermedades Básicas y Terapéuticas Esenciales'),
(4, 3, 'Est. Vital y Data Clínica'),
(4, 3, 'Bioética de la Enfermería'),
(4, 3, 'Inglés II'),

(4, 4, 'Enfermería del Adulto Mayor'),
(4, 4, 'Riesgos y Normas de Bioseguridad'),
(4, 4, 'Enfermería Familiar y Comunitaria'),
(4, 4, 'Inglés III'),
(4, 4, 'Unidad de Integración Curricular');

-- ADMINISTRACIÓN PRESENCIAL
-- carrera_id = 5
INSERT INTO materias (carrera_id, ciclo_id, nombre) VALUES
(5, 1, 'Gestión Administrativa'),
(5, 1, 'Contabilidad'),
(5, 1, 'Marketing'),
(5, 1, 'Matemáticas'),
(5, 1, 'Metodología a la Investigación'),
(5, 1, 'Ofimática'),

(5, 2, 'Emprendimiento e Innovación'),
(5, 2, 'Contabilidad de Costos'),
(5, 2, 'Estadística'),
(5, 2, 'Legislación Laboral'),
(5, 2, 'Neuroventas'),
(5, 2, 'Matemáticas Financieras'),

(5, 3, 'Inglés I'),
(5, 3, 'Presupuestos'),
(5, 3, 'Investigación de Mercados'),
(5, 3, 'Legislación Tributaria'),
(5, 3, 'Marketing Digital'),
(5, 3, 'Análisis Financiero'),

(5, 4, 'Comercio Exterior y E-Commerce'),
(5, 4, 'Formulación y Evaluación de Proyectos'),
(5, 4, 'Planificación Estratégica'),
(5, 4, 'Gestión del Talento Humano'),
(5, 4, 'Inglés II'),
(5, 4, 'Integración Curricular');

-- ADMINISTRACIÓN HÍBRIDA
-- carrera_id = 6
INSERT INTO materias (carrera_id, ciclo_id, nombre) VALUES
(6, 1, 'Gestión Administrativa'),
(6, 1, 'Contabilidad'),
(6, 1, 'Marketing'),
(6, 1, 'Matemáticas'),
(6, 1, 'Metodología a la Investigación'),
(6, 1, 'Ofimática'),

(6, 2, 'Emprendimiento e Innovación'),
(6, 2, 'Contabilidad de Costos'),
(6, 2, 'Estadística'),
(6, 2, 'Legislación Laboral'),
(6, 2, 'Neuroventas'),
(6, 2, 'Matemáticas Financieras'),

(6, 3, 'Inglés I'),
(6, 3, 'Presupuestos'),
(6, 3, 'Investigación de Mercados'),
(6, 3, 'Legislación Tributaria'),
(6, 3, 'Marketing Digital'),
(6, 3, 'Análisis Financiero'),

(6, 4, 'Comercio Exterior y E-Commerce'),
(6, 4, 'Formulación y Evaluación de Proyectos'),
(6, 4, 'Planificación Estratégica'),
(6, 4, 'Gestión del Talento Humano'),
(6, 4, 'Inglés II'),
(6, 4, 'Integración Curricular');

-- ADMINISTRACIÓN VIRTUAL
-- carrera_id = 7
INSERT INTO materias (carrera_id, ciclo_id, nombre) VALUES
(7, 1, 'Fundamentos de Administración'),
(7, 1, 'Contabilidad'),
(7, 1, 'Ventas'),
(7, 1, 'Matemáticas'),
(7, 1, 'Comunicación Oral y Escrita'),
(7, 1, 'Estadística'),

(7, 2, 'Emprendimiento'),
(7, 2, 'Contabilidad de Costos'),
(7, 2, 'Introducción a la Investigación'),
(7, 2, 'Informática Empresarial'),
(7, 2, 'Investigación de Mercados'),
(7, 2, 'Gestión de la Producción'),

(7, 3, 'Matemáticas Financieras'),
(7, 3, 'Legislación Empresarial'),
(7, 3, 'Legislación Tributaria'),
(7, 3, 'Marketing Digital'),
(7, 3, 'Gestión de Talento Humano'),
(7, 3, 'Presupuestos'),

(7, 4, 'Comercio Exterior'),
(7, 4, 'Formulación y Evaluación de Proyectos'),
(7, 4, 'Estrategia Empresarial'),
(7, 4, 'Análisis Financiero'),
(7, 4, 'E-Commerce'),
(7, 4, 'Trabajo de Titulación');