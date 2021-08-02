import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasadministradorComponent } from './casasadministrador.component';

describe('CasasadministradorComponent', () => {
  let component: CasasadministradorComponent;
  let fixture: ComponentFixture<CasasadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasasadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasasadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
