import { Component, inject, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'contact-details-page',
  standalone: false,
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss',
})
export class ContactDetailsPageComponent implements OnInit {
  contactService: ContactService = inject(ContactService);
  contact!: Contact;

  ngOnInit() {
    this.contactService
      .getContactById('5a56640269f443a5d64b32ca')
      .pipe(take(1))
      .subscribe((contact) => {
        this.contact = contact;
      });
  }
}
