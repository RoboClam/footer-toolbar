import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-slider',
  templateUrl: './button-slider.component.html',
  styleUrls: ['./button-slider.component.scss']
})
export class ButtonSliderComponent implements OnInit {

  initialX: number = 0;
  finalX: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onPan(evt: any) {
    var swipeMe = evt.target;
    
    var transformStyle = 'translateX(' + evt.center.x + 'px)';

    swipeMe.style.transition = 'all 150ms ease-out';
    swipeMe.style.webkitTransform = transformStyle;
    swipeMe.style.transform = transformStyle;
  }

  onPanStart(evt: any) {
    this.initialX = Number(evt.center.x);
  }

  onPanEnd(evt: any) {
    this.finalX = Number(evt.center.x);
    if(this.finalX - this.initialX > 0) {
      this.rightSide(evt);
    }
    if(this.finalX - this.initialX < 0) {
      this.leftSide(evt);
    }
  }

  rightSide(evt: any) {
    var swipeMe = evt.target;

    let rightSide:number = document.getElementsByTagName("body").item(0).clientWidth * .9; 
    
    var transformStyle = 'translateX(' + rightSide + 'px)';

    swipeMe.style.transition = 'all 150ms ease-out';
    swipeMe.style.webkitTransform = transformStyle;
    swipeMe.style.transform = transformStyle;
  }

  leftSide(evt: any) {
    var swipeMe = evt.target;

    let leftSide:number = document.getElementsByTagName("body").item(0).clientWidth * -.9; 
    
    var transformStyle = 'translateX(' + leftSide + 'px)';

    swipeMe.style.transition = 'all 150ms ease-out';
    swipeMe.style.webkitTransform = transformStyle;
    swipeMe.style.transform = transformStyle;
  }

  onPanRight(evt: any) {
    // var swipeMe = evt.target;
    
    // let deltaX: number  = Number(evt.deltaX);
    // // console.log(deltaX);

    // var transformStyle = 'translateX(' + deltaX + 'px)';

    // swipeMe.style.transition = 'all 150ms ease-out';
    // swipeMe.style.webkitTransform = transformStyle;
    // swipeMe.style.transform = transformStyle;
  }
  
  onPanLeft(evt: any) {
    // var swipeMe = evt.target;
    
    // let deltaX: number  = Number(evt.deltaX);
    
    // var transformStyle = 'translateX(' + deltaX + 'px)';

    // swipeMe.style.transition = 'all 150ms ease-out';
    // swipeMe.style.webkitTransform = transformStyle;
    // swipeMe.style.transform = transformStyle;
  }

}
