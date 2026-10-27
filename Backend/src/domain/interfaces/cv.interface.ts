export interface CvEstudiante {
  id: number;
  nombre: string;
  profesion: string;
  perfil: string;
  correo: string;
  telefono: string;
  ciudad: string;
  github?: string;
}

export interface CvTrayectoria {
  id: number;
  estudiante_id: number;
  categoria: 'FORMACION' | 'HABILIDAD' | 'EXPERIENCIA' | 'PROYECTO';
  titulo: string;
  institucion: string;
  periodo: string;
  descripcion: string;
}