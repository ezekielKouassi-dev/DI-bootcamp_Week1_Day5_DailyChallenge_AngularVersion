import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/model/team-member-model/team-member';
import { TeamService } from 'src/app/services/team-service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamMemberList? : TeamMember[];

  constructor(private teamService : TeamService) { }

  ngOnInit(): void {
    this.teamMemberList = this.teamService.getTeamMemberList();
  }

}
