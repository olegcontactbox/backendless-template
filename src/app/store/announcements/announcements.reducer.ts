import { AnnouncementsTypes, AnnouncementsActions } from './announcements.actions';
import { IAnnouncements } from 'src/app/core/models/interfaces/announcements';

export class AnnouncementsState {
    announcements: IAnnouncements[] = [];
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
