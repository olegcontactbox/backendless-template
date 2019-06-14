import { newsReducer, NewsState } from './news/news.reducer';
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { NewsEffects } from './news/news.effects';
import { environment } from 'src/environments/environment';
import { AnnouncementsState, announcementsReducer } from './announcements/announcements.reducer';
import { AnnouncementsEffects } from './announcements/announcements.effects';

export interface AppState {
    newsState: NewsState;
    announcementsState: AnnouncementsState;
}

export const reducers: ActionReducerMap<AppState> = {
    newsState: newsReducer,
    announcementsState: announcementsReducer,
};

export const appEffects = [
    NewsEffects,
    AnnouncementsEffects,
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
