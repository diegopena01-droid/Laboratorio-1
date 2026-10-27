import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvEstudiante } from '../../interfaces/cv.interface';

@Component({
  selector: 'app-cv-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-header.component.html',
  styleUrl: './cv-header.component.scss'
})
export class CvHeaderComponent {
  @Input({ required: true }) estudiante!: CvEstudiante;
}
