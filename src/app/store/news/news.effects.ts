import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {
    NewsTypes,
    LoadNewsAction,
    LoadNewsSuccessAction,
    LoadNewsErrorAction,
    NewsActions,
    SetCurrentNewsAmountAction,
    SetLastLoadedAction,
    SetIsAllNewsLoadedAction,
} from './news.actions';
import { FirebaseService } from '../../core/services/firebase.service';
import { AppState } from '..';

@Injectable()
export class NewsEffects {

    @Effect()
    loadNews$: Observable<NewsActions> = this.actions$.pipe(
        ofType<LoadNewsAction>(NewsTypes.LoadNews),
        // map(action => action.payload),
        withLatestFrom(this.store.select(store => store.newsState)),
        switchMap(([action, newsState]) => {
            if (newsState.isAllNewsLoaded) { return newsState.news; }
            return this.firebase.getNews(newsState.currentNewsAmount, newsState.lastLoaded, newsState.newsGetAmount);
        }),

        withLatestFrom(this.store.select(store => store.newsState.newsGetAmount)),
        switchMap(([res, newsGetAmount]) => {
            console.log(`res raw`, res);
            this.store.dispatch(new SetCurrentNewsAmountAction(res.length));

            if (!res.length) {
                return of(new SetIsAllNewsLoadedAction());
            }

            if (res.length < newsGetAmount) {
                this.store.dispatch(new SetIsAllNewsLoadedAction());
            }

            const data = res.map((item) => item.payload.doc.data());

            console.log(`data from efx`, data, res[res.length - 1]);


            // return new LoadNewsSuccessAction(data);
            return of(
                new LoadNewsSuccessAction(data),
                // new SetCurrentNewsAmountAction(res.length),
                new SetLastLoadedAction(res[res.length - 1].payload.doc)

            );

        })
    );

    @Effect({ dispatch: false })
    onError$: Observable<Action> = this.actions$.pipe(
        ofType<LoadNewsErrorAction>
            (NewsTypes.LoadNewsError),
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
