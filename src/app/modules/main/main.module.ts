import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './main-routing.module';
import { NewsComponent } from './pages/news/news.component';
import { PostComponent } from './pages/post/post.component';

@NgModule({
  declarations: [HomeComponent, NewsComponent, PostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class MainModule { }
