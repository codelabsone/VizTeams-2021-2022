import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from 'src/app/database.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  name = new FormControl('');
  description = new FormControl('');
  teamNameControl = new FormControl('', [Validators.required]);
  @ViewChild('form', { static: false }) addTeamForm: NgForm;



  constructor(
    private dialogRef: MatDialogRef<AddTeamComponent>,
    private http: HttpClient,
    private databaseService: DatabaseService
    ) { }


  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close()
  };

  onSubmit() {
    this.databaseService.addTeam(this.addTeamForm.value);
    this.dialogRef.close()
  }
}
