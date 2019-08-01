import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = "testing my";
    serverCreated = false;
    servers = ['Testserver', 'Testserver2'];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true
        }, 2000);
    }

    ngOnInit() {}

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getBoldFont() {
        return this.allowNewServer === true ? 'normal' : 'bold'
    }
}