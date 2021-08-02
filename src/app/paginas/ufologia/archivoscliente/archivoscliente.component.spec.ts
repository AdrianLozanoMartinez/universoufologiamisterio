import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosclienteComponent } from './archivoscliente.component';

describe('ArchivosclienteComponent', () => {
  let component: ArchivosclienteComponent;
  let fixture: ComponentFixture<ArchivosclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivosclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivosclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
