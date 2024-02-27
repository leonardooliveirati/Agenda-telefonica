import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '././app.component.html',
  styleUrls: ['././app.component.css']
})
export class AppComponent {
  firstName: string = 'Codificador';
  lastName: string = 'Byte';
  phoneNumber: string = '8885559999';

  contacts: any[] = [];

  submitForm(form: any) {
    if (form.valid) {
      this.contacts.push({
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber
      });
      form.resetForm();
    }
  }
}
