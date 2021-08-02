import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegroComponent } from './negro.component';

describe('NegroComponent', () => {
  let component: NegroComponent;
  let fixture: ComponentFixture<NegroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
