import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { DatabaseService } from '../database.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser = null;


  constructor(
    private dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user)=> this.currentUser = user)
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

  onLogOut() {
    this.authService.onLogOut()
  }
}
