import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'


const MatMods: any[] = [
  MatCardModule,
  MatDividerModule
]


@NgModule({
  imports:
    MatMods
  ,
  exports:
    MatMods
})
export class MaterialsModule { }
