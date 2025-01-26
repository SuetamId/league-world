import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthErrorComponent } from './auth-error.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AuthErrorComponent', () => {
  let component: AuthErrorComponent;
  let fixture: ComponentFixture<AuthErrorComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthErrorComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the error message when errorMessage is set', () => {
    const testErrorMessage = 'Credenciais invalidas!';
    component.errorMessage = testErrorMessage;
    fixture.detectChanges();
    const errorElement = debugElement.query(By.css('.error-card p'));
    expect(errorElement).toBeTruthy();
    expect(errorElement.nativeElement.textContent).toContain(testErrorMessage);
  });

  it('should not display the error card when errorMessage is null', () => {
    component.errorMessage = null;
    fixture.detectChanges();
    const errorElement = debugElement.query(By.css('.error-card'));
    expect(errorElement).toBeNull();
  });
});
