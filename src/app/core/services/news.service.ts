import { Injectable } from '@angular/core';
// import { Subscription } from 'rxjs';

@Injectable()
export class NewsService {
    // sub: Subscription = new Subscription();

    constructor(
        // private ap: AlphaPointService,
        // private store: Store<AppState>,
    ) {
    }

    getNews(): any[] {
        return ['data0', 'data1'];
    }
}
