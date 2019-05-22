import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralGrievusPage } from './general-grievus.page';

describe('GeneralGrievusPage', () => {
  let component: GeneralGrievusPage;
  let fixture: ComponentFixture<GeneralGrievusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralGrievusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralGrievusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
