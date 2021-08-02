import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrupcionclienteComponent } from './corrupcioncliente.component';

describe('CorrupcionclienteComponent', () => {
  let component: CorrupcionclienteComponent;
  let fixture: ComponentFixture<CorrupcionclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrupcionclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrupcionclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
