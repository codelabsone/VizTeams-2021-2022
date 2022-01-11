import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

import { Team } from './shared/team.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {

  teams: ReplaySubject<Team[]> = new ReplaySubject(1);
  teamsURL = 'https://vizteams-api.herokuapp.com/teams';

  constructor(private http: HttpClient) {
    http.get<Team[]>(this.teamsURL).subscribe((teams) => this.teams.next(teams));
  }
}
