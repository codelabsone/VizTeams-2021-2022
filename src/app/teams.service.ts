import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './shared/team.model';
import { Subject } from 'rxjs/internal/Subject';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class TeamsService implements OnInit {
  selectedTeam = new Subject<Team>();
  selectedTeamIndexSubject = new Subject<number>();
  selectedTeamIndex: number;
  teams: Team[];

  constructor(private http: HttpClient, private db: DatabaseService) {
    this.db.teams.subscribe((teams)=> {this.teams = teams; this.updateSelectedTeam()});
    this.selectedTeamIndexSubject.subscribe((index)=> {this.selectedTeamIndex = index; this.updateSelectedTeam()})
  }

  updateSelectedTeam(){
    this.selectedTeam.next(
      this.teams[this.selectedTeamIndex]
    )
  }

  ngOnInit(): void {
  }
}
