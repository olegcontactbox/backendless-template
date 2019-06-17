import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {

    constructor(
        private snackbarService: MatSnackBar,
    ) {
    }

    snackbar(msg: string, duration: number = 3000): void {
        this.snackbarService.open(msg, undefined, {duration});
    }
}
