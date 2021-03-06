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
import { ArchiveDialogComponent } from './team-info/archive-dialog/archive-dialog.component';
import { NoWhitespaceDirective } from './team-name.directive';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { SignInComponent } from './header/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListConComponent,
    HeaderComponent,
    TeamInfoComponent,
    AddTeamComponent,
    AddMemberComponent,
    TeamEditComponent,
    ArchiveDialogComponent,
    NoWhitespaceDirective,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [BrowserModule, MaterialsModule, BrowserAnimationsModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
