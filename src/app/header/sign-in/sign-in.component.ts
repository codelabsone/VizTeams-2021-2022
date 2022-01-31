import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { DatabaseService } from 'src/app/database.service';
import { User } from 'src/app/shared/user.model';




@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {
@ViewChild('form') signInForm: NgForm;
  errorMessage;

  constructor(

    private dialogRef: MatDialogRef<SignInComponent>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  onSubmit(signInForm: NgForm) {
    this.errorMessage = "";
    let email = signInForm.value.email
    let password = signInForm.value.password
    if (signInForm.valid) {
      this.authService.onSignIn(email, password)
        .subscribe((resData: {user: User, token: string}) => {
          this.dialogRef.close();
        },
        (error) => {console.log(error); this.errorMessage = error.message; this.signInForm.form.reset()}
        );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
