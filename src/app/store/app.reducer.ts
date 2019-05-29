import { AppTypes, AppActions } from './app.actions';

export class AppState {
    news: any[] = [];
}

export function appReducer(state = new AppState(), action: AppActions): AppState {
    switch (action.type) {
        case AppTypes.LoadNewsSuccess : {
            return {
                news: [...action.payload],
            };
        }
        default: {
            return state;
        }
    }
}
