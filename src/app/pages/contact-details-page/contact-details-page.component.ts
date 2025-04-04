import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  route = inject(ActivatedRoute);
  contact!: Contact;
  contactId: string = '';

  ngOnInit() {
    this.route.params.subscribe((params) => (this.contactId = params['id']));
    this.contactService.getContactById(this.contactId).subscribe((contact) => {
      this.contact = contact;
    });
  }
}
