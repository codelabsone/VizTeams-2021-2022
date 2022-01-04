import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamListConComponent } from './team-list-con/team-list-con.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListConComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
