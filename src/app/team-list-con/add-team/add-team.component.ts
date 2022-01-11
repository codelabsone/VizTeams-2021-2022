import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddTeamComponent>) { }


  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close()
  };


}
