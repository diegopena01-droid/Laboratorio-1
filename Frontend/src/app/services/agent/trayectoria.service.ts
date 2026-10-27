import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CvTrayectoria } from '../../interfaces/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class TrayectoriaService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/trayectoria';

  private mockTrayectoria: CvTrayectoria[] = [
    // Trayectoria Cristhian Pulido (estudiante 1)
    {
      id: 1,
      estudiante_id: 1,
      categoria: 'FORMACION',
      titulo: 'Ingeniería de Sistemas',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2023 - Presente',
      descripcion: 'Cursando semestre actual con énfasis en Programación Web, Bases de Datos y Estructuras de Datos.'
    },
    {
      id: 2,
      estudiante_id: 1,
      categoria: 'HABILIDAD',
      titulo: 'Desarrollo Frontend con Angular & TypeScript',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2024 - Presente',
      descripcion: 'Componentes standalone, routing jerárquico, RxJS y Bootstrap 5.'
    },
    {
      id: 3,
      estudiante_id: 1,
      categoria: 'HABILIDAD',
      titulo: 'Desarrollo Backend con Node.js & Express',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2024 - Presente',
      descripcion: 'Arquitectura limpia, APIs REST y bases de datos PostgreSQL.'
    },
    {
      id: 4,
      estudiante_id: 1,
      categoria: 'PROYECTO',
      titulo: 'Plataforma Web Monorepo',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2026',
      descripcion: 'Sistema web monorepo con Angular y Node.js.'
    },
    {
      id: 5,
      estudiante_id: 1,
      categoria: 'EXPERIENCIA',
      titulo: 'Monitor Académico de Programación',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2025 - 2026',
      descripcion: 'Apoyo a estudiantes en resolución de dudas de algoritmia.'
    },

    // Trayectoria Compañero (estudiante 2)
    {
      id: 6,
      estudiante_id: 2,
      categoria: 'FORMACION',
      titulo: 'Ingeniería de Sistemas',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2023 - Presente',
      descripcion: 'Formación en ingeniería de software y arquitectura de sistemas.'
    },
    {
      id: 7,
      estudiante_id: 2,
      categoria: 'HABILIDAD',
      titulo: 'Angular & Bootstrap 5',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2024 - Presente',
      descripcion: 'Diseño de interfaces responsive y componentización modular.'
    },
    {
      id: 8,
      estudiante_id: 2,
      categoria: 'HABILIDAD',
      titulo: 'Bases de Datos Relacionales',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2023 - Presente',
      descripcion: 'Modelado y consultas SQL en PostgreSQL.'
    },
    {
      id: 9,
      estudiante_id: 2,
      categoria: 'PROYECTO',
      titulo: 'Dashboard de Administración',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2026',
      descripcion: 'Módulo de administración con filtros y métricas.'
    },
    {
      id: 10,
      estudiante_id: 2,
      categoria: 'EXPERIENCIA',
      titulo: 'Desarrollador Web',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2024 - Presente',
      descripcion: 'Desarrollo de sitios web y páginas adaptables a dispositivos móviles.'
    }
  ];

  getByEstudianteId(estudianteId: number): Observable<CvTrayectoria[]> {
    return this.http.get<CvTrayectoria[]>(`${this.apiUrl}/estudiante/${estudianteId}`).pipe(
      catchError((error) => {
        console.warn(`Backend API no disponible para trayectoria del estudiante ${estudianteId}:`, error);
        return of(this.mockTrayectoria.filter(t => t.estudiante_id === estudianteId));
      })
    );
  }

}