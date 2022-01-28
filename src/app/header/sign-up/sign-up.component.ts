import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: any;

  constructor(
    private dialogRef: MatDialogRef<SignUpComponent>,
    private db: DatabaseService
  ) {}

  ngOnInit(): void {}

  // onSubmit(signUpForm: NgForm) {
  //   let email = signUpForm.value.email
  //   let password = signUpForm.value.password
  //   if (signUpForm.valid) {
  //     this.db.signUp( email, password).subscribe(() => {
  //         location.reload();
  //     });
  //     this.dialogRef.close();

  //   }
  // }

  onCancel() {
    this.dialogRef.close();
  }
}
