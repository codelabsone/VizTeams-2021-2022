import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, NgForm, Validators, NgModel } from '@angular/forms';

import { DatabaseService } from 'src/app/database.service';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team } from 'src/app/shared/team.model';
import { Member } from 'src/app/shared/member.model';
import { TeamsService } from 'src/app/teams.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {
  teams: Team[];
  selectedTeam: Team;
  selectedTitle: string = 'Software Engineer';
  member: Member = new Member('', '', '', '');
  @Input() selectedTeamId;
  name = new FormControl('');
  description = new FormControl('');
  teamNameControl = new FormControl('', [Validators.required]);
  @ViewChild('form', { static: false }) addMemberForm: NgForm;
  images: {
    url?: string;
    download_url?: string;
    smallUrl: string;
    id: number;
  }[];
  chosenImage: string = '../../../assets/avatar.png';
  titleOptions: string[] = [
    'Software Engineer',
    'Quality Engineer',
    'Team Lead',
  ];
  newMember: Member = new Member('', '', '', '');

  selectedImgStyles: Record<string, string> = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public editedMember: Member,
    private dialogRef: MatDialogRef<AddMemberComponent>,
    private http: HttpClient,
    private databaseService: DatabaseService,
    private teamsService: TeamsService,
  ) { }

  ngOnInit(): void {
    this.teamsService.teams.subscribe((teams) => {
      this.teams = teams;
    });

    this.http
      .get('https://picsum.photos/v2/list?page=1&limit=5')
      .subscribe((response: []) => {
        this.images = response;
        this.images.forEach((imageObject) => {
          imageObject[
            'smallUrl'
          ] = `https://picsum.photos/id/${imageObject.id}/300/300.webp`;
        });
      });
    this.checkEditMember();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(addMemberForm: NgForm) {
    // Put all the basic info into the newMember variable
    let form = this.addMemberForm.value;
    this.newMember.firstName = form.firstName;
    this.newMember.lastName = form.lastName;
    this.newMember.pathToPhoto = this.chosenImage;
    this.newMember.title = this.selectedTitle;
    this.newMember.team_id = this.selectedTeamId;

    if (addMemberForm.valid && this.editedMember) {
      // Populate the member ID so the proper member gets edited, then send it through
      this.databaseService.editMember(this.newMember, this.editedMember.id).subscribe(() => {
        this.teamsService.updateTeamDetails();
      });
      this.dialogRef.close(true);
    } else if (addMemberForm.valid) {
      // Populate the team_id, so the new member has a team assigned to them
      this.databaseService.addMember(this.newMember).subscribe(() => {
        this.teamsService.updateTeamDetails();
      });;
      this.teamsService.updateTeamDetails();
      this.dialogRef.close(true);
    }
  }

  handlePage(page) {
    this.http
      .get(`https://picsum.photos/v2/list?page=${page.pageIndex + 1}&limit=5`)
      .subscribe((response: []) => {
        this.images = response;
        this.images.forEach((imageObject) => {
          imageObject[
            'smallUrl'
          ] = `https://picsum.photos/id/${imageObject.id}/300/300.webp`;
        });
      });
  }

  onClickImage(image) {
    this.chosenImage = image.smallUrl;
    // this.styleObject(image);
  }

  checkEditMember() {
    if (this.editedMember != null || this.editedMember != undefined) {
      this.member = this.editedMember;
      this.selectedTitle = this.editedMember.title;
      this.selectedTeamId = this.editedMember.team.id;
      this.chosenImage = this.editedMember.pathToPhoto;
    }
  }
}
