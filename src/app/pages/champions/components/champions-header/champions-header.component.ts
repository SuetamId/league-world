import { Component } from '@angular/core';
import { TokenService } from '../../../../services/token.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-champions-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './champions-header.component.html',
  styleUrl: './champions-header.component.scss'
})
export class ChampionsHeaderComponent {
constructor(public tokenService: TokenService){}
}
