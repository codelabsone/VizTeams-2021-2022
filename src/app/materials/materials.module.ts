import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

const MatMods: any[] = [
  MatCardModule
]


@NgModule({
  imports:
    MatMods
  ,
  exports:
    MatMods

})
export class MaterialsModule { }
