import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { TeamsService } from 'src/app/teams.service';
import { Team } from '../../shared/team.model';

@Component({
  selector: 'app-archive-dialog',
  templateUrl: './archive-dialog.component.html',
  styleUrls: ['./archive-dialog.component.scss']
})
export class ArchiveDialogComponent implements OnInit {

  activeTeam: Team;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {team: Team}, private http: HttpClient, private dbservice: DatabaseService, private teamservice: TeamsService) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.activeTeam = this.data.team;
  }

  onConfirmDelete() {
    this.dbservice.deleteTeam(this.activeTeam.id);
    this.teamservice.selectedTeam.next(null);
  }
}
