import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ChampionDetails } from '../../../../models/champions.model';
import { Observable } from 'rxjs';
import { ChampionsService } from '../../../../services/champions.service';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champions-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule, AsyncPipe, MatIconModule],
  templateUrl: './champions-list.component.html',
  styleUrl: './champions-list.component.scss'
})
export class ChampionsListComponent {
  champions$!: Observable<ChampionDetails[]>;

  constructor(private championsService: ChampionsService, private router: Router){
    this.champions$ = this.championsService.getAll();
  }

  championDetailsByName(championName: string){
    this.router.navigate([`/champion-details/${championName}`])
  }
}
