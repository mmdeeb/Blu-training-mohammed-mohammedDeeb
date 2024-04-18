import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableConfig } from 'ui';
@Injectable({
  providedIn: 'root'
})
export class DataToTableService {

  constructor() { }

  getTableData(): Observable<TableConfig> {
    const data: TableConfig = {
      columns: ['Firstname', 'Lastname', 'Email'],
      rows: [
        { Firstname: 'John', Lastname: 'Doe', Email: 'john@example.com' },
        { Firstname: 'Mary', Lastname: 'Moe', Email: 'mary@example.com' },
        { Firstname: 'July', Lastname: 'Dooley', Email: 'july@example.com' }
      ]
    };

    return of(data);
  }
  
}
