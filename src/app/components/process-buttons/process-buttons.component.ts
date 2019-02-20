import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../../services/mediator.service';
import { ProcessSequenceService } from '../../services/process-sequence.service';

@Component({
  selector: 'app-process-buttons',
  templateUrl: './process-buttons.component.html',
  styleUrls: ['./process-buttons.component.css']
})
export class ProcessButtonsComponent implements OnInit {

  buttonDisabled = {
    'setup': true,
    'run': true,
    'complete': true,
  };

  constructor(
    private mediatorService: MediatorService,
    private processSequenceService: ProcessSequenceService
  ) { }

  ngOnInit() {
    this.mediatorService.listenCompletedStepsChanged.subscribe(
      completedSteps => this.checkCompletedSteps()
    );
    this.initializeCompletedSteps();
  }

  initializeCompletedSteps() {
    this.processSequenceService.initializeProcessSequence();
  }

  checkCompletedSteps() {
    this.buttonDisabled.setup = !this.processSequenceService.checkIfCompleted('operatorSelected')
                            || this.processSequenceService.checkIfCompleted('setupClicked')
                            || this.processSequenceService.checkIfCompleted('runClicked');

    this.buttonDisabled.run = !this.processSequenceService.checkIfCompleted('operatorSelected')
                            || !this.processSequenceService.checkIfCompleted('setupClicked')
                            || this.processSequenceService.checkIfCompleted('runClicked')
                            || this.processSequenceService.checkIfCompleted('completeClicked');

    this.buttonDisabled.complete = !this.processSequenceService.checkIfCompleted('operatorSelected')
                            || !this.processSequenceService.checkIfCompleted('runClicked')
                            || this.processSequenceService.checkIfCompleted('completeClicked');
  }

  onButtonClicked(stepName) {
    this.processSequenceService.setCompleted(stepName);
  }

}
