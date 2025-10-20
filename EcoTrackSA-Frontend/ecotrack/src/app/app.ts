import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


interface Vehiculo {
  id?: number;
  nombre: string;
  marca: string;
  anio: number;
  estado: 'activo' | 'inactivo';
}

@Component({
  selector: 'app-root',
  imports: [FormGroup,FormControl],
  templateUrl: './app.html',
  styleUrl: './app.css'
})




export class App {
  protected readonly title = signal('ecotrack');

 vehiculos: Vehiculo[] = [];
  vehiculoForm: FormGroup;
  editarModo = false;
  editarIndex: number | null = null;
  loading = false;

  constructor() {
    this.vehiculoForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      marca: new FormControl('', [Validators.required, Validators.minLength(3)]),
      anio: new FormControl(null, [Validators.required, Validators.min(2015), Validators.max(2025)]),
      estado: new FormControl('', [Validators.required, Validators.pattern('activo|inactivo')])
    });

    // Simula carga inicial
    this.cargarVehiculos();
  }

  cargarVehiculos() {
    this.loading = true;
    // Simulación retraso para cargar datos (reemplazar con llamada real)
    setTimeout(() => {
      this.vehiculos = [
        { id: 1, nombre: 'Vehículo 1', marca: 'Marca A', anio: 2020, estado: 'activo' },
        { id: 2, nombre: 'Vehículo 2', marca: 'Marca B', anio: 2018, estado: 'inactivo' }
      ];
      this.loading = false;
    }, 1000);
  }

  onSubmit() {
    if (this.vehiculoForm.invalid) return;

    const formValue = this.vehiculoForm.value as Vehiculo;

    if (this.editarModo && this.editarIndex !== null) {
      // Editar vehículo existente
      this.vehiculos[this.editarIndex] = { ...formValue, id: this.vehiculos[this.editarIndex].id };
      this.editarModo = false;
      this.editarIndex = null;
    } else {
      // Agregar nuevo vehículo
      const nuevoVehiculo: Vehiculo = {
        ...formValue,
        id: this.vehiculos.length ? Math.max(...this.vehiculos.map(v => v.id ?? 0)) + 1 : 1
      };
      this.vehiculos.push(nuevoVehiculo);
    }

    this.vehiculoForm.reset();
  }

  editarVehiculo(vehiculo: Vehiculo) {
    const index = this.vehiculos.findIndex(v => v.id === vehiculo.id);
    if (index < 0) return;

    this.editarModo = true;
    this.editarIndex = index;
    this.vehiculoForm.setValue({
      nombre: vehiculo.nombre,
      marca: vehiculo.marca,
      anio: vehiculo.anio,
      estado: vehiculo.estado
    });
  }

  eliminarVehiculo(id?: number) {
    if (!id) return;
    this.vehiculos = this.vehiculos.filter(v => v.id !== id);
    if (this.editarModo && this.editarIndex !== null && this.vehiculos[this.editarIndex]?.id === id) {
      this.vehiculoForm.reset();
      this.editarModo = false;
      this.editarIndex = null;
    }
  }
}