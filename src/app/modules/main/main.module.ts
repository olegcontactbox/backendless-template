import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './main-routing.module';
import { NewsComponent } from './pages/news/news.component';
import { PostComponent } from './pages/post/post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FirebaseService } from '../../core/services/firebase.service';
import { AppCoreModule } from 'src/app/core/core.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [HomeComponent, NewsComponent, PostComponent, ContactUsComponent],
  imports: [
    AppCoreModule,
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    NotificationService,
  ]
})
export class MainModule { }
