import { Component } from '@angular/core';
import { ChampionsHeaderComponent } from './components/champions-header/champions-header.component';
import { ChampionsListComponent } from './components/champions-list/champions-list.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [ChampionsHeaderComponent, ChampionsListComponent, InputSearchComponent],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss'
})
export class ChampionsComponent {

}
