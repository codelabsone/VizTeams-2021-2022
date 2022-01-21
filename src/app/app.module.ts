import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamListConComponent } from './team-list-con/team-list-con.component';
import { HeaderComponent } from './header/header.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTeamComponent } from './team-list-con/add-team/add-team.component';
import { FormsModule } from '@angular/forms';
import { AddMemberComponent } from './team-list-con/add-member/add-member.component';
import { TeamEditComponent } from './team-info/team-edit/team-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListConComponent,
    HeaderComponent,
    TeamInfoComponent,
    AddTeamComponent,
    AddMemberComponent,
    TeamEditComponent,
  ],
  imports: [BrowserModule, MaterialsModule, BrowserAnimationsModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
