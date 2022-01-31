import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { DatabaseService } from 'src/app/database.service';
import { User } from 'src/app/shared/user.model';


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
    private db: DatabaseService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(signUpForm: NgForm) {
    let email = signUpForm.value.email
    let password = signUpForm.value.password
    if (signUpForm.valid) {
      this.authService.onSignUp(email, password)
        .subscribe((resData: {user: User, token: string}) => {
          this.dialogRef.close();
        },
        (error) => {console.log(error); this.errorMessage = error.message;}
        );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
