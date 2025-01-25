import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card-skeleton.component.html',
  styleUrl: './card-skeleton.component.scss'
})
export class CardSkeletonComponent {

}
