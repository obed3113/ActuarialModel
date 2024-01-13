import { Component } from '@angular/core';
import {  FormControl,ReactiveFormsModule, Validators} from '@angular/forms'
import { CurrencyPipe } from '@angular/common';
import { DigitOnlyModule } from '@uiowa/digit-only';

@Component({
  selector: 'app-calculation',
  standalone: true,
  imports: [ReactiveFormsModule,CurrencyPipe,DigitOnlyModule],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent {
  mainLimit = new FormControl('0',Validators.min(0))
  mainRetention = new FormControl('0',Validators.min(0))
  executionType = new FormControl('Simple',Validators.required)
}
