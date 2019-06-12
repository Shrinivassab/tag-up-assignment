import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedLogComponent } from './submitted-log.component';

describe('SubmittedLogComponent', () => {
  let component: SubmittedLogComponent;
  let fixture: ComponentFixture<SubmittedLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
