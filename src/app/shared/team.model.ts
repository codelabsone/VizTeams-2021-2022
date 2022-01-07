import { Member } from './member.model';

export class Team {
  constructor(public teamName: string, public members: Member[]) {}
}
