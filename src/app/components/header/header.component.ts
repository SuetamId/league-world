import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../services/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet ,MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  constructor(private authService: AuthService, private router: Router){

  }
  goToFavorites(){
    this.router.navigate(['/favorites']);
  }
  goToHome(){
    this.router.navigate(['/home']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
