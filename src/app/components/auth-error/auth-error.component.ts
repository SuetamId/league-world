import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-error',
  standalone: true,
  imports: [],
  templateUrl: './auth-error.component.html',
  styleUrl: './auth-error.component.scss'
})
export class AuthErrorComponent {
  @Input() errorMessage: string | null = null;
}
