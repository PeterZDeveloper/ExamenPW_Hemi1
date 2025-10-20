import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoService } from '../../services/vehiculo';
import { Vehiculo } from '../../models/vehiculo.model';
import { VehiculoForm } from '../../components/vehiculo-form/vehiculo-form';
import { VehiculoList } from '../../components/vehiculo-list/vehiculo-list';

@Component({
  selector: 'app-vehiculos-page',
  standalone: true,
  imports: [CommonModule, VehiculoForm, VehiculoList],
  templateUrl: './vehiculos-page.html',
  styleUrls: ['./vehiculos-page.css']
})
export class VehiculosPage implements OnInit {
  get vehiculos$() { return this.vehiculoService.vehiculosChanges; }
  get loading$() { return this.vehiculoService.loadingChanges; }
  selected: Vehiculo | null = null;

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    // Inicializar lista
    this.vehiculoService.getVehiculos().subscribe({ error: () => {} });
  }

  onEdit(v: Vehiculo) {
    this.selected = v;
  }

  onRemove(idOrVehiculo: string | Vehiculo) {
    const id = typeof idOrVehiculo === 'string' ? idOrVehiculo : idOrVehiculo.id!;
    if (!id) return;
    this.vehiculoService.deleteVehiculo(id).subscribe({ error: () => {} });
  }

  onSave(payload: Vehiculo) {
    if (payload.id) {
      this.vehiculoService.updateVehiculo(payload.id, payload).subscribe({ error: () => {} });
    } else {
      this.vehiculoService.createVehiculo(payload).subscribe({ error: () => {} });
    }
    this.selected = null;
  }

  onCancel() {
    this.selected = null;
  }
}
