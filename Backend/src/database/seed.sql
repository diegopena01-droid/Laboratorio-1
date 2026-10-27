-- Datos de Estudiante 1 (Cristhian Pulido) y Estudiante 2 (Pareja)
INSERT INTO cv_estudiantes (nombre, profesion, perfil, correo, telefono, ciudad, github)
VALUES
    (
        'Cristhian Pulido',
        'Estudiante de Ingeniería de Sistemas',
        'Estudiante apasionado por el desarrollo web full-stack, arquitecturas escalables y bases de datos relacionales. Enfocado en construir soluciones frontend con Angular y APIs en Node.js.',
        'cristhianpulidor26@gmail.com',
        '+57 315 123 4567',
        'Tuluá, Valle del Cauca',
        'https://github.com/cristhianpulido',
       
    (
        'Alejandro Peña',
        'Estudiante de Ingeniería de Sistemas',
        'Desarrollador orientado a frontend y diseño de interfaces con Angular y TypeScript. Experiencia en integración de APIs REST, buenas prácticas y metodologías ágiles.',
        'diego.pena01@uceva.edu.co',
        '+57 318 987 6543',
        'El Dovio, Valle del Cauca',
        'https://github.com/alemontoya',
    );

-- Trayectoria (Formación, Habilidades, Experiencia, Proyectos)
INSERT INTO cv_trayectoria (estudiante_id, categoria, titulo, institucion, periodo, descripcion)
VALUES
    -- Trayectoria Cristhian Pulido (id: 1)
    (1, 'FORMACION', 'Ingeniería de Sistemas', 'Unidad Central del Valle del Cauca (UCEVA)', '2022 - Presente', 'Cursando semestre actual con énfasis en Programación en Ambiente Web, Bases de Datos y Estructuras de Datos.'),
    (1, 'FORMACION', 'Bachiller Técnico en Informática', 'Institución Educativa Técnica', '2016 - 2021', 'Énfasis en fundamentos de lógica computacional y mantenimiento de sistemas.'),
    (1, 'HABILIDAD', 'Desarrollo Frontend con Angular & TypeScript', 'UCEVA Web I', '2024 - Presente', 'Componentes standalone, signals, routing jerárquico, RxJS y Bootstrap 5.'),
    (1, 'HABILIDAD', 'Desarrollo Backend con Node.js & Express', 'Desarrollo Web', '2024 - Presente', 'Arquitectura limpia (capas de dominio, presentación y persistencia), API REST y TypeScript.'),
    (1, 'HABILIDAD', 'Bases de Datos PostgreSQL & Docker', 'Bases de Datos', '2023 - Presente', 'Modelado entidad-relación, queries SQL optimizadas y contenedores con Docker Compose.'),
    (1, 'PROYECTO', 'Plataforma de Reservas para Teatros', 'Proyecto Integrador Web I', '2026', 'Sistema web monorepo con Angular y Node.js para reserva y gestión de boletería de eventos culturales.'),
    (1, 'EXPERIENCIA', 'Monitor Académico de Programación', 'Facultad de Ingeniería UCEVA', '2025 - 2026', 'Apoyo a estudiantes en resolución de dudas de algoritmia y programación orientada a objetos.'),

    -- Trayectoria Alejandro Montoya (id: 2)
    (2, 'FORMACION', 'Ingeniería de Sistemas', 'Unidad Central del Valle del Cauca (UCEVA)', '2022 - Presente', 'Formación en ingeniería de software, arquitectura de sistemas y gestión de proyectos tecnológicos.'),
    (2, 'FORMACION', 'Certificación en Git y Flujos Colaborativos', 'Platzi / UCEVA', '2023', 'Manejo de GitFlow, control de versiones semántico y conventional commits.'),
    (2, 'HABILIDAD', 'Angular & CSS / SCSS Avanzado', 'Frontend UI', '2024 - Presente', 'Diseño de interfaces accesibles, maquetación responsive y componentización modular.'),
    (2, 'HABILIDAD', 'Diseño de Interfaces en Figma & Prototipado', 'UX / UI Design', '2024 - Presente', 'Creación de wireframes interactivos y guías de estilos para aplicaciones web.'),
    (2, 'HABILIDAD', 'Consumo y Testeo de APIs REST', 'Postman & Swagger', '2024 - Presente', 'Documentación con Swagger UI y testing funcional de endpoints HTTP.'),
    (2, 'PROYECTO', 'Dashboard Administrativo para Eventos', 'Proyecto Integrador Web I', '2026', 'Módulo de administración con tablas dinámicas, métricas y filtros en tiempo real.'),
    (2, 'EXPERIENCIA', 'Desarrollador Web Freelance', 'Proyectos Independientes', '2024 - 2025', 'Desarrollo de sitios web institucionales y landing pages adaptables a dispositivos móviles.');