import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>;
  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    console.log(el);
    this.htmlElement = el;
  }

}
