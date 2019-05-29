import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // children: [
        //     {
        //         path: '',
        //         redirectTo: 'project',
        //         pathMatch: 'full',
        //     },
        // ],
    },
    {
        path: 'news',
        component: NewsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
