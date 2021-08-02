import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesadministradorComponent } from './viajesadministrador.component';

describe('ViajesadministradorComponent', () => {
  let component: ViajesadministradorComponent;
  let fixture: ComponentFixture<ViajesadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
