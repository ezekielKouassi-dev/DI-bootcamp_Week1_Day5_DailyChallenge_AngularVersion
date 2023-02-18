import { Injectable } from '@angular/core';
import { BlogItem } from 'src/app/model/blogItem-model/blog-item';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogListItem : BlogItem[] = [
    new BlogItem(
      'https://images.pexels.com/photos/887353/pexels-photo-887353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'Post Title',
      'Some quick example text to build on the card title...',
      'Read more'
    ),
    new BlogItem(
      'https://images.pexels.com/photos/6709142/pexels-photo-6709142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'Post Title',
      'Some quick example text to build on the card title...',
      'Read more'
    ),
    new BlogItem(
      'https://images.pexels.com/photos/5874620/pexels-photo-5874620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'Post Title',
      'Some quick example text to build on the card title...',
      'Read more'
    )
  ];

  constructor() { }

  getBlogListItem() : BlogItem[] {
    return this.blogListItem;
  }
}
