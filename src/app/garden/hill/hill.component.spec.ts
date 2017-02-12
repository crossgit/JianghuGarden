/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HillComponent } from './hill.component';

describe('HillComponent', () => {
  let component: HillComponent;
  let fixture: ComponentFixture<HillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
