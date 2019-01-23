import { Directive,ElementRef, Renderer2, OnInit,HostListener, HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[hover]'
})

export class HoverHightlightDirective /*implements OnInit*/{

@HostBinding('style.color') textColor:string;
@Input('hover') highLightColor : { background : string,text :string }

  constructor(private elRef : ElementRef, private render : Renderer2) { }
  
 @HostListener ("mouseover") mouseMasuk(eventData : Event){
	this.render.setStyle(this.elRef.nativeElement,'background-color',
	this.highLightColor.background);
	this.textColor = this.highLightColor.text
 }	
@HostListener ("mouseleave") mouseKeluar(eventData : Event){
	this.render.setStyle(this.elRef.nativeElement,'background-color','transparent');
	this.textColor = 'black';
 }
/* 
  ngOnInit():void {
	this.render.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  }
*/
}
