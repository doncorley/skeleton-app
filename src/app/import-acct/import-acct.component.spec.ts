import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAcctComponent } from './import-acct.component';

describe('ImportAcctComponent', () => {
  let component: ImportAcctComponent;
  let fixture: ComponentFixture<ImportAcctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportAcctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
