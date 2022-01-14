import { NgModule } from '@angular/core';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule } from '@angular/material/list'

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const MatMods: any[] = [
  MatCardModule,
  MatDividerModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTooltipModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  DragDropModule,
  MatProgressBarModule

]


@NgModule({
  imports:
    MatMods
  ,
  exports:
    MatMods
})
export class MaterialsModule { }
