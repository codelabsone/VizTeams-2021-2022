import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-list-con',
  templateUrl: './team-list-con.component.html',
  styleUrls: ['./team-list-con.component.scss']
})
export class TeamListConComponent implements OnInit {
teams: Team[]=[];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe(
      (teams) => {
        console.log(teams);
        this.teams = teams}
    )
    this.teamsService.selectedTeam.subscribe(data => {
      console.log(data)
      console.log(data.members)
    })
  }

  showTeamDetails(team: Team){
    this.teamsService.onTeamDetails(team)
  }


}
