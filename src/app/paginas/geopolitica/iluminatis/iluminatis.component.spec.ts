import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IluminatisComponent } from './iluminatis.component';

describe('IluminatisComponent', () => {
  let component: IluminatisComponent;
  let fixture: ComponentFixture<IluminatisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IluminatisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IluminatisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
