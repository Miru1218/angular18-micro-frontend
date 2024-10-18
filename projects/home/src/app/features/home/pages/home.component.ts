import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response;
        console.log('Data fetched successfully', this.data);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    });
  }
}