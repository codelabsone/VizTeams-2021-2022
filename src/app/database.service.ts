import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Member } from './shared/member.model';
import { User } from './shared/user.model';

import { Team } from './shared/team.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  teams: ReplaySubject<Team[]> = new ReplaySubject(1);
  teamsURL = 'https://vizteams-api.herokuapp.com/teams';
  membersURL = 'https://vizteams-api.herokuapp.com/members';
  changeTeamURL = 'https://vizteams-api.herokuapp.com/change-team';
  signupURL = 'https://vizteams-api.herokuapp.com/sign-up';

  currentUser = new Subject();

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
    return this.http.patch<Team>(this.teamsURL + '/' + id, team);
  }

  getTeam(id: number) {
    return this.http.get<Team>(this.teamsURL + '/' + id);
  }
  assignTeam(teamId: number, memberId: number) {
    let teamOb = { team_id: teamId, member_id: memberId };
    this.http.post(this.changeTeamURL, teamOb).subscribe();
  }

  addMember(newMember: Member) {
    this.http.post(this.membersURL, newMember).subscribe(() => {
      this.getAllTeams().subscribe((teams) => this.teams.next(teams));
    });
  }

  editMember(editedMember: Member, memberId: number) {
    this.http
      .patch(this.membersURL + '/' + memberId, editedMember)
      .subscribe(() => {
        this.getAllTeams().subscribe((teams) => {
          this.teams.next(teams);
        });
      });
  }

  deleteTeam(id: number) {
    console.log(this.teamsURL + '/' + id);
    this.http.delete(this.teamsURL + '/' + id).subscribe(() => {
      this.http.get<Team[]>(this.teamsURL).subscribe((teams) => {
        this.teams.next(teams);
      });
    });
  }

  deleteMember(id: number) {
    this.http.delete(this.membersURL + '/' + id).subscribe(() => {
      this.http.get<Team[]>(this.teamsURL).subscribe((fetchedTeams) => {
        this.teams.next(fetchedTeams);
      });
    });
  }

  signUp(email: string, password: string) {
    return this.http
      .post<User>(this.signupURL, {
        email: email,
        password: password,
      })
      .subscribe((resData) => {
        localStorage.setItem('userData', JSON.stringify(resData));

        this.currentUser.next(JSON.parse(localStorage.getItem('userData')));
      });
  }

  signIn(email: string, password: string) {}
}
