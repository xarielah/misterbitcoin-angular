import { Component, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'contacts-page',
  standalone: false,
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss',
})
export class ContactsPageComponent {
  contactService: ContactService = inject(ContactService);
  contacts$: Observable<Contact[]> = this.contactService.contacts$;

  ngOnInit() {
    this.contactService.loadContacts().pipe(take(1)).subscribe();
  }
}
