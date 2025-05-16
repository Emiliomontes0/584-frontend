import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { environment } from '../environments/environment';
import { Model } from './model';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './model.component.html'
})
export class ModelsComponent implements OnInit {
  models: Model[] = [];
  displayedColumns: string[] = [
    'id', 'name', 'year', 'engine', 'transmission', 'bodyStyle', 'price', 'makeName'
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = environment.baseUrl + 'api/CarModels/modelmake';
    this.http.get<Model[]>(url).subscribe({
      next: result => this.models = result,
      error: err => console.error(err)
    });
  }
}
