import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UfologiaComponent } from './ufologia.component';

describe('UfologiaComponent', () => {
  let component: UfologiaComponent;
  let fixture: ComponentFixture<UfologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UfologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UfologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
