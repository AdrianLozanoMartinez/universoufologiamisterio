import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisteriosComponent } from './misterios.component';

describe('MisteriosComponent', () => {
  let component: MisteriosComponent;
  let fixture: ComponentFixture<MisteriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisteriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
