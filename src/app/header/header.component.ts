import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from '../database.service';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser;

  constructor(
    public dialog: MatDialog,
    public db: DatabaseService
  ) { }

  ngOnInit(): void {
    this.db.currentUser.subscribe(resData => {
      this.currentUser = resData;
    })
  }

  onSignUp() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px'
    })
  }

}
