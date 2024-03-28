import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "ui";
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
  title = 'Blu-training';

  constructor(private dataToTableService: DataToTableService) {
    this.getTableData1();
  }


  getTableData1(): void {
    this.dataToTableService.getTableData1().subscribe(data => {
      this.tableData1 = data;
    });
  }
}
