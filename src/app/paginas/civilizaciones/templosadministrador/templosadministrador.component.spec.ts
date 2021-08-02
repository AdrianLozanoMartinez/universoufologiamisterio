import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplosadministradorComponent } from './templosadministrador.component';

describe('TemplosadministradorComponent', () => {
  let component: TemplosadministradorComponent;
  let fixture: ComponentFixture<TemplosadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplosadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplosadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
