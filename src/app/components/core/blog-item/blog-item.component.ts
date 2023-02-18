import { Component, Input } from '@angular/core';
import { BlogItem } from 'src/app/model/blogItem-model/blog-item';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  @Input() cardImage? : string;
  @Input() cardTitle? : string;
  @Input() cardDescription? : string;
  @Input() cardTextBtn? : string;
}
