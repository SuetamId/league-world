import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionsListComponent } from './champions-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ChampionAction, ChampionDetails } from '../../../../models/champions.model';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Input } from '@angular/core';
import { LoaderService } from '../../../../services/loader.service';

class MockLoaderService {  private _loading$ = of(false); // Valor padrão

  get loading$() {
    return this._loading$;
  }

  set loading$(value: Observable<boolean>) {
    this._loading$ = value;
  }
}

describe('ChampionsListComponent', () => {
  let component: ChampionsListComponent;
  let fixture: ComponentFixture<ChampionsListComponent>;
  let loaderService: MockLoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsListComponent],
      providers:[HttpClient, HttpHandler,
        {provide: LoaderService, useClass: MockLoaderService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsListComponent);
    component = fixture.componentInstance;
    loaderService = TestBed.inject(LoaderService) as unknown as MockLoaderService;
    component.champions$ = of([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "No results found" when champions$ is empty', () => {
    component.champions$ = of([]);
    fixture.detectChanges();

    const emptyContent = fixture.debugElement.query(By.css('.empty-content'));
    expect(emptyContent).toBeTruthy();
    expect(emptyContent.nativeElement.textContent).toContain(
      'Não encontramos nenhum resultado com sua busca!'
    );
  });

  it('should display app-card when champions$ has data', () => {
    const mockChampion: ChampionDetails[] = [{ id:'Aatrox',name: 'Aatrox', title: 'a Espada Darkin', images:{icon:'', loading:'', splash:''} }];

    component.champions$ = of(mockChampion);
    fixture.detectChanges();

    const appCard = fixture.debugElement.query(By.css('app-card'));
    expect(appCard).toBeTruthy();
  });

  it('should not display "No results found" when loaderService.loading$ is true', () => {
    spyOnProperty(loaderService, 'loading$').and.returnValue(of(true));
    fixture.detectChanges();

    const emptyContent = fixture.debugElement.query(By.css('.empty-content'));
    expect(emptyContent).toBeFalsy();
  });
});
