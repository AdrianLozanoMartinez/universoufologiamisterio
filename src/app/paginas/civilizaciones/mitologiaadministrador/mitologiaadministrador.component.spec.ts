import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitologiaadministradorComponent } from './mitologiaadministrador.component';

describe('MitologiaadministradorComponent', () => {
  let component: MitologiaadministradorComponent;
  let fixture: ComponentFixture<MitologiaadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitologiaadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitologiaadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
