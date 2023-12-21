import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  nav: number;
  hamburger:boolean = false;
  constructor() {
    this.nav = 3;
  }

  ngOnInit() {
  }


  setMenu() {
    this.hamburger = !this.hamburger;
  }

  setNav(value:number){
    this.nav = value;
  }


}
