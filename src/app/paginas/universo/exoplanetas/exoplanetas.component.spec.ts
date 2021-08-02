import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetasComponent } from './exoplanetas.component';

describe('ExoplanetasComponent', () => {
  let component: ExoplanetasComponent;
  let fixture: ComponentFixture<ExoplanetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
