import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsHeaderComponent } from './champions-header.component';

describe('ChampionsHeaderComponent', () => {
  let component: ChampionsHeaderComponent;
  let fixture: ComponentFixture<ChampionsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
