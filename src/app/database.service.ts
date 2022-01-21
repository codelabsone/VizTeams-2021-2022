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

  getMemberById(id: number) {
    return this.http.get<Member>(this.membersURL + '/' + id);
  }

  getAllTeams() {
    return this.http.get<Team[]>(this.teamsURL);
  }

  addTeam(team) {
    this.http
      .post<Team>(this.teamsURL, team)
      .subscribe(() =>
        this.getAllTeams().subscribe((teams) => this.teams.next(teams))
      );
  }

  editTeam(id: number, team: any) {
    return this.http.patch<Team>(this.teamsURL + '/' + id, team)
  }

  getTeam(id: number) {
    return this.http.get<Team>(this.teamsURL + '/' + id);
  }

  addMember(newMember) {}

  deleteTeam(id:number) {
    console.log(this.teamsURL + '/' + id);
    this.http.delete(this.teamsURL + '/' + id).subscribe(() => {
      this.http.get<Team[]>(this.teamsURL).subscribe((teams) => {
        this.teams.next(teams);
      })
    });
  }
}
