import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ChampionDetails, ChampionSkins } from '../../../../models/champions.model';
import { ChampionsService } from '../../../../services/champions.service';
import { AsyncPipe } from '@angular/common';
import { tagsClassesIcons, tagsClassesName } from '../../../../utility/map-utils';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { SkinDialogComponent } from '../skin-dialog/skin-dialog.component';

@Component({
  selector: 'app-champions-detail',
  standalone: true,
  imports: [AsyncPipe,MatCardModule],
  templateUrl: './champions-detail.component.html',
  styleUrl: './champions-detail.component.scss'
})
export class ChampionsDetailComponent implements OnInit {
  championName: string | null = null;
  championDetails$!: Observable<ChampionDetails>;

  constructor(private route: ActivatedRoute, private championsService: ChampionsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadChampionName()
  }

  private loadChampionName(): void {
    this.championDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        const name = params.get('name');
        return this.championsService.getByName(name!);
      })
    );
  }

  getIconForTag(tag: string): string | undefined {
    return tagsClassesIcons.get(tag);
  }

  getLastLetter(id: string): string {
    return id.charAt(id.length - 1);
  }

  getNameForTag(tag: string): string | undefined {
    return tagsClassesName.get(tag);
  }

  showSkinDatails(skin: ChampionSkins){
    const dialogRef = this.dialog.open(SkinDialogComponent, {
      data: {name: skin.name, urlImg: skin.splash},
      direction:'ltr',
      panelClass:'custom-dialog-content',
      autoFocus:false,
      hasBackdrop:true,
    });
  }
}
