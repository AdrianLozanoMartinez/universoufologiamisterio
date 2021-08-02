import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplosclienteComponent } from './temploscliente.component';

describe('TemplosclienteComponent', () => {
  let component: TemplosclienteComponent;
  let fixture: ComponentFixture<TemplosclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplosclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplosclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
