import { Action } from '@ngrx/store';
import { INews } from '../../core/models/interfaces/news';

export enum NewsTypes {
    LoadNews = '[NEWS] Load news',
    LoadNewsSuccess = '[NEWS] Load news [SUCCESS]',
    LoadNewsError = '[NEWS] Load news [ERROR]',

    LoadAllNewsAmount = '[NEWS] Load all news amount',
    LoadAllNewsAmountSuccess = '[NEWS] Load all news amount [SUCCESS]',
    LoadAllNewsAmountError = '[NEWS] Load all news amount[ERROR]',

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
    constructor(public payload: INews[]) {
    }
}
export class LoadNewsErrorAction implements Action {
    readonly type = NewsTypes.LoadNewsError;
    constructor(public payload: any) { }
}

export class LoadAllNewsAmountAction implements Action {
    readonly type = NewsTypes.LoadAllNewsAmount;
    constructor() { }
}

export class LoadAllNewsAmountSuccessAction implements Action {
    readonly type = NewsTypes.LoadAllNewsAmountSuccess;
    constructor(public payload: number) {
        console.log(`AMOUNT SUCC ACT`, payload);
    }
}

export class LoadAllNewsAmountErrorAction implements Action {
    readonly type = NewsTypes.LoadAllNewsAmountError;
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
    constructor() { }
}




export type NewsActions
    = LoadNewsAction
    | LoadNewsSuccessAction
    | LoadNewsErrorAction
    | LoadAllNewsAmountAction
    | LoadAllNewsAmountSuccessAction
    | LoadAllNewsAmountErrorAction
    | SetCurrentNewsAmountAction
    | SetLastLoadedAction
    | SetIsAllNewsLoadedAction
    ;
