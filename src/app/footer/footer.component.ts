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
    let activeState = localStorage.getItem("footer-active-state");
    if(activeState) {
      this.state = activeState;
    }
    else {
      let temp: string[] = window.location.pathname.split("/");
      this.state = temp[1];
      if(temp[1] !== 'likes' || temp[1] !== 'home') {
        this.state = 'home';
      }
      localStorage.setItem("footer-active-state", this.state);
    }
  }

  ngAfterViewInit() {
  }

  setActiveState(state: string) {
    this.state = state;
    localStorage.setItem("footer-active-state", state);
  }

  getBackgroundColor() {
    return this.map.get(this.state);
  }

}
