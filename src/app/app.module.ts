import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/core/nav-bar/nav-bar.component';
import { BannerComponent } from './components/core/banner/banner.component';
import { BannerContentComponent } from './components/core/banner-content/banner-content.component';
import { AboutMeComponent } from './components/core/about-me/about-me.component';
import { PortfolioComponent } from './components/core/portfolio/portfolio.component';
import { PortfolioItemComponent } from './components/core/portfolio-item/portfolio-item.component';
import { BlogComponent } from './components/core/blog/blog.component';
import { BlogItemComponent } from './components/core/blog-item/blog-item.component';
import { TeamComponent } from './components/core/team/team.component';
import { TeamItemComponent } from './components/core/team-item/team-item.component';
import { ContactComponent } from './components/core/contact/contact.component';
import { TitleComponent } from './components/shared/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    BannerContentComponent,
    AboutMeComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    BlogComponent,
    BlogItemComponent,
    TeamComponent,
    TeamItemComponent,
    ContactComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
