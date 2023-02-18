import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolioListImgLvl1 = [
    'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7257021/pexels-photo-7257021.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
  ];
  portfolioListImgLvl2 = [
    'https://images.pexels.com/photos/4512857/pexels-photo-4512857.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
    'https://images.pexels.com/photos/4483218/pexels-photo-4483218.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
    'https://images.pexels.com/photos/2831797/pexels-photo-2831797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];
  constructor() { }

  getPortfolioListOne() : string[] {
    return this.portfolioListImgLvl1;
  }

  getPortfolioListTwo() : string[] {
    return this.portfolioListImgLvl2;
  }
}
