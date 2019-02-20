import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator-selector/operator-selector.component';
import { MediatorService } from '../../services/mediator.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-operator-display',
  templateUrl: './operator-display.component.html',
  styleUrls: ['./operator-display.component.css']
})
export class OperatorDisplayComponent implements OnInit {

  public currentOperator: Operator = null;

  constructor(
    private mediatorService: MediatorService,
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {
    this.mediatorService.listenOperatorChanged.subscribe(
      operatorMessage => this.onOperatorChanged()
    );
  }

  onOperatorChanged() {
    this.currentOperator = this.settingsService.getPermanentSetting('currentOperator');
  }

}
