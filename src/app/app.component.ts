import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employ-project';
  user: User;
  constructor( private authService: AuthService){

  }
  ngOnInit(): void {
    this.authService.currentUser.subscribe((user)=> this.user = user)
  }
}
