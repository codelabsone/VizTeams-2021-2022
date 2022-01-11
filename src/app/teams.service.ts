import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './shared/team.model';
import { Subject } from 'rxjs/internal/Subject';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class TeamsService implements OnInit {
  selectedTeamIndexSubject = new Subject<number>();
  selectedTeamMemberId = new Subject<number>();
  teams: Team[];

  constructor(private http: HttpClient, private db: DatabaseService) {
    this.db.teams.subscribe((teams)=> {this.teams = teams;});

  }



  ngOnInit(): void {
  }
}
