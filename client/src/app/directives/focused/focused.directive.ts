import {Directive, Input, Renderer, ElementRef} from '@angular/core'

@Directive({
  selector: '[focused]'
})
export class FocusedDirective {


  constructor(private elementRef: ElementRef, private renderer: Renderer){}
  	
  @Input()
      set focused(value: boolean){
         if(value){
           this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'scrollIntoViewIfNeeded');
         }
    }

  

}
