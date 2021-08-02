import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivimisteriosComponent } from './civimisterios.component';

describe('CivimisteriosComponent', () => {
  let component: CivimisteriosComponent;
  let fixture: ComponentFixture<CivimisteriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivimisteriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivimisteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
