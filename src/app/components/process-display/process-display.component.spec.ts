import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDisplayComponent } from './process-display.component';

describe('ProcessDisplayComponent', () => {
  let component: ProcessDisplayComponent;
  let fixture: ComponentFixture<ProcessDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
