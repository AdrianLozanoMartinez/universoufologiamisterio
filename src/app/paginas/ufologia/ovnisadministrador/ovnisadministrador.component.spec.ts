import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvnisadministradorComponent } from './ovnisadministrador.component';

describe('OvnisadministradorComponent', () => {
  let component: OvnisadministradorComponent;
  let fixture: ComponentFixture<OvnisadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvnisadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvnisadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
