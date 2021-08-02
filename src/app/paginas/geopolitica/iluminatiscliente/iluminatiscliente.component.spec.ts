import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IluminatisclienteComponent } from './iluminatiscliente.component';

describe('IluminatisclienteComponent', () => {
  let component: IluminatisclienteComponent;
  let fixture: ComponentFixture<IluminatisclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IluminatisclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IluminatisclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
