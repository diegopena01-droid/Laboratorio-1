
export interface Event {
    codigo: number;
    nombre: string;
    descripcion: string;
    teatro: string;
    ciudad: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    capacidad: number;
    precio: number;
    observaciones: string;
    estado: EventState;
}

export type EventState = 
    | 'Programado'
    | 'En Boleteria'
    | 'En Vivo'
    | 'Finalizado'
    | 'Cancelado';

export interface CvEstudiante {
  id: number;
  nombre: string;
  correo: string;
  profesion: string;
  perfil: string;
  telefono: string;
  ciudad: string;
  github: string;
}

export interface CvTrayectoria {
  id: number;
  estudiante_id: number;
  categoria: 'FORMACION' | 'HABILIDAD'  | 'PROYECTO' | 'EXPERIENCIA';
  titulo: string;
  institucion: string;
  periodo: string;
  descripcion: string;
}