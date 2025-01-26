import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesListComponent } from './favorites-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('FavoritesListComponent', () => {
  let component: FavoritesListComponent;
  let fixture: ComponentFixture<FavoritesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesListComponent],
      providers:[HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
