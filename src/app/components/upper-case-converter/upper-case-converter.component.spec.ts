import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCaseConverterComponent } from './upper-case-converter.component';

describe('UpperCaseConverterComponent', () => {
  let component: UpperCaseConverterComponent;
  let fixture: ComponentFixture<UpperCaseConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperCaseConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperCaseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
