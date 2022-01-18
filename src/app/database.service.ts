import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Member } from './shared/member.model';

import { Team } from './shared/team.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {

  teams: ReplaySubject<Team[]> = new ReplaySubject(1);
  teamsURL = 'https://vizteams-api.herokuapp.com/teams';
  membersURL = 'https://vizteams-api.herokuapp.com/members';

  constructor(private http: HttpClient) {
    this.getAllTeams().subscribe((teams) => this.teams.next(teams));
  }

  getMemberById(id: number){
    return this.http.get<Member>(this.membersURL +'/'+ id)
  }

  getAllTeams() {
    return this.http.get<Team[]>(this.teamsURL);
  }

  addTeam(team){
    var data;
    this.http.post<Team>(this.teamsURL, team).subscribe(data => data = data);
    this.getAllTeams().subscribe((teams) => this.teams.next(teams));
    return data
  }

  getTeam(id: number) {
    return this.http.get<Team>(this.teamsURL + "/" + id)
  }
}
