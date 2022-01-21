import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamsService } from 'src/app/teams.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit {
  editTeam: any
  name = new FormControl('', [Validators.required]);
  @ViewChild('form', { static: false }) editTeamForm: NgForm;

  constructor(
    private teamService: TeamsService,
    private dialogRef: MatDialogRef<TeamEditComponent>,
    private db: DatabaseService
    ) { }

  ngOnInit(): void {
  this.editTeam = this.teamService.selectedTeam
  }

  onSubmit(editForm: NgForm) {
    let teamId = this.teamService.selectedTeamId
    let teamName = editForm.value.name
    if (this.editTeamForm.valid && teamName.trim().length != 0) {
      this.db.editTeam(teamId, editForm.value).subscribe();
      this.dialogRef.close();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
