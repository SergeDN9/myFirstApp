import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appLightOnOver]'
})
export class LightOnOverDirective {

  @HostBinding('style.fontSize') myFontSize: string;
  @HostBinding('style.color') myColor: string;

  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.myFontSize = '3em', this.myColor = 'lightblue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.myFontSize = '2em', this.myColor = '#000';
  }

}
