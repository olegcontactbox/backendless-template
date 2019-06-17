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
    LoadAllNewsAmountAction,
} from './news.actions';
import { FirebaseService } from '../../core/services/firebase.service';
import { AppState } from '..';
import { LoadAllNewsAmountSuccessAction } from './news.actions';

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

        withLatestFrom(this.store.select(store => store.newsState)),
        switchMap(([res, newsState]) => {
            console.log(`res raw`, res);
            this.store.dispatch(new SetCurrentNewsAmountAction(res.length));

            if (newsState.currentNewsAmount >= newsState.allNewsAmount) {
                this.store.dispatch(new SetIsAllNewsLoadedAction());
            }

            if (!res.length) {
                return of(
                    new LoadNewsSuccessAction([]),
                );
            }

            const data = res.map((item) => item.payload.doc.data());

            return of(
                new LoadNewsSuccessAction(data),
                new SetLastLoadedAction(res[res.length - 1].payload.doc),
            );

        })
    );

    @Effect()
    loadAllNewsAmount$: Observable<NewsActions> = this.actions$.pipe(
        ofType<LoadAllNewsAmountAction>(NewsTypes.LoadAllNewsAmount),
        withLatestFrom(this.store.select(store => store.newsState)),
        switchMap(([action, newsState]) => {
            return this.firebase.getNewsCounter();
        }),
        switchMap(res => {
            return of(new LoadAllNewsAmountSuccessAction(res.data().value));
        })
    );

    @Effect({ dispatch: false })
    onError$: Observable<Action> = this.actions$.pipe(
        ofType<LoadNewsErrorAction>
            (NewsTypes.LoadNewsError),
        map(action => action.payload),
        tap(e => {
            console.log(`efx error`, e);
        }),
    );


    constructor(
        private actions$: Actions,
        private firebase: FirebaseService,
        private store: Store<AppState>
    ) {


    }
}
