import { Injectable } from '@angular/core';
import { AppConfig } from './app.config';

@Injectable()
export class SettingsService {

    private transientSettingsTypes = ['completedSteps'];

    private transientSettings = {
        'completedSteps': { type: 'JSON', value: Object.assign({}, AppConfig.CompletedStepsDefaults) },
    };

    private permanentSettingsTypes = [
        'currentOperator',
    ];

    private permanentSettings = {
        'currentOperator': { type: 'JSON', value: AppConfig.DefaultOperator },
    };

    constructor() { }

    setTransientSetting(name: string, value: any) {
        if (this.transientSettingsTypes.indexOf(name) === -1) {
            console.log('settings.service - setTransientSetting() - did not recognize setting: ' + name);
            return;
        }
        this.transientSettings[name].value = value;
    }

    getTransientSetting(name: string): any {
        if (this.transientSettingsTypes.indexOf(name) === -1) {
            console.log('settings.service - getTransientSetting() - did not recognize setting: ' + name);
            return;
        }
        return this.transientSettings[name].value;
    }

    setPermanentSetting(name: string, value: any) {
        if (this.permanentSettingsTypes.indexOf(name) === -1) {
            console.log('settings.service - setPermanentSetting() - did not recognize setting: ' + name);
            return;
        }
        if ((typeof(Storage) !== 'undefined')) {
            localStorage.setItem(name, this.settingToString(this.permanentSettings[name].type, value));
        } else {
            this.permanentSettings[name].value = value;
        }
    }

    getPermanentSetting(name: string): any {
        if (this.permanentSettingsTypes.indexOf(name) === -1) {
            console.log('settings.service - getPermanentSetting() - did not recognize setting: ' + name);
            return;
        }
        if ((typeof(Storage) !== 'undefined') && localStorage.getItem(name)) {
            return this.stringToSetting(this.permanentSettings[name].type, localStorage.getItem(name));
        } else {
            return this.permanentSettings[name].value;
        }
    }

    clearPermanentSetting(name: string) {
        if (this.permanentSettingsTypes.indexOf(name) === -1) {
            console.log('settings.service - clearPermanentSetting() - did not recognize setting: ' + name);
            return;
        }

        if ((typeof(Storage) !== 'undefined')) {
            localStorage.removeItem(name);
        } else {
            this.permanentSettings[name].value = null;
        }
    }

    settingToString(type: string, value: any): string {
        switch (type) {
            case 'Number': return value.toString();
            case 'String': return value;
            case 'Array': return JSON.stringify(value);
            case 'JSON': return JSON.stringify(value);
            default: return '';
        }
    }

    stringToSetting(type: string, value: string) {
        switch (type) {
            case 'Number': return Number(value);
            case 'String': return value;
            case 'Array': return JSON.parse(value);
            case 'JSON': return JSON.parse(value);
            default: return null;
        }
    }

}
