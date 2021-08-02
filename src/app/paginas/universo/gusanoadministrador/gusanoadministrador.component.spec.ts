import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GusanoadministradorComponent } from './gusanoadministrador.component';

describe('GusanoadministradorComponent', () => {
  let component: GusanoadministradorComponent;
  let fixture: ComponentFixture<GusanoadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GusanoadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GusanoadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
