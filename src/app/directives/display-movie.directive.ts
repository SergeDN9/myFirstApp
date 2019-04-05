import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDisplayMovie]'
})
export class DisplayMovieDirective {

@Input() displayList;

  constructor() { }

}
