import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasComponent } from './casas.component';

describe('CasasComponent', () => {
  let component: CasasComponent;
  let fixture: ComponentFixture<CasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
