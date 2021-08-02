import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeradministradorComponent } from './veradministrador.component';

describe('VeradministradorComponent', () => {
  let component: VeradministradorComponent;
  let fixture: ComponentFixture<VeradministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeradministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeradministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
