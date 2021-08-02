import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesclienteComponent } from './viajescliente.component';

describe('ViajesclienteComponent', () => {
  let component: ViajesclienteComponent;
  let fixture: ComponentFixture<ViajesclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
