import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  profileUrl = '';
  aboutProfileName = '';
  aboutParagraphName = '';
  aboutParagraph = '';

  ngOnInit() : void {
    this.profileUrl = 'https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1200';
    this.aboutProfileName = 'S.Web Developer';
    this.aboutParagraphName = 'D.John';
    this.aboutParagraph = 'ok';
  }
}
