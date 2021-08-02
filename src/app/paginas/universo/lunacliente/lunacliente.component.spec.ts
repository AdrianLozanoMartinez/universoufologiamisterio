import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaclienteComponent } from './lunacliente.component';

describe('LunaclienteComponent', () => {
  let component: LunaclienteComponent;
  let fixture: ComponentFixture<LunaclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunaclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
