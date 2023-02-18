import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent {
  @Input() imageProfilUrl? : string;
  @Input() name? : string;
  @Input() job? : string;
}
