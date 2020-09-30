import { Injectable, Inject } from '@angular/core';

@Injectable()
export class MessageService {
    messages: string[] = [];

    add(message: string): void {
        this.messages.push(message);
    }

    clear(): void {
        this.messages = [];
    }
}
