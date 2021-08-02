import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearadministradorComponent } from './crearadministrador.component';

describe('CrearadministradorComponent', () => {
  let component: CrearadministradorComponent;
  let fixture: ComponentFixture<CrearadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
