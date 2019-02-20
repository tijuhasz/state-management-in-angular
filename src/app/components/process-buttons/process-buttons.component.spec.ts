import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessButtonsComponent } from './process-buttons.component';

describe('ProcessButtonsComponent', () => {
  let component: ProcessButtonsComponent;
  let fixture: ComponentFixture<ProcessButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
