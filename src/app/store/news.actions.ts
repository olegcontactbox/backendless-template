import { Action } from '@ngrx/store';

export enum NewsTypes {
    LoadNews = '[NEWS] Load news',
    LoadNewsSuccess = '[NEWS] Load news [SUCCESS]',
    LoadNewsError = '[NEWS] Load news [ERROR]',

    SetCurrentNewsAmount = '[NEWS] Set current news amount',
    SetLastLoaded = '[NEWS] Set last loaded',
    SetIsAllNewsLoaded = '[NEWS] Set is all news loaded',
}

// NEWS
export class LoadNewsAction implements Action {
    readonly type = NewsTypes.LoadNews;
    constructor() { }
}
export class LoadNewsSuccessAction implements Action {
    readonly type = NewsTypes.LoadNewsSuccess;
    constructor(public payload: any) { }
}
export class LoadNewsErrorAction implements Action {
    readonly type = NewsTypes.LoadNewsError;
    constructor(public payload: any) { }
}

export class SetCurrentNewsAmountAction implements Action {
    readonly type = NewsTypes.SetCurrentNewsAmount;
    constructor(public payload: number) { }
}

export class SetLastLoadedAction implements Action {
    readonly type = NewsTypes.SetLastLoaded;
    constructor(public payload: any) { }
}

export class SetIsAllNewsLoadedAction implements Action {
    readonly type = NewsTypes.SetIsAllNewsLoaded;
    // constructor(public payload: boolean) { }
}




export type NewsActions
    = LoadNewsAction
    | LoadNewsSuccessAction
    | LoadNewsErrorAction
    | SetCurrentNewsAmountAction
    | SetLastLoadedAction
    | SetIsAllNewsLoadedAction
    ;
