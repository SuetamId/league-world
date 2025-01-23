import { Component } from '@angular/core';
import { ChampionsHeaderComponent } from './components/champions-header/champions-header.component';
import { ChampionsListComponent } from './components/champions-list/champions-list.component';

@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [ChampionsHeaderComponent, ChampionsListComponent],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss'
})
export class ChampionsComponent {

}
