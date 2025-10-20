import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Vehiculo } from '../models/vehiculo.model';

// Local backend during development
const API_BASE = 'http://localhost:3001';
const BASE_URL = `${API_BASE}/vehiculos`;

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private readonly vehiculos$ = new BehaviorSubject<Vehiculo[] | null>(null);
  private readonly loading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  /** Observables para la UI */
  get vehiculosChanges() { return this.vehiculos$.asObservable(); }
  get loadingChanges() { return this.loading$.asObservable(); }

  /** CRUD */
  getVehiculos(): Observable<Vehiculo[]> {
    this.loading$.next(true);
    return this.http.get<Vehiculo[]>(BASE_URL).pipe(
      tap({
        next: data => { this.vehiculos$.next(data); this.loading$.next(false); },
        error: () => this.loading$.next(false)
      })
    );
  }

  createVehiculo(payload: Vehiculo): Observable<Vehiculo> {
    this.loading$.next(true);
    return this.http.post<Vehiculo>(BASE_URL, payload).pipe(
      tap({
        next: v => {
          const prev = this.vehiculos$.value ?? [];
          this.vehiculos$.next([v, ...prev]);
          this.loading$.next(false);
        },
        error: () => this.loading$.next(false)
      })
    );
  }

  updateVehiculo(id: string, payload: Vehiculo): Observable<Vehiculo> {
    this.loading$.next(true);
    return this.http.put<Vehiculo>(`${BASE_URL}/${id}`, payload).pipe(
      tap({
        next: u => {
          const prev = this.vehiculos$.value ?? [];
          this.vehiculos$.next(prev.map(x => x.id === id ? u : x));
          this.loading$.next(false);
        },
        error: () => this.loading$.next(false)
      })
    );
  }

  deleteVehiculo(id: string): Observable<void> {
    this.loading$.next(true);
    return this.http.delete<void>(`${BASE_URL}/${id}`).pipe(
      tap({
        next: () => {
          const prev = this.vehiculos$.value ?? [];
          this.vehiculos$.next(prev.filter(x => x.id !== id));
          this.loading$.next(false);
        },
        error: () => this.loading$.next(false)
      })
    );
  }
}