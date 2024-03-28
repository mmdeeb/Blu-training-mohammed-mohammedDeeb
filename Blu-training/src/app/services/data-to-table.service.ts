import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableConfig, TableData } from 'ui';
@Injectable({
  providedIn: 'root'
})
export class DataToTableService {

  constructor() { }

  getTableData(): Observable<TableConfig> {
    const data: TableConfig = {
      columns: ['Firstname', 'Lastname', 'Email'],
      rows: [
        { firstname: 'John', lastname: 'Doe', email: 'john@example.com' },
        { firstname: 'Mary', lastname: 'Moe', email: 'mary@example.com' },
        { firstname: 'July', lastname: 'Dooley', email: 'july@example.com' }
      ]
    };

    return of(data);
  }
  
}
