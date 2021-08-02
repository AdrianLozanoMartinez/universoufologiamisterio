import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarteadministradorComponent } from './marteadministrador.component';

describe('MarteadministradorComponent', () => {
  let component: MarteadministradorComponent;
  let fixture: ComponentFixture<MarteadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarteadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarteadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
