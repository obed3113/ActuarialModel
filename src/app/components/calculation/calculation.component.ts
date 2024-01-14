import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms'
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DigitOnlyModule } from '@uiowa/digit-only';

@Component({
  selector: 'app-calculation',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe, DigitOnlyModule, CommonModule],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent {
  form = this.fb.group({
    mainLimit: ['', {
      validators: [
        Validators.required,
        Validators.min(0)
      ],
      updateOn: 'change'
    }],
    mainRetention: ['', {
      validators: [
        Validators.required,
        Validators.min(0)
      ], 
      updateOn: 'change' }
    ],
    executionType: ['Simple',{
      validators:[Validators.required],
      updateOn:'change'
    }

    ]
  });


  constructor(private fb: FormBuilder) { }

  get email() {
    return this.form.controls['mainLimit'];
  }

  get password() {
    return this.form.controls['mainRetention'];
  }
}

function customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null;
  }
}

