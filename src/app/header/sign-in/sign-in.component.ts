import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: any

  constructor(

    private dialogRef: MatDialogRef<SignInComponent>,
    private db: DatabaseService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(signUpForm: NgForm){

  }

  onCancel() {
    this.dialogRef.close();
  }
}
