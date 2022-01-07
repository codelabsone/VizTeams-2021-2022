import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './shared/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
teamsURL = 'https://vizteams-api.herokuapp.com/teams'

constructor(private http: HttpClient) { }

  getAllTeams(){
   return this.http.get<Team[]>(this.teamsURL)
  }
}
