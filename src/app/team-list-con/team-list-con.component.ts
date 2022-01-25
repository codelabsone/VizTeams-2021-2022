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
  draggedOver: boolean = false;
  isTeamsLoaded: boolean = false;
  connectedTo = [];
  dragging: boolean= false;

  constructor(
    private databaseService: DatabaseService,
    private teamsService: TeamsService,
    public teamDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.databaseService.teams.subscribe((teams) => {
      this.teams = teams;
      this.isTeamsLoaded = true;
      this.updateConnectedTo();
    });
  }

toConsoleLog(event){
  console.log(event)
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

  onDropMember(event: CdkDragDrop<Team>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data.members,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      let memId = event.previousContainer.data.members[event.previousIndex].id
      let teamId = event.container.data.id
      this.databaseService.assignTeam(teamId, memId)
      transferArrayItem(
        event.previousContainer.data.members,
        event.container.data.members,
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
