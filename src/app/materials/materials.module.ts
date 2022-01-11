import { NgModule } from '@angular/core';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


const MatMods: any[] = [
  MatCardModule,
  MatDividerModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTooltipModule,
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule

]


@NgModule({
  imports:
    MatMods
  ,
  exports:
    MatMods
})
export class MaterialsModule { }
