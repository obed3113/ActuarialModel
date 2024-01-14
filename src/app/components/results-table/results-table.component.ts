import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css'
})
export class ResultsTableComponent implements OnInit{
  resultsData: any;
  columns: any;
  constructor(private sharedDataService: SharedDataService) {

  }

  ngOnInit() {
    // Suscribirse a los cambios en los datos compartidos del shared-data service
    this.sharedDataService.resultsData$.subscribe((data) => {
      this.resultsData = data;
    });
  }
}
