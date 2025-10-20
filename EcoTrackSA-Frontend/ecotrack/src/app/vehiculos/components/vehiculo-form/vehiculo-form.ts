import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.model';

@Component({
  selector: 'app-vehiculo-form',
  standalone: true,
  imports: [],
  templateUrl: './vehiculo-form.html',
  styleUrls: ['./vehiculo-form.css']
})
export class VehiculoForm {
  @Input() editing: Vehiculo | null = null;
  @Output() save = new EventEmitter<Vehiculo>();
  @Output() cancel = new EventEmitter<void>();

  // Placeholder methods to emit events when the small demo template is used.
  protected emitSave() {
    // In a real form this would gather values; emit a minimal Vehiculo to satisfy typing
    const payload: Vehiculo = { nombre: '', marca: '', anio: new Date().getFullYear(), estado: 'activo' };
    this.save.emit(payload);
  }

  protected emitCancel() { this.cancel.emit(); }
}
