import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-list-con',
  templateUrl: './team-list-con.component.html',
  styleUrls: ['./team-list-con.component.scss']
})
export class TeamListConComponent implements OnInit {
teams: any;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe(
      (teams) => this.teams = teams
    )
  }

}
