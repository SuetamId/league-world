import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsListComponent } from './champions-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ChampionsListComponent', () => {
  let component: ChampionsListComponent;
  let fixture: ComponentFixture<ChampionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsListComponent],
      providers:[HttpClient, HttpHandler]
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
