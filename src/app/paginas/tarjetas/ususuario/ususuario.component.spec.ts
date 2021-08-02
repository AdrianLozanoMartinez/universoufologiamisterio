import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsusuarioComponent } from './ususuario.component';

describe('UsusuarioComponent', () => {
  let component: UsusuarioComponent;
  let fixture: ComponentFixture<UsusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
