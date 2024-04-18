import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent, TableConfig } from "ui";
import { DataToTableService } from './services/data-to-table.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'blu-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ CommonModule,FormsModule,RouterOutlet, TableComponent]
})
export class AppComponent {

  public tableData: TableConfig = { columns: [], rows: [] };
  title = 'Blu-training';
  toastService: any;
  displayEmailModal: boolean = false;
  displayWelcomeModal:boolean = false;
  emailToBeSentTo: string | undefined;
  emailContent: string | undefined;
  name: string |undefined;

  constructor(private dataToTableService: DataToTableService) {
    this.getTableData();
  }

  getTableData(): void {
    this.dataToTableService.getTableData().subscribe(data => {
      this.tableData = data;
    });
  }

  onCellClick(value: string, column: string) {
    switch (column) {
      case 'Email':
        this.openEmailCard(value);
        break;
      case 'Firstname':
      case 'Lastname':
        this.welcomeUser(value);
        break;
      default:
        console.log('Column not recognized');
    }
  }

  openEmailCard(email: string) {
    this.displayEmailModal = true;
    this.emailToBeSentTo = email;
    this.emailContent = '';
  }

  sendEmail() {
    console.log('Email to:', this.emailToBeSentTo);
    console.log('Email content:', this.emailContent);
    this.closeEmailModal();
  }
  closeEmailModal() {
    this.displayEmailModal = false;
    this.emailToBeSentTo = undefined;
    this.emailContent = undefined;
  }

  
  closeWelcomeModal() {
    this.displayWelcomeModal = false;
  }
  private welcomeUser(name: string) {
    this.displayWelcomeModal = true;
    this.name = name;

  }

}
