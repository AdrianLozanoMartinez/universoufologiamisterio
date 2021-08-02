import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspiritusclienteComponent } from './espirituscliente.component';

describe('EspiritusclienteComponent', () => {
  let component: EspiritusclienteComponent;
  let fixture: ComponentFixture<EspiritusclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspiritusclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspiritusclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
