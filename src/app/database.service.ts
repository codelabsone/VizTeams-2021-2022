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
    http.get<Team[]>(this.teamsURL).subscribe((teams) => this.teams.next(teams));
  }

  getMemberById(id: number){
    return this.http.get<Member>(this.membersURL +'/'+ id)
  }

  getAllTeams() {
    return this.http.get<Team[]>(this.teamsURL);
  }

<<<<<<< HEAD
  addTeam(team){
    return this.http.post<Team>(this.teamsURL, team);
=======
  getTeam(id: number) {
    return this.http.get<Team>(this.teamsURL + "/" + id)

>>>>>>> 1795dcb023e8281b467c502e1291e3461e9bb54a
  }
}
