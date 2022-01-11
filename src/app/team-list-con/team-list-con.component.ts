import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-list-con',
  templateUrl: './team-list-con.component.html',
  styleUrls: ['./team-list-con.component.scss'],
})
export class TeamListConComponent implements OnInit {
  teams: Team[] = [];

  constructor(
    private databaseService: DatabaseService,
    private teamsService: TeamsService
    ) {}

  ngOnInit(): void {
    this.databaseService.teams.subscribe((teams) => {
      this.teams = teams;
    });
  }

  showTeamDetails(i: number){
    this.teamsService.selectedTeamIndexSubject.next(i)
  }
}
