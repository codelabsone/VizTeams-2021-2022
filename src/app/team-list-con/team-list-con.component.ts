import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';
import { AddTeamComponent } from './add-team/add-team.component';
import { MatDialog } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { AddMemberComponent } from './add-member/add-member.component';

@Component({
  selector: 'app-team-list-con',
  templateUrl: './team-list-con.component.html',
  styleUrls: ['./team-list-con.component.scss'],
})
export class TeamListConComponent implements OnInit {
  teams: Team[] = [];

  isTeamsLoaded:boolean = false;

  constructor(
    private databaseService: DatabaseService,
    private teamsService: TeamsService,
    public teamDialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.databaseService.teams.subscribe((teams) => {
      this.teams = teams;
      this.isTeamsLoaded = true;
    });
  }

  showTeamDetails(id: number){
    this.teamsService.changeSelectedTeamId(id)
  }

  onAddTeam() {
    let addTeamRef = this.teamDialog.open(AddTeamComponent, {
      height: 'auto',
      width: '60vw',
    });
  }

  onMemberSelect(id: number) {
    this.teamsService.changeSelectedMemberId(id);
    event.stopPropagation();
  }

  onDropMember(event: CdkDragDrop<string[]>, currentTeam: Team) {
    moveItemInArray(currentTeam.members, event.previousIndex, event.currentIndex);
  }

  addMemberDialog() {
    const addMemberRef = this.teamDialog.open(AddMemberComponent, {
      width: '30vw',
      height: '20vh'
    })

  }
}
