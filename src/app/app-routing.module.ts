import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/main/main.module#MainModule',
    // children: [
    //   {
    //     path: '',
    //     // redirectTo: 'project',
    //     pathMatch: 'full',
    //     component: HomeComponent,
    //     // resolve: { projectId: DashboardResolver },
    //   },
    // ],
  },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
