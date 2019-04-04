import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  EPSILON: number = 50;
  initialX: number = 0;
  finalX: number = 0;
  width: number = 0;
  currentX: number = 0;

  sideAmount: number = .833;

  target: HTMLElement = null;

  constructor() { }

  ngOnInit() {
    this.width = document.getElementsByTagName("body").item(0).clientWidth * this.sideAmount;
    this.currentX = this.width;
  }

  onPanStart(evt: any) {
    this.target = document.getElementById("top-pan-element");
    this.initialX = Number(evt.center.x);
  }

  onPan(evt: any) {
    let deltaX = evt.center.x - Math.abs(this.finalX - this.initialX);
    this.translate(this.target, this.currentX + deltaX);
  }

  onPanEnd(evt: any) {
    this.finalX = Number(evt.center.x);
    let deltaX = Math.abs(this.finalX - this.initialX);

    if (deltaX > this.EPSILON) {
      if (this.finalX > this.initialX) {
        this.snapRight(evt);
      }
      else {
        this.snapCenter(evt);
      }
    }
    else {
      this.snapCenter(evt);
    }
  }

  snapRight(evt: any) {
    this.translate(this.target, this.width);
    this.currentX = this.width;
    this.resetX();
  }

  snapCenter(evt: any) {
    this.translate(this.target, 0);
    this.currentX = 0;
    this.resetX();
  }

  translate(swipeMe: any, amount: number) {
    swipeMe.style.transition = 'all 150ms ease-out';
    let transformStyle = 'translateX(' + amount + 'px)';
    swipeMe.style.webkitTransform = transformStyle;
    swipeMe.style.MozTransform = transformStyle;
    swipeMe.style.msTransform = transformStyle;
    swipeMe.style.transform = transformStyle;
  }

  resetX() {
    this.initialX = 0;
    this.finalX = 0;
  }

  sideViewChange() {
    if (this.sideAmount > 0 && this.target != null) {
      this.width = document.getElementsByTagName("body").item(0).clientWidth * this.sideAmount;
      this.translate(this.target, this.width);
    }
  }
}
