import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaadministradorComponent } from './lunaadministrador.component';

describe('LunaadministradorComponent', () => {
  let component: LunaadministradorComponent;
  let fixture: ComponentFixture<LunaadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunaadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
