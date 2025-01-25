import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-favorites-header',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './favorites-header.component.html',
  styleUrl: './favorites-header.component.scss'
})
export class FavoritesHeaderComponent {

}
