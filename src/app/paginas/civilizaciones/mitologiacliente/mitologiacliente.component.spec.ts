import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitologiaclienteComponent } from './mitologiacliente.component';

describe('MitologiaclienteComponent', () => {
  let component: MitologiaclienteComponent;
  let fixture: ComponentFixture<MitologiaclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitologiaclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitologiaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
