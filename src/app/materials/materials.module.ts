import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {MatCardActions, MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTooltipModule} from '@angular/material/tooltip';
=======
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
>>>>>>> 9033dff2e6f5eef0abe899a61f5d23f3f6c5889c


const MatMods: any[] = [
  MatCardModule,
  MatDividerModule,
  MatToolbarModule,
<<<<<<< HEAD
  MatExpansionModule,
  MatTooltipModule
=======
  MatExpansionModule
>>>>>>> 9033dff2e6f5eef0abe899a61f5d23f3f6c5889c
]


@NgModule({
  imports:
    MatMods
  ,
  exports:
    MatMods
})
export class MaterialsModule { }
