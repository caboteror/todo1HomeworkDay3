import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
	selector: '[appNewTask]'
})
export class NewTaskDirective {
	@HostListener('mouseenter')
	onMouseEnter() {
		this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
	}
	@HostListener('mouseleave')
	onMouseLeave() {
		this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
	}
	constructor(private el: ElementRef, private renderer: Renderer) {
		renderer.setElementStyle(el.nativeElement, 'text-decoration', 'none');
	}
}
