-- Tabla 1: Información personal y perfil profesional del estudiante
CREATE TABLE IF NOT EXISTS cv_estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    profesion VARCHAR(120) NOT NULL,
    perfil TEXT NOT NULL,
    correo VARCHAR(150) NOT NULL,
    telefono VARCHAR(30) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    linkedin VARCHAR(255),
    github VARCHAR(255),
    avatar_url VARCHAR(255)
);

-- Tabla 2: Formación académica, habilidades, experiencia y proyectos
CREATE TABLE IF NOT EXISTS cv_trayectoria (
    id SERIAL PRIMARY KEY,
    estudiante_id INTEGER NOT NULL REFERENCES cv_estudiantes(id) ON DELETE CASCADE,
    categoria VARCHAR(30) NOT NULL CHECK (categoria IN ('FORMACION', 'HABILIDAD', 'EXPERIENCIA', 'PROYECTO')),
    titulo VARCHAR(150) NOT NULL,
    institucion VARCHAR(150) NOT NULL,
    periodo VARCHAR(60) NOT NULL,
    descripcion TEXT NOT NULL
);