import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionsComponent } from './champions.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ChampionsComponent', () => {
  let component: ChampionsComponent;
  let fixture: ComponentFixture<ChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsComponent],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
