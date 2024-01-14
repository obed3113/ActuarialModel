import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone:true,
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})

// TODO: adaptar la logica del toggler a la logica de angular


export class ThemeToggleComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  handleToggleClick(): void {
    const element = this.el.nativeElement;
    const isDark = element.classList.contains("dark");

    if (isDark) {
      this.renderer.removeClass(element, 'dark');
      localStorage.setItem("theme", "light");
    } else {
      this.renderer.addClass(element, 'dark');
      localStorage.setItem("theme", "dark");
    }
  }
}