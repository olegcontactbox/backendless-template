import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { LoadAnnouncementsAction } from '../../../../store/announcements/announcements.actions';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IAnnouncements } from 'src/app/core/models/interfaces/announcements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  index = 0;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    observer: true,
    spaceBetween: 20,
    // loop: true,

    // autoplay: {
    //   delay: 8000,
    //   stopOnLastSlide: true,
    // },



    // breakpoints: {
    //   1023: {
    //     slidesPerView: 2,
    //   },
    //   767: {
    //     slidesPerView: 1,
    //   },
    // },

  };

  announcements$: Observable<IAnnouncements[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.announcements$ = this.store.select(store => store.announcementsState.announcements).pipe(
      map(a => {
        if (!a || !a.length) {
          this.store.dispatch(new LoadAnnouncementsAction());
        }
        return a;
      })
    );

    // this.store.select(store => store.announcementsState.announcements).subscribe(a => this.announcements = a);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

}
