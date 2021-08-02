import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasclienteComponent } from './casascliente.component';

describe('CasasclienteComponent', () => {
  let component: CasasclienteComponent;
  let fixture: ComponentFixture<CasasclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasasclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasasclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
