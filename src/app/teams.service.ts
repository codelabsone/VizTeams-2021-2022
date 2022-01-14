import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './shared/team.model';
import { Subject } from 'rxjs/internal/Subject';
import { DatabaseService } from './database.service';
import { Member } from './shared/member.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsService implements OnInit {
  private selectedMemberId: number;
  selectedMember = new BehaviorSubject<Member | null>(null);
  selectedTeam = new BehaviorSubject<Team | null>(null);
  private selectedTeamId: number;
  private selectedTeamIndexSubject = new Subject<number>();
  private selectedTeamMemberId = new Subject<number>();
  private teams: Team[];

  constructor(private http: HttpClient, private db: DatabaseService) {
    this.db.teams.subscribe((teams)=> {this.teams = teams;});

  }

  updateTeamDetails() {
    if (this.selectedMemberId != null || undefined) {
        this.db.getMemberById(this.selectedMemberId).subscribe(
            (member) => {
                this.selectedMember.next(member);
                if (this.selectedMember.value.team && this.selectedMember.value.team.id != null || undefined) {
                    this.db.getTeam(member.team.id).subscribe(
                        team => this.selectedTeam.next(team)
                    )
                }
            }
        )
    } else if (this.selectedTeamId != null || undefined) {
        this.db.getTeam(this.selectedTeamId).subscribe(
            team => {this.selectedTeam.next(team); this.selectedMember.next(null)}
        )
    } else {this.selectedTeam.next(null); this.selectedMember.next(null)}
}

changeSelectedTeamId(id: number){
  this.selectedMemberId = null;
  this.selectedTeamId = id;
  this.updateTeamDetails();
}

changeSelectedMemberId(id: number){
  this.selectedMemberId = id;
  this.updateTeamDetails();
}

  ngOnInit(): void {
  }
}
