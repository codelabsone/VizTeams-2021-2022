import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, NgForm, Validators } from '@angular/forms';

import { DatabaseService } from 'src/app/database.service';

import { MatDialogRef } from '@angular/material/dialog';
import { Team } from 'src/app/shared/team.model';
import { Member } from 'src/app/shared/member.model';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {
  teams: Team[];
  selectedTeam: Team;
  selectedTitle: string = 'Software Engineer';
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
    private dialogRef: MatDialogRef<AddMemberComponent>,
    private http: HttpClient,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.databaseService.teams.subscribe((teams) => {
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
  }

  onCancel() {
    this.dialogRef.close();
    console.log(this.selectedTeamId);
  }

  onSubmit() {
    let form = this.addMemberForm.value;
    this.newMember.firstName = form.firstName;
    this.newMember.lastName = form.lastName;
    this.newMember.pathToPhoto = this.chosenImage;
    this.newMember.title = this.selectedTitle;
    this.newMember.team_id = this.selectedTeamId;
    this.databaseService.addMember(this.newMember);

    this.dialogRef.close();
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
}
