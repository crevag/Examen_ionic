import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChewbaccaPage } from './chewbacca.page';

describe('ChewbaccaPage', () => {
  let component: ChewbaccaPage;
  let fixture: ComponentFixture<ChewbaccaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChewbaccaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChewbaccaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
