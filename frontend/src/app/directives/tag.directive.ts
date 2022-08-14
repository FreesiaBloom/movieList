import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTag]'
})
export class TagDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '#e0e0e0';
    this.el.nativeElement.style.padding = '.1rem .3rem';
    this.el.nativeElement.style.marginRight = '.5rem';
    this.el.nativeElement.style.borderRadius = '.1rem';
  }

}
