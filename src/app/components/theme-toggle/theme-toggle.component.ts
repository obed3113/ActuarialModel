import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone:true,
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent implements OnInit {
  theme: string ='light';

  ngOnInit() {
    this.theme = this.getInitialTheme();
    this.applyTheme(this.theme);
  }

  handleToggleClick() {
    const isDark = this.theme === 'dark';
    this.theme = isDark ? 'light' : 'dark';
    this.applyTheme(this.theme);
    this.saveThemeToLocalStorage(this.theme);
  }

  private getInitialTheme(): string {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') ?? 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme(theme: string): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  private saveThemeToLocalStorage(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
