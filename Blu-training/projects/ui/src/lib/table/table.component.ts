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

  @Input() tableData: TableData[]=[];

  @Input() config: { columns: string[]; rows: any[] }={ columns: [], rows: [] };

  constructor() { }


}