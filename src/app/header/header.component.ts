import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSignUp() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px'
    })

  }

  onSignIn() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '500px'
    })
  }
}
