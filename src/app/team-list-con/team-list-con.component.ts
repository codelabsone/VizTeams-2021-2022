import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';
import { AddTeamComponent } from './add-team/add-team.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-team-list-con',
  templateUrl: './team-list-con.component.html',
  styleUrls: ['./team-list-con.component.scss'],
})
export class TeamListConComponent implements OnInit {
  teams: Team[] = [];

<<<<<<< HEAD
  constructor(
    private databaseService: DatabaseService,
    private teamsService: TeamsService
    ) {}
=======
  constructor(private teamsService: TeamsService, public teamDialog: MatDialog) { }
>>>>>>> Dialog-box

  ngOnInit(): void {
    this.databaseService.teams.subscribe((teams) => {
      this.teams = teams;
    });
  }

  showTeamDetails(i: number){
    this.teamsService.selectedTeamIndexSubject.next(i)
  }
<<<<<<< HEAD
=======

  onAddTeam() {
    let addTeamRef = this.teamDialog.open(AddTeamComponent, {
      height: 'auto',
      width: '60vw',
    });
  }

>>>>>>> Dialog-box
}
