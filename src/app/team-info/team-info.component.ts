import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Member } from '../shared/member.model';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
})
export class TeamInfoComponent implements OnInit {
  isTeamSelected: boolean = false;
  isMemberSelected: boolean = false;
  selectedTeamIndex: number;
  teams: Team[];
  activeMember: Member;

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

  constructor(
    private teamsService: TeamsService,
    private db: DatabaseService
  ) {}

  ngOnInit(): void {
    this.db.teams.subscribe((teams) => {
      console.log(teams);
      this.teams = teams;
      this.updateActiveTeam();
    });
    this.teamsService.selectedTeamIndexSubject.subscribe((index) => {
      this.isTeamSelected = true;
      this.selectedTeamIndex = index;
      this.updateActiveTeam();
    });
    this.teamsService.selectedTeamMemberId.subscribe((id) => {
      this.db.getMemberById(id).pipe(take(1)).subscribe(
        (member)=> {this.activeMember = member; this.isMemberSelected = true}
      );
    });
  }

  updateActiveTeam() {
    if (this.teams && this.selectedTeamIndex) {
      this.activeTeam = this.teams[this.selectedTeamIndex];
      console.log(this.teams[this.selectedTeamIndex])
    }
  }

  ngOnDestroy() {}
}
