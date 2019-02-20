import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { MediatorService } from './mediator.service';
import { AppConfig } from './app.config';

export interface CompletedSteps {
    operatorSelected: boolean;
    setupClicked: boolean;
    runClicked: boolean;
    completeClicked: boolean;
  }

@Injectable()
export class ProcessSequenceService {

    private mandatorySteps = ['operatorSelected'];

    constructor(
        private mediatorService: MediatorService,
        private settingsService: SettingsService,
    ) { }

    initializeProcessSequence() {
        this.settingsService.setTransientSetting('completedSteps', Object.assign({}, AppConfig.CompletedStepsDefaults));
    }

    setCompleted(stepName: string) {
        this.setStepValue(stepName, true);
    }

    setUncompleted(stepName: string) {
        this.setStepValue(stepName, false);
    }

    private setStepValue(stepName: string, value: boolean) {
        const completedSteps = this.settingsService.getTransientSetting('completedSteps');
        completedSteps[stepName] = value;
        this.settingsService.setTransientSetting('completedSteps', completedSteps);

        this.mediatorService.triggerCompletedStepsChanged('');
    }

    checkIfCompleted(stepName: string): boolean {
        const completedSteps = this.settingsService.getTransientSetting('completedSteps');

        // first check mandatorySteps in the order of mandatorySteps array (return false if earlier step is false)
        for (let i = 0; i < this.mandatorySteps.length; i++) {
            if (completedSteps[this.mandatorySteps[i]] === false) {
                return false;
            }
            if (this.mandatorySteps[i] === stepName) {
                return true;
            }
        }

        // if mandatory steps did not return false, check requested step if it is completed
        if (completedSteps[stepName] === true) {
            return true;
        } else {
            return false;
        }
    }

}
