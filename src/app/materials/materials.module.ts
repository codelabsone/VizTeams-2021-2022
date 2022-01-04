import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'

const MatMods: any[] = [
  MatCardModule,
  MatToolbarModule
]


@NgModule({
  imports:
    MatMods
  ,
  exports:
    MatMods

})
export class MaterialsModule { }
