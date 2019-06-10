import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NewsTypes, LoadNewsAction, LoadNewsSuccessAction, LoadNewsErrorAction, NewsActions } from './news.actions';
import { FirebaseService } from '../core/services/firebase.service';

@Injectable()
export class NewsEffects {

    @Effect()
    loadNews$: Observable<NewsActions> = this.actions$.pipe(
        ofType<LoadNewsAction>(NewsTypes.LoadNews),
        // map(action => action.payload),
        switchMap(() => this.firebase.getNews()),
        map((res) => {
            const data = res.map((item) => item.payload.doc.data());
            return new LoadNewsSuccessAction(data);
        })
        // switchMap(() => this.firebase.getNews().then(res => {
        //     console.log(`res`, res);
        //     return new LoadNewsSuccessAction(res.docs);
        // }
        // )
        // )
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
    ) {
    }

}
