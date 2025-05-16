import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { CarMake } from './make';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-make-list',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './car-make-list.component.html'
})
export class CarMakeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'country', 'foundedYear', 'models'];
  public makes!: CarMake[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const url = environment.baseUrl + 'api/Makes/Makestats';
    this.http.get<CarMake[]>(url).subscribe({
      next: (result) => (this.makes = result),
      error: (e) => console.error(e)
    });
  }
}
