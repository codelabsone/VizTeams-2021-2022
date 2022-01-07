import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './shared/team.model';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class TeamsService implements OnInit {
  selectedTeam = new Subject<Team>();
  teamsURL = 'https://vizteams-api.herokuapp.com/teams';
  teamURLById = '';

  constructor(private http: HttpClient) {}

  onTeamDetails(team: Team) {
    this.selectedTeam.next(team);
  }

  ngOnInit(): void {}

  getAllTeams() {
    return this.http.get<Team[]>(this.teamsURL);
  }
}
