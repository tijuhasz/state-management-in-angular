import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MediatorService {

    // for listening to changes to the completed steps in the app
    private completedSteps: string = null;
    private completedStepsSource = new BehaviorSubject<string>(this.completedSteps);
    listenCompletedStepsChanged = this.completedStepsSource.asObservable();

    // for listening to operator change events
    private operatorMessage: string = '';
    private operatorChangedSource = new BehaviorSubject<string>(this.operatorMessage);
    listenOperatorChanged = this.operatorChangedSource.asObservable();

    constructor() { }

    // for broadcasting changes to the completed steps in the app
    triggerCompletedStepsChanged(completedSteps: string) {
        this.completedStepsSource.next(completedSteps);
    }

    // for broadcasting that the operator has changed
    triggerOperatorChanged(operatorMessage: string) {
        this.operatorChangedSource.next(operatorMessage);
    }

}

