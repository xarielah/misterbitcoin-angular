import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ContactFilter } from '../../models/contact.model';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'contact-filter',
  standalone: false,
  templateUrl: './contact-filter.component.html',
  styleUrl: './contact-filter.component.scss',
})
export class ContactFilterComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  contactService: ContactService = inject(ContactService);

  filterBySubject = new Subject<ContactFilter>();

  filterBy!: ContactFilter;

  ngOnInit() {
    this.contactService.filterBy$.subscribe((filterBy) => {
      this.filterBy = filterBy;
    });

    this.filterBySubject
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        console.log('Fetching contacts!');
        this.contactService.setFilterBy(this.filterBy);
      });
  }

  onFilterChange(filterBy: ContactFilter) {
    this.filterBySubject.next(filterBy);
  }
}
