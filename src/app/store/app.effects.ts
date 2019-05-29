import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, switchMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppTypes, LoadNewsAction, LoadNewsSuccessAction } from './app.actions';
import { NewsService } from '../core/services/news.service';

@Injectable()
export class AppEffects {

    @Effect()
    loadNews$: Observable<Action> = this.actions$.pipe(
        ofType<LoadNewsAction>(AppTypes.LoadNews),
        // map(action => action.payload),
        switchMap( _ => {

            const x = this.news.getNews();
            console.log(x);

            return of(new LoadNewsSuccessAction(x));

        })
    );

    constructor(
        private actions$: Actions,
        private news: NewsService,
    ) {
    }

}
