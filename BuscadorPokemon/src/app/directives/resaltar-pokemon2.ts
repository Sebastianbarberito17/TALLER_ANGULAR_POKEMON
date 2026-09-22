import { Directive, ElemenRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appResaltarPokemon2]',
  standalone: true
})

export class ResaltarPokemon2 {
  private el = inject(ElementRef);

  colorBorde = input<string>('#FFFF00');

  @HostListener('mouseenter') onMouseEnter() {
    this.aplicarEfecto(`3px solid${this.ColorBorde()}`, 'scale(1)', 'none');

  }
  @HostListener('mouseleave') onMouseLeave() {
    this.aplicarEfecto(`1px solid #e0e0e0`, 'scale(1.03)','0 8px 16 pxrgba(0,0,0,0.15)');
  }

  aplicarEfecto(borde:string, escala: string, sombra:string){
    const elemento = this.el.nativeElement;

    elemento.style.border = borde;
    elemento.style.transform = escala;
    elemento.style.boxShadow = sombra;
    elemento.style.transition = 'all 0.25s ease-in-out'

  }
}

