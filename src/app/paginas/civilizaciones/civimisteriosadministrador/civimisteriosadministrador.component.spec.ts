import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivimisteriosadministradorComponent } from './civimisteriosadministrador.component';

describe('CivimisteriosadministradorComponent', () => {
  let component: CivimisteriosadministradorComponent;
  let fixture: ComponentFixture<CivimisteriosadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivimisteriosadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivimisteriosadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
