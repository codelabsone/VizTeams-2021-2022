import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
})
export class TeamInfoComponent implements OnInit {
  activeTeam: Team = {
    id: 1,
    name: 'Owen Wilson Fans',
    created_at: '2022-01-04T00:36:26.113Z',
    updated_at: '2022-01-04T00:36:26.113Z',
    description: 'Wow!!!',
    members: [
      {
        id: 1,
        firstName: 'Zack',
        lastName: 'Amis',
        title: 'Software Engineer',
        pathToPhoto: 'https://picsum.photos/200/200',
        created_at: '2022-01-04T00:40:48.562Z',
        updated_at: '2022-01-04T00:40:48.562Z',
      },
    ],
  };

  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.teamService.selectedTeam.subscribe((selectedTeam) => {
      this.activeTeam = selectedTeam;
    });
  }
  ngOnDestroy() {
    this.teamService.selectedTeam.unsubscribe;
  }
}
