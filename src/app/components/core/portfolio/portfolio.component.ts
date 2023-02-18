import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio-service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioListLvlOne? : string[];
  portfolioListLvlTwo? : string[];

  constructor(private portfolioService : PortfolioService) { }

  ngOnInit() : void {
    this.portfolioListLvlOne = this.portfolioService.getPortfolioListOne();
    this.portfolioListLvlTwo = this.portfolioService.getPortfolioListTwo();
  }
}
