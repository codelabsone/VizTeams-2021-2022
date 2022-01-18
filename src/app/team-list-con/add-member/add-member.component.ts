import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, NgForm, Validators } from '@angular/forms';

import { DatabaseService } from 'src/app/database.service';

import { MatDialogRef } from '@angular/material/dialog';
import { Team } from 'src/app/shared/team.model';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  teams: Team[];

  @Input() selectedTeamId;
  name = new FormControl('');
  description = new FormControl('');
  teamNameControl = new FormControl('', [Validators.required]);
  @ViewChild('form', { static: false }) addMemberForm: NgForm;



  constructor(
    private dialogRef: MatDialogRef<AddMemberComponent>,
    private http: HttpClient,
    private databaseService: DatabaseService
    ) { }


  ngOnInit(): void {
    this.databaseService.teams.subscribe(teams => this.teams)
  }

  onCancel() {
    this.dialogRef.close()
  };

  onSubmit() {
    this.databaseService.addMember(this.addMemberForm.value);
    this.dialogRef.close()
  }
}

