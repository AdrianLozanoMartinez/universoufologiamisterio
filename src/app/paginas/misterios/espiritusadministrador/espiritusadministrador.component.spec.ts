import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspiritusadministradorComponent } from './espiritusadministrador.component';

describe('EspiritusadministradorComponent', () => {
  let component: EspiritusadministradorComponent;
  let fixture: ComponentFixture<EspiritusadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspiritusadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspiritusadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
