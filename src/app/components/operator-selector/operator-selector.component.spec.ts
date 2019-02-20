import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorSelectorComponent } from './operator-selector.component';

describe('OperatorSelectorComponent', () => {
  let component: OperatorSelectorComponent;
  let fixture: ComponentFixture<OperatorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
