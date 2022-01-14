import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Team } from '../shared/team.model';
import { TeamsService } from '../teams.service';
import { AddTeamComponent } from './add-team/add-team.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-team-list-con',
  templateUrl: './team-list-con.component.html',
  styleUrls: ['./team-list-con.component.scss'],
})
export class TeamListConComponent implements OnInit {
  teams: Team[] = [];

  isTeamsLoaded:boolean = false;

  constructor(
    private databaseService: DatabaseService,
    private teamsService: TeamsService,
    public teamDialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.databaseService.teams.subscribe((teams) => {
      this.teams = teams;
      this.isTeamsLoaded = true;
    });
  }

  showTeamDetails(id: number){
    this.teamsService.changeSelectedTeamId(id)
  }

  onAddTeam() {
    let addTeamRef = this.teamDialog.open(AddTeamComponent, {
      height: 'auto',
      width: '60vw',
    });
  }

  onMemberSelect(id: number) {
    this.teamsService.changeSelectedMemberId(id);
    event.stopPropagation();
  }


}
