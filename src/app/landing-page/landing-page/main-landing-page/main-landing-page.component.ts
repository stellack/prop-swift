import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-landing-page',
  templateUrl: './main-landing-page.component.html',
  styleUrls: ['./main-landing-page.component.scss']
})
export class MainLandingPageComponent implements OnInit {
  search : String ="";

  constructor() { }

  ngOnInit(): void {
  }

}
