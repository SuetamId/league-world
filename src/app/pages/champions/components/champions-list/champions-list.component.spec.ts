import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsListComponent } from './champions-list.component';

describe('ChampionsListComponent', () => {
  let component: ChampionsListComponent;
  let fixture: ComponentFixture<ChampionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
