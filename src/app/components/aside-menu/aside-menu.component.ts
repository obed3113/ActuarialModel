import { Component } from '@angular/core';
import { CalculationComponent } from '../calculation/calculation.component';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [CalculationComponent],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.css'
})
export class AsideMenuComponent {

}
