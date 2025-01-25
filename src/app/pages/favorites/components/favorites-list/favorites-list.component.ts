import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChampionsService } from '../../../../services/champions.service';
import { ChampionAction, ChampionDetails } from '../../../../models/champions.model';
import { Observable } from 'rxjs';
import { LoaderService } from '../../../../services/loader.service';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss'
})
export class FavoritesListComponent {
  favorites$!: Observable<ChampionDetails[]>;
  actions: ChampionAction[] = [
    {
      label: 'Remover',
      icon: 'delete',
      iconColor: 'warn',
      callback: (champion: ChampionDetails) => this.removeOfFavorite(champion),
    },
    {
      label: 'Detalhes',
      icon: 'info',
      iconColor: 'accent',
      callback: (champion: ChampionDetails) => this.championDetailsByName(champion),
    },
  ];
  constructor(private championsService: ChampionsService, public loaderService: LoaderService) {
    this.favorites$ = this.championsService.favorites$;
  }
  championDetailsByName(champion: ChampionDetails) {
    this.championsService.championDetails(champion)
  }
  removeOfFavorite(champion: ChampionDetails) {
    this.championsService.removeFavorite(champion)
  }
}
