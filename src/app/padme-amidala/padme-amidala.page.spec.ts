import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadmeAmidalaPage } from './padme-amidala.page';

describe('PadmeAmidalaPage', () => {
  let component: PadmeAmidalaPage;
  let fixture: ComponentFixture<PadmeAmidalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadmeAmidalaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadmeAmidalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
