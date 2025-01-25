import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { SkinDialogData } from '../../../../models/skin-data.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-skin-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './skin-dialog.component.html',
  styleUrl: './skin-dialog.component.scss'
})
export class SkinDialogComponent {

  constructor(public dialogRef: MatDialogRef<SkinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SkinDialogData){}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
