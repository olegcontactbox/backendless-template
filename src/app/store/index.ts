import { newsReducer, NewsState } from './news.reducer';
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { NewsEffects } from './news.effects';
import { environment } from 'src/environments/environment';

export interface AppState {
    newsState: NewsState;
};

export const reducers: ActionReducerMap<AppState> = {
    newsState: newsReducer,
};

export const appEffects = [
    NewsEffects,
];

// export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
//     return function (state: AppState, action: any): AppState {
//         console.log(state, action);
//         return reducer(state, action);
//     };
// };

// export const metaReducers: MetaReducer<AppState>[] = !environment.production
//     // ? [logger, storeFreeze] // ngrx-store-freeze plugin
//     ? [logger]
//     : [];
