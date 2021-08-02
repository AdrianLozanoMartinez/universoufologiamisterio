import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitologiaComponent } from './mitologia.component';

describe('MitologiaComponent', () => {
  let component: MitologiaComponent;
  let fixture: ComponentFixture<MitologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
