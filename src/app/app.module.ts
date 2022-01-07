import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamListConComponent } from './team-list-con/team-list-con.component';
import { HeaderComponent } from './header/header.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TeamListConComponent,
    HeaderComponent,
    TeamInfoComponent,
  ],
  imports: [BrowserModule, MaterialsModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
