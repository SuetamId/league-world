import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChampionsService } from './champions.service';
import { SnackBarService } from './snack-bar.service';
import { Router } from '@angular/router';
import { ChampionDetails } from '../models/champions.model';
import { environment } from '../environments/environments';

describe('ChampionsService', () => {
  let service: ChampionsService;
  let httpMock: HttpTestingController;
  let mockSnackBarService: jasmine.SpyObj<SnackBarService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockSnackBarService = jasmine.createSpyObj('SnackBarService', ['openSnackBar']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ChampionsService,
        { provide: SnackBarService, useValue: mockSnackBarService },
        { provide: Router, useValue: mockRouter },
      ],
    });

    service = TestBed.inject(ChampionsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('updateSearchTerm', () => {
    it('should update the search term', (done) => {
      const term = 'Ashe';
      service.updateSearchTerm(term);

      service.searchTerm$.subscribe((result) => {
        expect(result).toBe(term);
        done();
      });
    });
  });

  describe('championDetails', () => {
    it('should navigate to champion details and reset search term', () => {
      const mockChampion: ChampionDetails = { id:'Aatrox',name: 'Aatrox', title: 'a Espada Darkin', images:{icon:'', loading:'', splash:''} };
      service.championDetails(mockChampion);

      expect(mockRouter.navigate).toHaveBeenCalledWith([`/champion-details/${mockChampion.name.trim()}`]);
    });
  });

  describe('getAll', () => {
    it('should fetch all champions', (done) => {
      const mockChampion: ChampionDetails[] = [
        { id:'Aatrox',name: 'Aatrox', title: 'a Espada Darkin', images:{icon:'', loading:'', splash:''} },
        { id:'Ahri',name: 'Ahri', title: 'a Raposa de Nove Caudas', images:{icon:'', loading:'', splash:''} }
      ];

      service.getAll().subscribe((champions) => {
        expect(champions).toEqual(mockChampion);
        done();
      });

      const req = httpMock.expectOne(`${environment.api_url_endpoint}/champions?lang=pt_BR`);
      expect(req.request.method).toBe('GET');
      req.flush(mockChampion);
    });

    it('should filter champions by search term', (done) => {
      const mockChampion: ChampionDetails[] = [{ id:'Aatrox',name: 'Aatrox', title: 'a Espada Darkin', images:{icon:'', loading:'', splash:''} }];

      service.updateSearchTerm('Aatrox');
      service.getAll().subscribe((champions) => {
        expect(champions).toEqual([{ id:'Aatrox',name: 'Aatrox', title: 'a Espada Darkin', images:{icon:'', loading:'', splash:''} }]);
        done();
      });

      const req = httpMock.expectOne(`${environment.api_url_endpoint}/champions?lang=pt_BR`);
      req.flush(mockChampion);
    });
  });

  describe('getByName', () => {
    it('should fetch champion by name', (done) => {
      const mockChampion: ChampionDetails = { id:'Aatrox',name: 'Aatrox', title: 'a Espada Darkin', images:{icon:'', loading:'', splash:''} };

      service.getByName('Ahri').subscribe((champion) => {
        expect(champion).toEqual(mockChampion);
        done();
      });

      const req = httpMock.expectOne(`${environment.api_url_endpoint}/champions/Ahri?lang=pt_BR`);
      expect(req.request.method).toBe('GET');
      req.flush(mockChampion);
    });
  });

  describe('addFavorite', () => {
    it('should add a champion to favorites', (done) => {
      const mockChampion: ChampionDetails = { id:'Aatrox',name: 'Aatrox', title: 'a Espada Darkin', images:{icon:'', loading:'', splash:''} };

      spyOn(localStorage, 'setItem').and.callThrough();

      service.addFavorite(mockChampion);
      service.favorites$.subscribe((favorites) => {
        expect(favorites).toContain(mockChampion);
        done();
      });

      expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify([mockChampion]));
      expect(mockSnackBarService.openSnackBar).toHaveBeenCalledWith(`${mockChampion.name} foi adicionado aos favoritos 🌟`, 'x');
    });
  });

  describe('removeFavorite', () => {
    it('should remove a champion from favorites', (done) => {
      const mockChampion: ChampionDetails = { id:'Aatrox',name: 'Aatrox', title: 'a Espada Darkin', images:{icon:'', loading:'', splash:''} };

      spyOn(localStorage, 'setItem').and.callThrough();

      service.addFavorite(mockChampion);
      service.removeFavorite(mockChampion);

      service.favorites$.subscribe((favorites) => {
        expect(favorites).not.toContain(mockChampion);
        done();
      });

      expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify([]));
      expect(mockSnackBarService.openSnackBar).toHaveBeenCalledWith(`${mockChampion.name} foi removido dos favoritos!`, 'x');
    });
  });
});
