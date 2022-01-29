import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Member } from './shared/member.model';
import { User } from './shared/user.model';

import { Team } from './shared/team.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  teamsURL = 'https://vizteams-api.herokuapp.com/teams';
  membersURL = 'https://vizteams-api.herokuapp.com/members';
  changeTeamURL = 'https://vizteams-api.herokuapp.com/change-team';
  signupURL = 'https://vizteams-api.herokuapp.com/sign-up';
  signinURL = 'https://vizteams-api.herokuapp.com/sign-in';


  constructor(private http: HttpClient) {
  }


  getMemberById(id: number) {
    return this.http.get<Member>(this.membersURL + '/' + id);
  }

  getAllTeams() {
    return this.http.get<Team[]>(this.teamsURL).pipe(map(arr => arr.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0
    })))
  }

  addTeam(team) {
   return this.http
      .post<Team>(this.teamsURL, team)

  }

  editTeam(id: number, team: any) {
    return this.http.patch<Team>(this.teamsURL + '/' + id, team);
  }

  getTeam(id: number) {
    return this.http.get<Team>(this.teamsURL + '/' + id);
  }
  assignTeam(teamId: number, memberId: number) {
    let teamOb = { team_id: teamId, member_id: memberId };
    return this.http.post(this.changeTeamURL, teamOb);
  }

  addMember(newMember: Member) {
    return this.http.post(this.membersURL, newMember)
  }

  editMember(editedMember: Member, memberId: number) {
    return this.http
      .patch(this.membersURL + '/' + memberId, editedMember)

  }

  deleteTeam(id: number) {
    return this.http.delete(this.teamsURL + '/' + id)
  }

  deleteMember(id: number) {
    return this.http.delete(this.membersURL + '/' + id)
  }

  signUp(email: string, password: string) {
    return this.http
      .post<User | any>(this.signupURL, {
        email: email,
        password: password
      })
  }

  signIn(email: string, password: string) {
    return this.http
      .post<User | any>(this.signinURL, {
        email: email,
        password: password
      })
  }
}
