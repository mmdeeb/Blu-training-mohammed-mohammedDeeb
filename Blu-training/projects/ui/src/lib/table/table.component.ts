import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from 'pipes';
import { TableConfig } from './models/table-config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-table', 
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [CommonModule,FormsModule,FilterPipe]
})
export class TableComponent implements OnInit {

  @Input() config: TableConfig ={ columns: [], rows: [] };

  filters: {[key: string]: string} = {};
  filteredRows: any[]=[];
  
  constructor() { }
  
  
  ngOnInit(): void {
    this.filteredRows = this.config.rows;
  }


}