import { Directive,ElementRef, Input, Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: '[appRoundedCorner]'
})
export class RoundedCornerDirective implements OnInit{
  @Input() appRoundedCorner!:string;
  constructor(
    private elmRef: ElementRef, 
    private renderer: Renderer2) 
   { }
   ngOnInit() {
    this.elmRef.nativeElement.classList.add(this.appRoundedCorner);
  }
  
}

