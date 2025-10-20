import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.model';

@Component({
  selector: 'app-vehiculo-list',
  standalone: true,
  imports: [],
  templateUrl: './vehiculo-list.html',
  styleUrls: ['./vehiculo-list.css']
})
export class VehiculoList {
  @Input() vehiculos: Vehiculo[] | null = [];
  @Input() loading = false;
  @Output() edit = new EventEmitter<Vehiculo>();
  @Output() remove = new EventEmitter<string>();

}
