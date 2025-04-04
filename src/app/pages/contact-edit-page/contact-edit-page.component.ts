import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-edit',
  standalone: false,
  templateUrl: './contact-edit-page.component.html',
  styleUrl: './contact-edit-page.component.scss',
})
export class ContactEditPageComponent {
  action: 'Create' | 'Save Changes' = 'Create';
  form!: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
