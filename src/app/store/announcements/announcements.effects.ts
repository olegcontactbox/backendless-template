import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { FirebaseService } from '../../core/services/firebase.service';
import { AppState } from '..';
import {
    AnnouncementsActions, LoadAnnouncementsAction, AnnouncementsTypes,
    LoadAnnouncementsErrorAction, LoadAnnouncementsSuccessAction,
} from './announcements.actions';
import { IAnnouncements } from 'src/app/core/models/interfaces/announcements';

@Injectable()
export class AnnouncementsEffects {

    @Effect()
    loadNews$: Observable<AnnouncementsActions> = this.actions$.pipe(
        ofType<LoadAnnouncementsAction>(AnnouncementsTypes.LoadAnnouncements),
        // map(action => action.payload),
        // withLatestFrom(this.store.select(store => store.announcementsState)),
        // switchMap(([action, announcementsState]) => {
        switchMap(() => {
            // if (announcementsState.announcements) { return announcementsState.announcements ; }
            return this.firebase.getAnnouncements();
        }),
        switchMap((res) => {

            console.log(`res raw`, res);

            const data = res.map((item) => item.payload.doc.data());
            console.log(`res data`, data);
            // if (!data || !data.length) { return of(new) }

            return of(
                new LoadAnnouncementsSuccessAction(data),
            );

        })
    );

    @Effect({ dispatch: false })
    onError$: Observable<Action> = this.actions$.pipe(
        ofType<LoadAnnouncementsErrorAction>
            (AnnouncementsTypes.LoadAnnouncementsError),
        map(action => action.payload),
        tap(e => {
            console.log(e);
        }),
    );


    constructor(
        private actions$: Actions,
        private firebase: FirebaseService,
        private store: Store<AppState>
    ) {


    }
}
