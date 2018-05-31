import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAcctComponent } from './export-acct.component';

describe('ExportAcctComponent', () => {
  let component: ExportAcctComponent;
  let fixture: ComponentFixture<ExportAcctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportAcctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
