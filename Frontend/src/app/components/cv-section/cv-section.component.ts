import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvTrayectoria } from '../../interfaces/cv.interface';

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss'
})
export class CvSectionComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) items: CvTrayectoria[] = [];
  @Input() badgeColor: string = 'primary';
}