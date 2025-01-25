import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesHeaderComponent } from './favorites-header.component';

describe('FavoritesHeaderComponent', () => {
  let component: FavoritesHeaderComponent;
  let fixture: ComponentFixture<FavoritesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
