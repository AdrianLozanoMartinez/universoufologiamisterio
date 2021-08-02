import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GusanoComponent } from './gusano.component';

describe('GusanoComponent', () => {
  let component: GusanoComponent;
  let fixture: ComponentFixture<GusanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GusanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GusanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
