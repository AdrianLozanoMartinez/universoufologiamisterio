import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IluminatisadministradorComponent } from './iluminatisadministrador.component';

describe('IluminatisadministradorComponent', () => {
  let component: IluminatisadministradorComponent;
  let fixture: ComponentFixture<IluminatisadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IluminatisadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IluminatisadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
