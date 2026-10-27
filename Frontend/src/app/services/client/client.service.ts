import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../../interfaces/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  getAllEvents(): Observable<Event[]> {
    return of([]);
  }
}