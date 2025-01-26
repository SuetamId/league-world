import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthLayoutComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  errorMessage!: string ;

  ngOnInit(): void {
    this.createForm();
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private snackBarService: SnackBarService){}

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.getRawValue()).subscribe({
      next:() =>{
        this.snackBarService.openSnackBar('Login efetuado com sucesso!', 'X');
        this.router.navigate(['/home']);
      },
      error:(err: Error) => {
        this.errorMessage = err.message;
        console.error(err.message)
      },
    })
  }
}
