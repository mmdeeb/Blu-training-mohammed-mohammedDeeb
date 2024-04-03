import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe,PreRenderPipe } from 'pipes';
import { TableConfig } from './models/table-config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-table', 
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [CommonModule,FormsModule,FilterPipe,PreRenderPipe]
})
export class TableComponent implements OnInit {

  @Input() config: TableConfig ={ columns: [], rows: [] };

  generalFilter: string = '';
  filteredRows: any[]=[];
  
  constructor() { }
  
  
  ngOnInit(): void {
    this.filteredRows = this.config.rows;
  }


}