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
  currentX: number = 0;
  clientWidth: number = 0;

  sideAmount: number = .9;

  target: any = null;

  constructor() { }

  ngOnInit() {
  }

  onPanStart(evt: any) {
    this.target = evt.target
    this.clientWidth = evt.target.clientWidth - 10;
    this.initialX = Number(evt.center.x);
  }

  onPan(evt: any) {
    let deltaX = evt.center.x - Math.abs(this.finalX - this.initialX);
    this.translate(evt.target, this.currentX + deltaX);
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
    this.currentX = document.getElementsByTagName("body").item(0).clientWidth * this.sideAmount;
    this.translate(evt.target, this.currentX);
    this.resetX();
  }

  snapCenter(evt: any) {
    this.translate(evt.target, 0);
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
      this.currentX = document.getElementsByTagName("body").item(0).clientWidth * this.sideAmount;
      this.translate(this.target, this.currentX);
    }
  }
}
