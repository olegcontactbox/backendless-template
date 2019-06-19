import { NewsTypes, NewsActions } from './news.actions';
import { QueryDocumentSnapshot } from '@angular/fire/firestore';

export class NewsState {
    news: any[] = [];
    currentNewsAmount = 0;
    newsGetAmount = 5;
    lastLoaded: QueryDocumentSnapshot<any>;
    isAllNewsLoaded = false;
    allNewsAmount: number;
}

export function newsReducer(state = new NewsState(), action: NewsActions): NewsState {
    switch (action.type) {
        case NewsTypes.LoadNewsSuccess: {
            return {
                ...state,
                news: [...state.news, ...action.payload],
            };
        }
        case NewsTypes.LoadNewsError: {
            return {
                ...state,
            };
        }

        case NewsTypes.LoadAllNewsAmountSuccess: {
            return {
                ...state,
                allNewsAmount: action.payload,
            };
        }

        case NewsTypes.SetCurrentNewsAmount: {
            return {
                ...state,
                currentNewsAmount: state.currentNewsAmount + action.payload,
            };
        }

        case NewsTypes.SetLastLoaded: {
            return {
                ...state,
                lastLoaded: action.payload,
            };
        }

        case NewsTypes.SetIsAllNewsLoaded: {
            return {
                ...state,
                isAllNewsLoaded: true,
            };
        }

        default: {
            return state;
        }
    }
}

// export const getNewsState = (state: NewsState) => state.news;
// const getNewsState = (state: AppState) => state.newsState;

