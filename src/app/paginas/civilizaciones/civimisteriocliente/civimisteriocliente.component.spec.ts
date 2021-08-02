import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivimisterioclienteComponent } from './civimisteriocliente.component';

describe('CivimisterioclienteComponent', () => {
  let component: CivimisterioclienteComponent;
  let fixture: ComponentFixture<CivimisterioclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivimisterioclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivimisterioclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
