import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvnisclienteComponent } from './ovniscliente.component';

describe('OvnisclienteComponent', () => {
  let component: OvnisclienteComponent;
  let fixture: ComponentFixture<OvnisclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvnisclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvnisclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
