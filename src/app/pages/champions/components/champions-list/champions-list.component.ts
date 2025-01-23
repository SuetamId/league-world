import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ChampionSummary } from '../../../../models/champions.model';
import { Observable } from 'rxjs';
import { ChampionsService } from '../../../../services/champions.service';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-champions-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule, AsyncPipe, MatIconModule],
  templateUrl: './champions-list.component.html',
  styleUrl: './champions-list.component.scss'
})
export class ChampionsListComponent {
  champions$!: Observable<ChampionSummary[]>;

  constructor(private championsService: ChampionsService){
    this.champions$ = this.championsService.getAll();
  }

}
