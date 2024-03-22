import { Component, Input } from '@angular/core';
import { TableData } from './models/table-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-table', 
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [CommonModule]
})
export class TableComponent {

  public tableData: TableData[] = [
    { firstname: 'John', lastname: 'Doe', email: 'john@example.com' },
    { firstname: 'Mary', lastname: 'Moe', email: 'mary@example.com' },
    { firstname: 'July', lastname: 'Dooley', email: 'july@example.com' }
  ];
  constructor() { }


}