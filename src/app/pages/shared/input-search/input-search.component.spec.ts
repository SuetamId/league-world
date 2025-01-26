import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchComponent } from './input-search.component';
import { ChampionsService } from '../../../services/champions.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSearchComponent],
      providers:[ChampionsService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
