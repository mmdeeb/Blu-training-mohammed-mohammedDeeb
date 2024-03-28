import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent, TableConfig } from "ui";
import { TableData } from 'ui';
import { DataToTableService } from './services/data-to-table.service';

@Component({
    selector: 'blu-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableComponent]
})
export class AppComponent {

  public tableData1: TableData[] = [];
  public tableData: TableConfig = { columns: [], rows: [] };
  title = 'Blu-training';

  constructor(private dataToTableService: DataToTableService) {
    this.getTableData1();
    this.getTableData();
  }


  getTableData1(): void {
    this.dataToTableService.getTableData1().subscribe(data => {
      this.tableData1 = data;
    });
  }

  getTableData(): void {
    this.dataToTableService.getTableData().subscribe(data => {
      this.tableData = data;
    });
  }

}
