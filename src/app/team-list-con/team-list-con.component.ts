import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';
import { AddTeamComponent } from './add-team/add-team.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-team-list-con',
  templateUrl: './team-list-con.component.html',
  styleUrls: ['./team-list-con.component.scss']
})
export class TeamListConComponent implements OnInit {
teams: Team[]=[];

  constructor(private teamsService: TeamsService, public teamDialog: MatDialog) { }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe(
      (teams) => {
        console.log(teams);
        this.teams = teams}
    )
  }

  showTeamDetails(team: Team){
    this.teamsService.onTeamDetails(team)
  }

  onAddTeam() {
    let addTeamRef = this.teamDialog.open(AddTeamComponent, {
      height: 'auto',
      width: '60vw',
    });
  }

}
