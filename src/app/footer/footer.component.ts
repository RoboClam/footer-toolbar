import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  id: number = 1;
  map: Map<number, String> = new Map([
    [1, 'rgba(91, 55, 183, 0.2)'], 
    [2, 'rgba(201, 55, 157, 0.2)'], 
    [3, 'rgba(230, 169, 25, 0.2)'], 
    [4, 'rgba(28, 150, 162, 0.2)']]);
    
  constructor() { }

  ngOnInit() {
  }

  getBackgroundColor() {
    return this.map.get(this.id);
  }

}
