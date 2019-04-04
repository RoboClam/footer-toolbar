import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  state: string = 'home';
  map: Map<string, string> = new Map([
    ['home', 'rgba(0, 0, 0, 0.2)'], 
    ['likes', 'rgba(0, 0, 0, 0.2)'], 
    ['search', 'rgba(0, 0, 0, 0.2)'], 
    ['profile', 'rgba(0, 0, 0, 0.2)']]);
    
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
