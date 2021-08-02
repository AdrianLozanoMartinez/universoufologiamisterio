import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetasadministradorComponent } from './exoplanetasadministrador.component';

describe('ExoplanetasadministradorComponent', () => {
  let component: ExoplanetasadministradorComponent;
  let fixture: ComponentFixture<ExoplanetasadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetasadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetasadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
