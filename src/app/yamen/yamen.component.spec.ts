/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YamenComponent } from './yamen.component';

describe('YamenComponent', () => {
  let component: YamenComponent;
  let fixture: ComponentFixture<YamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
