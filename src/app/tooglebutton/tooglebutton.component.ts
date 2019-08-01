import { Component } from '@angular/core'
import { logging } from 'protractor';
import { Logs } from 'selenium-webdriver';
import { getLocaleDateFormat } from '@angular/common';
import { lookup } from 'dns';

@Component({
    selector: 'app-tooglebutton',
    templateUrl: './tooglebutton.component.html',
    styleUrls: ['./tooglebutton.component.css']
})

export class TooglebuttonComponent {
    showSecret: boolean = false
    logs = []
    
    toogleLogs() {
        this.showSecret = !this.showSecret;
        this.logs.push(this.logs.length + 1)
    }

    getBackground() {
        return this.logItem >= 5 ? 'red' : 'none'
    }
}