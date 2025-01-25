import { Component } from '@angular/core';
import { ChampionAction, ChampionDetails } from '../../../../models/champions.model';
import { Observable } from 'rxjs';
import { ChampionsService } from '../../../../services/champions.service';
import { LoaderService } from '../../../../services/loader.service';
import { CardComponent } from '../../../shared/card/card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-champions-list',
  standalone: true,
  imports: [CardComponent,AsyncPipe],
  templateUrl: './champions-list.component.html',
  styleUrl: './champions-list.component.scss'
})
export class ChampionsListComponent {
  champions$!: Observable<ChampionDetails[]>;
  actions: ChampionAction[] = [
    {
      label: 'Favoritos',
      icon: 'favorite',
      iconColor: 'warn',
      callback: (champion: ChampionDetails) => this.addToFavorite(champion),
    },
    {
      label: 'Detalhes',
      icon: 'info',
      iconColor: 'accent',
      callback: (champion: ChampionDetails) => this.championDetailsByName(champion),
    },
  ];

  constructor(private championsService: ChampionsService, public loaderService: LoaderService) {
    this.champions$ = this.championsService.getAll();
  }
  addToFavorite(champion: ChampionDetails): void {
    this.championsService.addFavorite(champion);
  }
  championDetailsByName(champion: ChampionDetails) {
    this.championsService.championDetails(champion);
  }
}
