import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-calculation',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe, DigitOnlyModule, CommonModule],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent {
  showSpinner: boolean = false;
  form = this.fb.group({
    mainLimit: ['', {
      validators: [
        Validators.required,
        Validators.min(1)
      ],
      updateOn: 'blur'
    }],
    mainRetention: ['', {
      validators: [
        Validators.required,
        Validators.min(1)
      ], 
      updateOn: 'blur' }
    ],
    executionType: ['Simple',{
      validators:[Validators.required],
      updateOn:'change'
    }

    ]
  });


  constructor(private fb: FormBuilder,private sharedDataService: SharedDataService) { }

  get email() {
    return this.form.controls['mainLimit'];
  }

  get password() {
    return this.form.controls['mainRetention'];
  }
  
  onCalculateClick() {
    // Mostrar el spinner
    this.showSpinner = true;
    this.sharedDataService.startLoading();

    // Esperar 3 segundos, despues ocultar el spinner y 
    //llenar la dummy data simulando obtenerla de un http, 
    //estos datos se mostraran en el componente results-table usando el service como puente
    setTimeout(() => {
      
      this.showSpinner = false;

      const dummyData = [
        { "date": "2017-01-01", "Benchmark1": 25.5, "Benchmark2": 78.2 },
        { "date": "2017-01-02", "Benchmark1": 30.8, "Benchmark2": 65.3 },
        { "date": "2017-01-03", "Benchmark1": 40.2, "Benchmark2": 72.1 },
        { "date": "2017-01-04", "Benchmark1": 22.3, "Benchmark2": 60.5 },
        { "date": "2017-01-05", "Benchmark1": 15.7, "Benchmark2": 88.9 },
        { "date": "2017-01-06", "Benchmark1": 33.6, "Benchmark2": 77.4 },
        { "date": "2017-01-07", "Benchmark1": 28.1, "Benchmark2": 70.2 },
        { "date": "2017-01-08", "Benchmark1": 18.9, "Benchmark2": 75.8 },
        { "date": "2017-01-09", "Benchmark1": 36.4, "Benchmark2": 63.7 },
        { "date": "2018-01-10", "Benchmark1": 45.2, "Benchmark2": 80.6 },
        { "date": "2018-01-11", "Benchmark1": 20.7, "Benchmark2": 68.4 },
        { "date": "2018-01-12", "Benchmark1": 27.3, "Benchmark2": 82.0 },
        { "date": "2018-01-13", "Benchmark1": 38.6, "Benchmark2": 76.1 },
        { "date": "2018-01-14", "Benchmark1": 31.9, "Benchmark2": 69.8 },
        { "date": "2018-01-15", "Benchmark1": 23.8, "Benchmark2": 74.3 },
        { "date": "2018-01-16", "Benchmark1": 19.5, "Benchmark2": 81.5 },
        { "date": "2018-01-17", "Benchmark1": 42.7, "Benchmark2": 66.9 },
        { "date": "2018-01-18", "Benchmark1": 29.4, "Benchmark2": 73.7 },
        { "date": "2019-01-19", "Benchmark1": 16.8, "Benchmark2": 79.4 },
        { "date": "2019-01-20", "Benchmark1": 35.1, "Benchmark2": 67.8 },
        { "date": "2019-01-21", "Benchmark1": 21.4, "Benchmark2": 84.3 },
        { "date": "2019-01-22", "Benchmark1": 26.0, "Benchmark2": 71.6 },
        { "date": "2019-01-23", "Benchmark1": 33.9, "Benchmark2": 62.4 },
        { "date": "2019-01-24", "Benchmark1": 37.5, "Benchmark2": 87.5 },
        { "date": "2019-01-25", "Benchmark1": 24.6, "Benchmark2": 64.8 }
      ];
      this.sharedDataService.setResultsData(dummyData);
    }, 3000);
  }
}