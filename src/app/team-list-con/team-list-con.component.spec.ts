import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListConComponent } from './team-list-con.component';

describe('TeamListConComponent', () => {
  let component: TeamListConComponent;
  let fixture: ComponentFixture<TeamListConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
