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
  activeMember: Member;
  activeTeam: Team;

  constructor(
    private teamsService: TeamsService,
    private db: DatabaseService
  ) {}

  ngOnInit(): void {
    this.teamsService.selectedTeam.subscribe((team) => {
      if (this.activeTeam != team){this.activeTeam = team}});
    this.teamsService.selectedMember.subscribe((member) => {
      if(this.activeMember != member){this.activeMember = member}})
  }

onTeamSelected(){this.teamsService.changeSelectedMemberId = null}

  ngOnDestroy() {}
}
