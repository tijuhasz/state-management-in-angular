import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../../services/mediator.service';
import { ProcessSequenceService } from '../../services/process-sequence.service';

@Component({
  selector: 'app-process-display',
  templateUrl: './process-display.component.html',
  styleUrls: ['./process-display.component.css']
})
export class ProcessDisplayComponent implements OnInit {

  processMessage: string = null;

  constructor(
    private mediatorService: MediatorService,
    private processSequenceService: ProcessSequenceService,
  ) { }

  ngOnInit() {
    this.mediatorService.listenCompletedStepsChanged.subscribe(
      completedSteps => this.checkCompletedSteps()
    );
  }

  checkCompletedSteps() {
    if (!this.processSequenceService.checkIfCompleted('operatorSelected')) {
      this.processMessage = 'Please select an operator!';
    } else if (!this.processSequenceService.checkIfCompleted('setupClicked')) {
      this.processMessage = 'Start setup!';
    } else if (!this.processSequenceService.checkIfCompleted('runClicked')) {
      this.processMessage = 'Start run!';
    } else if (!this.processSequenceService.checkIfCompleted('completeClicked')) {
      this.processMessage = 'Complete the job!';
    } else if (this.processSequenceService.checkIfCompleted('completeClicked')) {
      this.processMessage = 'Have a beer!';
    } else {
      this.processMessage = 'Unknown application state! Run for your life!';
    }
  }

}

