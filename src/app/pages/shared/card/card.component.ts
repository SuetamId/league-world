import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { ChampionAction, ChampionDetails } from '../../../models/champions.model';
import { LoaderService } from '../../../services/loader.service';
import { CardSkeletonComponent } from '../card-skeleton/card-skeleton.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardSkeletonComponent, MatCardModule, MatButtonModule, AsyncPipe, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() champions$: Observable<ChampionDetails[]> | null = null;
  @Input() actions: ChampionAction[] = [];
  constructor(public loaderService: LoaderService){}

  itemClick(champion: ChampionDetails): void {
    console.log('Item clicked:', champion);
  }
}
