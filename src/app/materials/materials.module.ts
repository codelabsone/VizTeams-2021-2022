import { NgModule } from '@angular/core';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule } from '@angular/material/list'



const MatMods: any[] = [
  MatCardModule,
  MatDividerModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTooltipModule,
  MatListModule
]


@NgModule({
  imports:
    MatMods
  ,
  exports:
    MatMods
})
export class MaterialsModule { }
