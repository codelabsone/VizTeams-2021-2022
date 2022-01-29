import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from 'src/app/database.service';
import { TeamsService } from 'src/app/teams.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  description = new FormControl('');



  constructor(
    private dialogRef: MatDialogRef<AddTeamComponent>,
    private http: HttpClient,
    private databaseService: DatabaseService,
    private teamsService: TeamsService
    ) { }


  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close()
  };

  onSubmit(newTeam: NgForm) {
    if (newTeam.valid && newTeam.value.name.trim().length != 0) {
      this.databaseService.addTeam(newTeam.value).subscribe(() =>{
        this.teamsService.updateTeamDetails();
        this.dialogRef.close()
      }
    );

    }
  }
}
