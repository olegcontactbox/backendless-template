import { NewsTypes, NewsActions } from './news.actions';

export class NewsState {
    news: any[];
}

export function newsReducer(state = new NewsState(), action: NewsActions): NewsState {
    switch (action.type) {
        case NewsTypes.LoadNewsSuccess: {
            return {
                // ...state,
                news: [...action.payload],
            };
        }
        case NewsTypes.LoadNewsError: {
            return {
                ...state,
                news: [...action.payload],
            };
        }
        default: {
            return state;
        }
    }
}

// export const getNewsState = (state: NewsState) => state.news;
// const getNewsState = (state: AppState) => state.newsState;

