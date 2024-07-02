import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizarAulaComponent } from './localizar-aula.component';

describe('LocalizarAulaComponent', () => {
  let component: LocalizarAulaComponent;
  let fixture: ComponentFixture<LocalizarAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalizarAulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalizarAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
