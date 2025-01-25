import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ChampionsService } from '../../../../services/champions.service';
import { ChampionDetails } from '../../../../models/champions.model';
import { Observable } from 'rxjs';
import { LoaderService } from '../../../../services/loader.service';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule, AsyncPipe, MatIconModule],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss'
})
export class FavoritesListComponent {
  favorites$!: Observable<ChampionDetails[]>;
Array: any;
  constructor(private championsService: ChampionsService, public loaderService: LoaderService) {
    this.favorites$ = this.championsService.favorites$;
  }

  championDetailsByName(championName: string) {
    this.championsService.championDetails(championName)
  }
  removeOfFavorite(champion: ChampionDetails) {
    this.championsService.removeFavorite(champion)
  }
}
