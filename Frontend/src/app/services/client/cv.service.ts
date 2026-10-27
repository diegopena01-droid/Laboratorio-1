import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CvEstudiante } from '../../interfaces/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class CvService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/cv';

  private mockEstudiantes: CvEstudiante[] = [
    {
      id: 1,
      nombre: 'Cristhian Pulido',
      correo: 'cristhianpulido@gmail.com',
      profesion: 'Estudiante de Ingeniería de Sistemas',
      perfil: 'Estudiante apasionado por el desarrollo web full-stack, arquitecturas escalables y bases de datos relacionales.',
      telefono: '+57 315 123 4567',
      ciudad: 'Tuluá, Valle del Cauca',
      github: 'https://github.com/cristhianpulido'
    },
    {
      id: 2,
      nombre: 'Alejandro Peña',
      correo: 'alejandro.Peña@uceva.edu.co',
      profesion: 'Estudiante de Ingeniería de Sistemas',
      perfil: 'Desarrollador orientado a frontend y diseño de interfaces con Angular y TypeScript.',
      telefono: '+57 318 987 6543',
      ciudad: 'Cali, Valle del Cauca',
      github: 'https://github.com/alejandro pena'
    }
  ];

  getAll(): Observable<CvEstudiante[]> {
    return this.http.get<CvEstudiante[]>(this.apiUrl).pipe(
      catchError(() => of(this.mockEstudiantes))
    );
  }

  getById(id: number): Observable<CvEstudiante> {
    return this.http.get<CvEstudiante>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        const item = this.mockEstudiantes.find(e => e.id === id) || this.mockEstudiantes[0];
        return of(item);
      })
    );
  }

}