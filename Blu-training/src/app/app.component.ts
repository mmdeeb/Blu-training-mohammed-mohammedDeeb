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

  public tableData: TableData[] = [];
  title = 'Blu-training';

  constructor(private dataToTableService: DataToTableService) {
    this.getTableData();
  }


  getTableData(): void {
    this.dataToTableService.getTableData().subscribe(data => {
      this.tableData = data;
    });
  }
}
