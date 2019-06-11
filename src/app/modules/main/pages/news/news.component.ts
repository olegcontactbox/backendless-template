import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
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


  // news$: Observable<any>;
  news: any[];

  currentNewsAmount = 0;
  isLoad = false;
  isAllNewsLoaded = false;

  @ViewChild('loader', { static: false }) loader: ElementRef;

  constructor(private store: Store<AppState>, private sanitizer: DomSanitizer) { }


  ngOnInit() {

    // const getNewsState = (state: AppState) => state;

    // AUTH
    // const getNews = createSelector(
    //   getNewsState,
    //   getAppState,
    // );

    // this.store.dispatch(new LoadNewsAction(this.currentNewsAmount));

    // this.isAuthenticating$ = this.store.select(fromStore.getAuthenticating);
    // this.store.select((state: AppState) => state.newsState);
    // .pipe(
    //   map((news) => {
    //     if (!news) { return; }
    //     return [...news].sort((a, b) => {
    //       if (a.date < b.date) { return 1; }
    //       if (a.date > b.date) { return -1; }
    //       return 0;
    //     });
    //   }),
    // );
    // this.news$ = this.store.select();
    // this.news$ = this.store.select(state: AppState => state);



    this.store.select((state: AppState) => state.newsState).subscribe(newsState => {

      if (!newsState.currentNewsAmount) { this.getNews(); }
      this.isAllNewsLoaded = newsState.isAllNewsLoaded;
      this.news = newsState.news;
      console.log(`comp data`, newsState, this.news);

    });


    // this.store.select(state => state.news).subscribe(res => console.log(`ressss`, res));
    // this.news$ = this.store.select(state => state.news);
    // this.store.select(state => state.news).subscribe(res => {
    //   console.log(`res in comp` , res);
    //   this.news = res;
    // });
  }

  getNews() {
    console.log(`getNews`);
    this.store.dispatch(new LoadNewsAction());
    // this.store.dispatch(new LoadNewsAction({
    //   currentNewsAmount: this.currentNewsAmount,
    //   lastLoaded: this.lastLoaded,
    //   // lastLoaded: this.news,
    // }));
  }
  // var elem = document.querySelector('#some-element');
  // var bounding = elem.getBoundingClientRect();

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    console.log(`window scroll`, this.isAllNewsLoaded)
    if (this.isAllNewsLoaded) { return; }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const x = this.loader.nativeElement.getBoundingClientRect();


    const check = x.bottom < windowHeight;
    if (check && !this.isAllNewsLoaded) {

      // this.isLoad = true;
      this.getNews();

    }


  }

}
