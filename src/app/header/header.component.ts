import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    public dialog: MatDialog,
    public db: DatabaseService
  ) { }

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser(){
    var localStorageUser = localStorage.getItem('userData')
    if (localStorageUser != undefined || localStorageUser != null) {
      this.currentUser = JSON.parse(localStorageUser).user;
    }
  }

  onSignUp() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result === true){
        this.loadUser();
      }
    })
  }



  onSignIn() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '500px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result === true){
        this.loadUser();
      }
    })
  }

  onLogOut() { this.currentUser = localStorage.clear();
}}
