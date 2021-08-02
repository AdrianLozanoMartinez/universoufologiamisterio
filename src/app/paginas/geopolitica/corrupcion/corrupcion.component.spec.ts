import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrupcionComponent } from './corrupcion.component';

describe('CorrupcionComponent', () => {
  let component: CorrupcionComponent;
  let fixture: ComponentFixture<CorrupcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrupcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrupcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
