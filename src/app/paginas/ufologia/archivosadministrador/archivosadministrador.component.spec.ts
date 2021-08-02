import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosadministradorComponent } from './archivosadministrador.component';

describe('ArchivosadministradorComponent', () => {
  let component: ArchivosadministradorComponent;
  let fixture: ComponentFixture<ArchivosadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivosadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivosadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
