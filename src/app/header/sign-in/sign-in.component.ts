import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
@ViewChild('form') signInForm: NgForm;
  currentUser;
  errorMessage;

  constructor(

    private dialogRef: MatDialogRef<SignInComponent>,
    private db: DatabaseService
  ) { }

  ngOnInit(): void {
  }


  onSubmit(signInForm: NgForm) {
    this.errorMessage = "";
    let email = signInForm.value.email
    let password = signInForm.value.password
    if (signInForm.valid) {
      this.db.signIn(email, password).pipe(map(res => {
        if (res.error){
          throw new Error (res.error)
        }
        else {return res}
      }))
        .subscribe((resData) => {
          console.log(resData);
          localStorage.setItem('userData', JSON.stringify(resData));
          this.currentUser = JSON.parse(localStorage.getItem('userData'));
          this.dialogRef.close(true);
        },
        (error) => {console.error(error); this.errorMessage = error.message; console.log(this.signInForm.form.reset())}
        );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
