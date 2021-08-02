import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizacionesComponent } from './civilizaciones.component';

describe('CivilizacionesComponent', () => {
  let component: CivilizacionesComponent;
  let fixture: ComponentFixture<CivilizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
