import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbduccionesadministradorComponent } from './abduccionesadministrador.component';

describe('AbduccionesadministradorComponent', () => {
  let component: AbduccionesadministradorComponent;
  let fixture: ComponentFixture<AbduccionesadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbduccionesadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbduccionesadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
