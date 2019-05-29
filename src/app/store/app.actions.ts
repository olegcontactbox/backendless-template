import { Action } from '@ngrx/store';

export enum AppTypes {
    LoadNews = '[APP] Load news',
    LoadNewsSuccess = '[APP] Load news [SUCCESS]',
    LoadNewsError = '[APP] Load news [ERROR]',
}

// NEWS
export class LoadNewsAction implements Action {
    readonly type = AppTypes.LoadNews;
}
export class LoadNewsSuccessAction implements Action {
    readonly type = AppTypes.LoadNewsSuccess;
    constructor(public payload: any[]) {
    }
}
export class LoadNewsErrorAction implements Action {
    readonly type = AppTypes.LoadNewsError;
}


export type AppActions
    = LoadNewsAction
    | LoadNewsSuccessAction
    | LoadNewsErrorAction
    ;
