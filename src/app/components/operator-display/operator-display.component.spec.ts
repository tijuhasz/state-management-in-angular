import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDisplayComponent } from './operator-display.component';

describe('OperatorDisplayComponent', () => {
  let component: OperatorDisplayComponent;
  let fixture: ComponentFixture<OperatorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
