import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesadministradorComponent } from './basesadministrador.component';

describe('BasesadministradorComponent', () => {
  let component: BasesadministradorComponent;
  let fixture: ComponentFixture<BasesadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasesadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
