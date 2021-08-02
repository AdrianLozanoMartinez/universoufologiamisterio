import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvnisComponent } from './ovnis.component';

describe('OvnisComponent', () => {
  let component: OvnisComponent;
  let fixture: ComponentFixture<OvnisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvnisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
