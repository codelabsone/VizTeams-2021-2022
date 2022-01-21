import { Component, ComponentRef, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';
import { AddTeamComponent } from './add-team/add-team.component';
import { MatDialog } from '@angular/material/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AddMemberComponent } from './add-member/add-member.component';
import { Member } from '../shared/member.model';

@Component({
  selector: 'app-team-list-con',
  templateUrl: './team-list-con.component.html',
  styleUrls: ['./team-list-con.component.scss'],
})
export class TeamListConComponent implements OnInit {
  teams: Team[] = [];

  isTeamsLoaded: boolean = false;
  connectedTo = [];

  constructor(
    private databaseService: DatabaseService,
    private teamsService: TeamsService,
    public teamDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.databaseService.teams.subscribe((teams) => {
      this.teams = teams;
      this.isTeamsLoaded = true;
      this.updateConnectedTo();
      console.log(this.connectedTo);
    });
  }

  updateConnectedTo() {
    for (let team of this.teams) {
      this.connectedTo.push(team.id.toString());
    }
  }

  showTeamDetails(id: number) {
    this.teamsService.changeSelectedTeamId(id);
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

  onDropMember(event: CdkDragDrop<Member[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addMemberDialog(id) {
    const addMemberRef = this.teamDialog.open(AddMemberComponent, {
      height: 'auto',
      width: '60vw',
    });
    addMemberRef.componentInstance.selectedTeamId = id;
  }
}
