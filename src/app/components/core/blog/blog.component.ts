import { Component, OnInit } from '@angular/core';
import { BlogItem } from 'src/app/model/blogItem-model/blog-item';
import { BlogService } from 'src/app/services/blog-service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogListItem? : BlogItem[];

  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
      this.blogListItem = this.blogService.getBlogListItem();
  }

}
