import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Button } from '../../node_modules/protractor';

@Component({ template: `
   <button (click)="sendMessage()"> Send message</button>
`
})
export class HomeComponent {
    constructor(private messageService: MessageService) { }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from Home Component to App Component!');
    }

    clearMessage(): void {
        // clear message
        this.messageService.clearMessage();
    }
}
