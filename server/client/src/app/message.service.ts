import {Injectable, Inject} from "@angular/core"

@Injectable()
export class MessageService {
    messages: string[] = []

    add (message: string) {
        this.message.push(message)
    }

    clear () {
        this.message = []
    }
}