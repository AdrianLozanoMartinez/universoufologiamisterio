import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeopoliticaComponent } from './geopolitica.component';

describe('GeopoliticaComponent', () => {
  let component: GeopoliticaComponent;
  let fixture: ComponentFixture<GeopoliticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeopoliticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeopoliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
