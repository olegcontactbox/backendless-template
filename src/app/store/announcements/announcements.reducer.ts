import { AnnouncementsTypes, AnnouncementsActions } from './announcements.actions';

export class AnnouncementsState {
    announcements: any[] = [];
}

export function announcementsReducer(state = new AnnouncementsState(), action: AnnouncementsActions): AnnouncementsState {
    switch (action.type) {
        case AnnouncementsTypes.LoadAnnouncementsSuccess: {
            return {
                ...state,
                announcements: [...action.payload],
            };
        }
        case AnnouncementsTypes.LoadAnnouncementsError: {
            return {
                ...state,
            };
        }

        default: {
            return state;
        }
    }
}
