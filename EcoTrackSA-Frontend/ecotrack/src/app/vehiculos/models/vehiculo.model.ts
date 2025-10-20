export interface Vehiculo {
  id?: string;
  nombre: string;
  marca: string;
  anio: number;
  estado: 'activo' | 'inactivo';
}
