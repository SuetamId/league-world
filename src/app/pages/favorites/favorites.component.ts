import { Component } from '@angular/core';
import { FavoritesHeaderComponent } from './components/favorites-header/favorites-header.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [FavoritesHeaderComponent, FavoritesListComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

}
