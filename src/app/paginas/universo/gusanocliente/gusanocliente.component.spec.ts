import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GusanoclienteComponent } from './gusanocliente.component';

describe('GusanoclienteComponent', () => {
  let component: GusanoclienteComponent;
  let fixture: ComponentFixture<GusanoclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GusanoclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GusanoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
