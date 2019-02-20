import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../../services/mediator.service';
import { SettingsService } from '../../services/settings.service';
import { ProcessSequenceService } from '../../services/process-sequence.service';

export interface Operator {
  name: string;
  id: number;
}

@Component({
  selector: 'app-operator-selector',
  templateUrl: './operator-selector.component.html',
  styleUrls: ['./operator-selector.component.css']
})
export class OperatorSelectorComponent implements OnInit {

  public operators: Array<Operator> = [
    {
      name: 'Johnny',
      id: 1
    },
    {
      name: 'Jimmy',
      id: 2
    }
  ];
  currentOperator: Operator = {
    id: null,
    name: null
  };

  constructor(
    private settingService: SettingsService,
    private mediatorService: MediatorService,
    private processSequenceService: ProcessSequenceService,
  ) { }

  ngOnInit() {
    this.initOperator();
  }

  initOperator() {
    this.currentOperator = this.settingService.getPermanentSetting('currentOperator');
    if (this.currentOperator.id) {
      this.processSequenceService.setCompleted('operatorSelected');
    }
  }

  onOperatorSelected(index) {
    this.currentOperator = this.operators[index];
    this.settingService.setPermanentSetting('currentOperator', this.operators[index]);
    this.mediatorService.triggerOperatorChanged('');

    this.processSequenceService.initializeProcessSequence();
    this.processSequenceService.setCompleted('operatorSelected');
  }

}
