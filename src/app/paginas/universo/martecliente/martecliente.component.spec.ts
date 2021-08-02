import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarteclienteComponent } from './martecliente.component';

describe('MarteclienteComponent', () => {
  let component: MarteclienteComponent;
  let fixture: ComponentFixture<MarteclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarteclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarteclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
