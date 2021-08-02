import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegroadministradorComponent } from './negroadministrador.component';

describe('NegroadministradorComponent', () => {
  let component: NegroadministradorComponent;
  let fixture: ComponentFixture<NegroadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegroadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegroadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
