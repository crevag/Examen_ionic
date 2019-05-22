import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarthVaderPage } from './darth-vader.page';

describe('DarthVaderPage', () => {
  let component: DarthVaderPage;
  let fixture: ComponentFixture<DarthVaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarthVaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarthVaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
