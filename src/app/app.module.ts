import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { OperatorSelectorComponent } from './components/operator-selector/operator-selector.component';
import { OperatorDisplayComponent } from './components/operator-display/operator-display.component';
import { ProcessButtonsComponent } from './components/process-buttons/process-buttons.component';
import { ProcessDisplayComponent } from './components/process-display/process-display.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorSelectorComponent,
    OperatorDisplayComponent,
    ProcessButtonsComponent,
    ProcessDisplayComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
