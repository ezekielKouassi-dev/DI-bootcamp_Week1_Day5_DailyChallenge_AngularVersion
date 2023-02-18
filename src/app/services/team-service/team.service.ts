import { Injectable } from '@angular/core';
import { TeamMember } from 'src/app/model/team-member-model/team-member';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamListItem : TeamMember[] = [
    new TeamMember('https://github.com/devtlv/portfolio_setup/blob/master/images/face1.jpg?raw=true', 'Dave', 'Manager'),
    new TeamMember('https://github.com/devtlv/portfolio_setup/blob/master/images/face2.jpg?raw=true', 'Sarah', 'S.enginner'),
    new TeamMember('https://github.com/devtlv/portfolio_setup/blob/master/images/face3.jpg?raw=true', 'Chris', 'Front End Developer'),
    new TeamMember('https://avatars.githubusercontent.com/u/121268728?v=4', 'Ezekiel', 'Team Manager'), 
  ]

  constructor() { }

  getTeamMemberList() : TeamMember[] {
    return this.teamListItem;
  }
}
