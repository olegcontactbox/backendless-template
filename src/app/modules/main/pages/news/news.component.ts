import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { LoadNewsAction, LoadAllNewsAmountAction } from '../../../../store/news/news.actions';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store';
import { map } from 'rxjs/operators';
import { INews } from 'src/app/core/models/interfaces/news';
// import { getNewsState } from 'src/app/store/news.reducer';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {


  // news$: Observable<any>;
  news: INews[];

  // currentNewsAmount = 0;
  // isLoad = false;
  isAllNewsLoaded = false;

  private sub: Subscription = new Subscription();

  @ViewChild('loader', { static: false }) loader: ElementRef;

  constructor(private store: Store<AppState>) { }


  ngOnInit() {
    this.sub.add(
      this.store.select((state: AppState) => state.newsState).subscribe(newsState => {
        if (!newsState.allNewsAmount) { this.store.dispatch(new LoadAllNewsAmountAction()); }
        if (!newsState.currentNewsAmount) { this.getNews(); }
        this.isAllNewsLoaded = newsState.isAllNewsLoaded;
        this.news = newsState.news;
        // console.log(`comp data`, newsState, this.news);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getNews() {
    // console.log(`getNews from comp`);
    this.store.dispatch(new LoadNewsAction());
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    // console.log(`window scroll`);

    if (this.isAllNewsLoaded) { return; }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const loaderPosition = this.loader.nativeElement.getBoundingClientRect();

    const positionCheck = loaderPosition.bottom < windowHeight;

    if (positionCheck && !this.isAllNewsLoaded) {
      this.getNews();
    }
  }

}
