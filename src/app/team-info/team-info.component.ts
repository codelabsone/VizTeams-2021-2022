import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Member } from '../shared/member.model';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';
import { take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { ArchiveDialogComponent } from './archive-dialog/archive-dialog.component';
import { AddMemberComponent } from '../team-list-con/add-member/add-member.component';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
})
export class TeamInfoComponent implements OnInit {
  activeMember: Member;
  activeTeam: Team;

  constructor(
    private teamsService: TeamsService,
    private db: DatabaseService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.teamsService.selectedTeam.subscribe((team) => {
      if (this.activeTeam === undefined || this.activeTeam != team) {
        this.activeTeam = team;
      }
    });
    this.teamsService.selectedMember.subscribe((member) => {
      if (this.activeMember === undefined || this.activeMember != member) {
        this.activeMember = member;
      }
    });
  }

  onTeamSelected() {
    this.teamsService.changeSelectedMemberId(null);
  }

  onMemberSelect(id: number) {
    this.teamsService.changeSelectedMemberId(id);
  }

  onArchiveTeam() {
    let dialogRef = this.dialog.open(ArchiveDialogComponent, {
      height: 'fitcontent',
      width: 'fitcontent',
      data: { team: this.activeTeam },
    });
    dialogRef.afterClosed().subscribe;
  }

  onArchiveMember() {
    console.log('deleting');
    this.db.deleteMember(this.activeMember.id).subscribe(() => {
      this.teamsService.updateTeamDetails()
    });;
  }

  ngOnDestroy() {}

  onEditTeam() {
    const dialogRef = this.dialog.open(TeamEditComponent, {
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(boolean =>{
      if(boolean === true){
        this.teamsService.updateTeamDetails();
      }
    })
  }

  onEditMember(activeMember) {
    const addMemberRef = this.dialog.open(AddMemberComponent, {
      height: 'auto',
      width: '50vw',
      data: activeMember,
    });
  }
}
