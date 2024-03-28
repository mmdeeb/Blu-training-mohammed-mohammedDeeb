import { Component, Input, OnInit } from '@angular/core';
import { TableData } from './models/table-data';
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

  @Input() tableData: TableData[]=[];
  @Input() config: TableConfig ={ columns: [], rows: [] };

  filters: {[key: string]: string} = {};
  filteredRows: any[]=[];
  private filterPipe = new FilterPipe();
  
  constructor() { }
  
  
  ngOnInit(): void {
    this.filteredRows = this.config.rows;
  }

  applyFilter(): void {
    this.filteredRows = this.config.rows;
    for (const [key, value] of Object.entries(this.filters)) {
      if (value) {
        this.filteredRows = this.filterPipe.transform(this.filteredRows, key, value);
      }
    }
  }

}