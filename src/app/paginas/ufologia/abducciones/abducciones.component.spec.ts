import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbduccionesComponent } from './abducciones.component';

describe('AbduccionesComponent', () => {
  let component: AbduccionesComponent;
  let fixture: ComponentFixture<AbduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
