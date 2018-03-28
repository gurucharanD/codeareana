import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacRegisterComponent } from './fac-register.component';

describe('FacRegisterComponent', () => {
  let component: FacRegisterComponent;
  let fixture: ComponentFixture<FacRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
