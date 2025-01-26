import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionsDetailComponent } from './champions-detail.component';
import { ActivatedRoute } from '@angular/router';
import { ChampionsService } from '../../../../services/champions.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ChampionDetails, ChampionSkins } from '../../../../models/champions.model';
import { SkinDialogComponent } from '../skin-dialog/skin-dialog.component';

describe('ChampionsDetailComponent', () => {
  let component: ChampionsDetailComponent;
  let fixture: ComponentFixture<ChampionsDetailComponent>;
  let mockChampionsService: jasmine.SpyObj<ChampionsService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockActivatedRoute: ActivatedRoute;

  beforeEach(async () => {
    mockChampionsService = jasmine.createSpyObj('ChampionsService', ['getByName']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    mockActivatedRoute = {
      paramMap: of({
        get: (key: string) => (key === 'name' ? 'Ahri' : null),
      }),
    } as any;

    TestBed.configureTestingModule({
      imports: [ChampionsDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ChampionsService, useValue: mockChampionsService },
        { provide: MatDialog, useValue: mockDialog },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionsDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call loadChampionName and set championDetails$', () => {
      const mockChampion: ChampionDetails = { id:'Aatrox',name: 'Aatrox', title: 'a Espada Darkin', images:{icon:'', loading:'', splash:''} };
      mockChampionsService.getByName.and.returnValue(of(mockChampion));

      component.ngOnInit();

      component.championDetails$.subscribe((details) => {
        expect(details).toEqual(mockChampion);
      });

      expect(mockChampionsService.getByName).toHaveBeenCalledWith('Ahri');
    });
  });

  describe('getIconForTag', () => {
    it('should return the correct icon for a tag', () => {
      const tag = 'Mage';
      const mockIcon = 'mage-icon.png';
      spyOn(component, 'getIconForTag').and.returnValue(mockIcon);

      const result = component.getIconForTag(tag);
      expect(result).toBe(mockIcon);
    });
  });

  describe('getLastLetter', () => {
    it('should return the last letter of a string', () => {
      const id = 'Champion123';
      const lastLetter = component.getLastLetter(id);

      expect(lastLetter).toBe('3');
    });
  });

  describe('getNameForTag', () => {
    it('should return the correct name for a tag', () => {
      const tag = 'Mage';
      const mockName = 'Mago';
      spyOn(component, 'getNameForTag').and.returnValue(mockName);

      const result = component.getNameForTag(tag);
      expect(result).toBe(mockName);
    });
  });

  describe('showSkinDatails', () => {
    it('should open MatDialog with the correct data', () => {
      const mockSkin: ChampionSkins = {
        id: '1',
        name: 'Foxfire Ahri',
        splash: 'splash.png',
        loading:'loading.png'
      };

      component.showSkinDatails(mockSkin);

      expect(mockDialog.open).toHaveBeenCalledWith(SkinDialogComponent, {
        data: { name: mockSkin.name, urlImg: mockSkin.splash },
        direction: 'ltr',
        panelClass: 'custom-dialog-content',
        autoFocus: false,
        hasBackdrop: true,
      });
    });
  });
});
