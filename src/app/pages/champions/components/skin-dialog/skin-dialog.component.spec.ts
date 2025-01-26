import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinDialogComponent } from './skin-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
class MatDialogRefMock {
  close = jasmine.createSpy('close');
}

describe('SkinDialogComponent', () => {
  let component: SkinDialogComponent;
  let fixture: ComponentFixture<SkinDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinDialogComponent],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
          ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
