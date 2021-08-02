import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetasclienteComponent } from './exoplanetascliente.component';

describe('ExoplanetasclienteComponent', () => {
  let component: ExoplanetasclienteComponent;
  let fixture: ComponentFixture<ExoplanetasclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetasclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetasclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
