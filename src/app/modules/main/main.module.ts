import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './main-routing.module';
import { NewsComponent } from './pages/news/news.component';
import { PostComponent } from './pages/post/post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

export const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
];

@NgModule({
  declarations: [HomeComponent, NewsComponent, PostComponent, ContactUsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MATERIAL_MODULES,
  ],
})
export class MainModule { }
