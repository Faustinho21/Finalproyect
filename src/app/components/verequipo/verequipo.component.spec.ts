import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerequipoComponent } from './verequipo.component';

describe('VerequipoComponent', () => {
  let component: VerequipoComponent;
  let fixture: ComponentFixture<VerequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
