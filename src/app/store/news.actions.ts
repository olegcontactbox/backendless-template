import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

export enum NewsTypes {
    LoadNews = '[NEWS] Load news',
    LoadNewsSuccess = '[NEWS] Load news [SUCCESS]',
    LoadNewsError = '[NEWS] Load news [ERROR]',
}

// NEWS
export class LoadNewsAction implements Action {
    readonly type = NewsTypes.LoadNews;
}
export class LoadNewsSuccessAction implements Action {
    readonly type = NewsTypes.LoadNewsSuccess;
    constructor(public payload: any) {
        console.log(`in action success`, payload);
    }
}
export class LoadNewsErrorAction implements Action {
    readonly type = NewsTypes.LoadNewsError;
    constructor(public payload: any) { }
}


export type NewsActions
    = LoadNewsAction
    | LoadNewsSuccessAction
    | LoadNewsErrorAction
    ;
