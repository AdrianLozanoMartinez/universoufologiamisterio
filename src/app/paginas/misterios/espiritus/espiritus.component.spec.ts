import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspiritusComponent } from './espiritus.component';

describe('EspiritusComponent', () => {
  let component: EspiritusComponent;
  let fixture: ComponentFixture<EspiritusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspiritusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspiritusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
