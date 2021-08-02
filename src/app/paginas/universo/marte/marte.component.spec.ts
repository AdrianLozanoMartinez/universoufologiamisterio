import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarteComponent } from './marte.component';

describe('MarteComponent', () => {
  let component: MarteComponent;
  let fixture: ComponentFixture<MarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
