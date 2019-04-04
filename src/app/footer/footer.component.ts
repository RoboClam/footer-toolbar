import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  state: string = 'home';
  map: Map<string, string> = new Map([
    ['home', 'rgba(91, 55, 183, 0.3)'], 
    ['likes', 'rgba(201, 55, 157, 0.3)'], 
    ['search', 'rgba(0, 170, 0, 0.3)'], 
    ['profile', 'rgba(28, 150, 162, 0.3)']]);
    
  constructor() { }

  ngOnInit() {
      let temp: string[] = window.location.pathname.split("/");
      this.state = temp[1];
      if(!this.map.has(this.state)){
        this.state = 'home';
      }
  }

  ngAfterViewInit() {
  }

  setActiveState(state: string) {
    this.state = state;
  }

  getBackgroundColor() {
    return this.map.get(this.state);
  }

}
