import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'


const MatMods: any[] = [
  MatCardModule,
  MatDividerModule,
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
