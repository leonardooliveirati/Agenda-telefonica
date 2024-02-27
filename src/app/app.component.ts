// app.component.ts
import { Component } from '@angular/core';

interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string = 'Codificador';
  lastName: string = 'Byte';
  phoneNumber: string = '8885559999';
  phoneBook: Contact[] = [];

  submitForm() {
    const newContact: Contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    };
    this.phoneBook.push(newContact);
    this.phoneBook.sort((a, b) => a.lastName.localeCompare(b.lastName));
    this.clearForm();
  }

  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
  }
}
