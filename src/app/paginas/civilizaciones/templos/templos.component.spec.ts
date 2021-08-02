import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplosComponent } from './templos.component';

describe('TemplosComponent', () => {
  let component: TemplosComponent;
  let fixture: ComponentFixture<TemplosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
