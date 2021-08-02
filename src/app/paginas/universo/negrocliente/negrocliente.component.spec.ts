import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegroclienteComponent } from './negrocliente.component';

describe('NegroclienteComponent', () => {
  let component: NegroclienteComponent;
  let fixture: ComponentFixture<NegroclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegroclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegroclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
