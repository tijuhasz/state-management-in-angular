import { NgModule } from '@angular/core';
import { AppConfig } from './app.config';
import { SettingsService } from './settings.service';
import { MediatorService } from './mediator.service';
import { ProcessSequenceService } from './process-sequence.service';

@NgModule({
    providers: [
        AppConfig,
        SettingsService,
        MediatorService,
        ProcessSequenceService,
    ]
})
export class ServicesModule {
}
