import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { PostComponent } from './pages/post/post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'news',
        component: NewsComponent,
        // children: [
        //     {
        //         path: '',
        //         redirectTo: 'project',
        //         pathMatch: 'full',
        //     },
        // ],
    },
    {
        path: 'post/:id',
        component: PostComponent,
    },

    {
        path: 'contact-us',
        component: ContactUsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
