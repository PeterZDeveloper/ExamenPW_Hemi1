import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VehiculoList } from './components/vehiculo-list/vehiculo-list';
import { VehiculoForm } from './components/vehiculo-form/vehiculo-form';
import { VehiculosPage } from './pages/vehiculos-page/vehiculos-page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VehiculoList,
    VehiculoForm,
    VehiculosPage
  ],
  exports: [
    VehiculosPage
  ]
})
export class VehiculosModule {}
