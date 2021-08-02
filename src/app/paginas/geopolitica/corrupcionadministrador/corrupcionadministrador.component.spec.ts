import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrupcionadministradorComponent } from './corrupcionadministrador.component';

describe('CorrupcionadministradorComponent', () => {
  let component: CorrupcionadministradorComponent;
  let fixture: ComponentFixture<CorrupcionadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrupcionadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrupcionadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
