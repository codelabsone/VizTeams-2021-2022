import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { DatabaseService } from 'src/app/database.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: any;
  currentUser;
  errorMessage: string;


  constructor(
    private dialogRef: MatDialogRef<SignUpComponent>,
    private db: DatabaseService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(signUpForm: NgForm) {
    let email = signUpForm.value.email
    let password = signUpForm.value.password
    if (signUpForm.valid) {
      this.db.signUp(email, password).pipe(map(res => {
        if (res.error) {
          throw new Error(res.error)
        }
        else { return res }
      }))
        .subscribe((resData) => {
          console.log(resData);
          localStorage.setItem('userData', JSON.stringify(resData));
          this.currentUser = JSON.parse(localStorage.getItem('userData'));
          this.dialogRef.close(true);
        },
          (error) => {console.error(error); this.errorMessage = error.message;}
        );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
