import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesclienteComponent } from './basescliente.component';

describe('BasesclienteComponent', () => {
  let component: BasesclienteComponent;
  let fixture: ComponentFixture<BasesclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasesclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
