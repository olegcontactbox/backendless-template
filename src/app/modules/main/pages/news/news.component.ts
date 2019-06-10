import { Component, OnInit } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { LoadNewsAction } from '../../../../store/news.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
// import { getNewsState } from 'src/app/store/news.reducer';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news$: Observable<any>;
  news: any[];
  // news$;

  constructor(private store: Store<AppState>, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    // const getNewsState = (state: AppState) => state;

    // AUTH
    // const getNews = createSelector(
    //   getNewsState,
    //   getAppState,
    // );

    this.store.dispatch(new LoadNewsAction());

    // this.isAuthenticating$ = this.store.select(fromStore.getAuthenticating);
    this.news$ = this.store.select((state: AppState) => state.newsState.news)
      .pipe(
        map((news) => {
          if (!news) { return; }
          return [...news].sort((a, b) => {
            if (a.date < b.date) { return 1; }
            if (a.date > b.date) { return -1; }
            return 0;
          });
        }),
      );
    // this.news$ = this.store.select();
    // this.news$ = this.store.select(state: AppState => state);
    this.news$.subscribe(data => {
      console.log(`data`, data);
      // data.forEach((d) => { console.log(d); });

    });

    // this.store.select(state => state.news).subscribe(res => console.log(`ressss`, res));
    // this.news$ = this.store.select(state => state.news);
    // this.store.select(state => state.news).subscribe(res => {
    //   console.log(`res in comp` , res);
    //   this.news = res;
    // });
  }

}
