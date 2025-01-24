import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsDetailComponent } from './champions-detail.component';

describe('ChampionsDetailComponent', () => {
  let component: ChampionsDetailComponent;
  let fixture: ComponentFixture<ChampionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
