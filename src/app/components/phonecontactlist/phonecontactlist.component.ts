import { Component } from '@angular/core';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  phoneContactList: string[] = [
    'DILG Hotline: 8888',
    'PNP Hotline: 117',
    'Caloocan City Government Contact Information Telephone: (02) 8331-8203',
  ];
  phoneContactName: string = '';

  addPhoneContacts() {
    this.phoneContactList.push(this.phoneContactName);
  }
}
