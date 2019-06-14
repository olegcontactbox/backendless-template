import { Action } from '@ngrx/store';
import { INews } from '../../core/models/interfaces/news';

export enum AnnouncementsTypes {
    LoadAnnouncements = '[ANNOUNCEMENTS] Load announcements',
    LoadAnnouncementsSuccess = '[ANNOUNCEMENTS] Load announcements [SUCCESS]',
    LoadAnnouncementsError = '[ANNOUNCEMENTS] Load announcements [ERROR]',
}

// NEWS
export class LoadAnnouncementsAction implements Action {
    readonly type = AnnouncementsTypes.LoadAnnouncements;
    constructor() { }
}
export class LoadAnnouncementsSuccessAction implements Action {
    readonly type = AnnouncementsTypes.LoadAnnouncementsSuccess;
    constructor(public payload: any[]) {
    }
}
export class LoadAnnouncementsErrorAction implements Action {
    readonly type = AnnouncementsTypes.LoadAnnouncementsError;
    constructor(public payload: any) { }
}



export type AnnouncementsActions
    = LoadAnnouncementsAction
    | LoadAnnouncementsSuccessAction
    | LoadAnnouncementsErrorAction
    ;
