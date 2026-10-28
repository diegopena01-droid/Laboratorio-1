import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CvService } from '../../services/client/cv.service';
import { TrayectoriaService } from '../../services/agent/trayectoria.service';
import { CvEstudiante, CvTrayectoria } from '../../interfaces/cv.interface';
import { CvHeaderComponent } from '../../components/cv-header/cv-header.component';
import { CvSectionComponent } from '../../components/cv-section/cv-section.component';

@Component({
  selector: 'app-cv-estudiante2',
  standalone: true,
  imports: [CommonModule, RouterModule, CvHeaderComponent, CvSectionComponent],
  templateUrl: './cv-estudiante2.page.html',
  styleUrl: './cv-estudiante2.page.scss'
})
export class CvEstudiante2Page implements OnInit {

  private cvService = inject(CvService);
  private trayectoriaService = inject(TrayectoriaService);

  readonly estudianteId = 2; // Pareja
  estudiante: CvEstudiante | null = null;
  formacion: CvTrayectoria[] = [];
  habilidades: CvTrayectoria[] = [];
  experienciaProyectos: CvTrayectoria[] = [];
  cargando = true;

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.cargando = true;

    this.cvService.getById(this.estudianteId).subscribe({
      next: (data) => {
        this.estudiante = data;
      },
      error: (err) => console.error('Error al cargar estudiante 2:', err)
    });

    this.trayectoriaService.getByEstudianteId(this.estudianteId).subscribe({
      next: (items) => {
        this.formacion = items.filter(i => i.categoria === 'FORMACION');
        this.habilidades = items.filter(i => i.categoria === 'HABILIDAD');
        this.experienciaProyectos = items.filter(i => i.categoria === 'EXPERIENCIA' || i.categoria === 'PROYECTO');
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar trayectoria 2:', err);
        this.cargando = false;
      }
    });
  }

}