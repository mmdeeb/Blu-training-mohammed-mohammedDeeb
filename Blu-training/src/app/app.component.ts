import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "ui";
import { TableData } from 'ui';

@Component({
    selector: 'blu-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableComponent]
})
export class AppComponent {
  title = 'Blu-training';
  
}
