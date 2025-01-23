import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthErrorComponent } from '../auth-error/auth-error.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    AuthErrorComponent,
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})

export class AuthLayoutComponent {
  cachedImage: string | null = null;
  @Input() errorMessage!: string;
  @Input() form!: FormGroup;
  @Input() formControls: { label: string, controlName: string, type: string }[] = [];
  @Input() buttonLabel = '';
  @Input() link1Text = '';
  @Input() link2Text = '';
  @Input() link2Url = '';
  @Output() submit = new EventEmitter<void>();

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    this.submit.emit();
  }
}
