import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChampionsService } from '../../../../services/champions.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class InputSearchComponent {
  searchControl = new FormControl('');

  constructor(private championsService: ChampionsService) {}

  onSearch(): void {
    this.championsService.updateSearchTerm(this.searchControl.getRawValue() || '');
  }

  onClearSearch(): void {
    this.searchControl.reset()
    this.championsService.updateSearchTerm(this.searchControl.getRawValue() || '');
  }
}
