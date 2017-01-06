import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

    @Input() message: string
    @Input() title: string

    @Output() confirmed = new EventEmitter()

    yes() {
        this.confirmed.emit(null)
    }
}