import { Component, OnInit, ViewChild, ɵɵqueryRefresh } from '@angular/core';
import { TeamsService } from 'src/app/teams.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit {
  editTeam: any
  name = new FormControl('', [Validators.required]);
  teams: any;

  constructor(
    private teamService: TeamsService,
    private dialogRef: MatDialogRef<TeamEditComponent>,
    private db: DatabaseService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  this.editTeam = this.teamService.selectedTeam.value
  }

  onSubmit(editForm: NgForm) {
    let teamId = this.teamService.selectedTeamId
    let teamName = editForm.value.name
    if (editForm.valid && teamName.trim().length != 0) {
      this.db.editTeam(teamId, editForm.value).subscribe(() => {
          // location.reload();
          this.teamService.updateTeamDetails()

      });
      this.dialogRef.close();

    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
