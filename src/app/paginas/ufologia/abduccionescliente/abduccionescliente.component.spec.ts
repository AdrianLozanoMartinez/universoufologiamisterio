import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbduccionesclienteComponent } from './abduccionescliente.component';

describe('AbduccionesclienteComponent', () => {
  let component: AbduccionesclienteComponent;
  let fixture: ComponentFixture<AbduccionesclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbduccionesclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbduccionesclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
