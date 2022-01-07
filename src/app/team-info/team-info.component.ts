import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/team.model';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
})
export class TeamInfoComponent implements OnInit {
  activeTeam: Team = {
    teamName: 'Fake Team',
    members: [
      {
        name: 'Fake Person',
        title: 'Professional Fake Person',
        imgUrl: 'https://picsum.photos/200/200',
      },
      {
        name: 'Fake Person',
        title: 'Professional Fake Person',
        imgUrl: 'https://picsum.photos/200/200',
      },
      {
        name: 'Fake Person',
        title: 'Professional Fake Person',
        imgUrl: 'https://picsum.photos/200/200',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
