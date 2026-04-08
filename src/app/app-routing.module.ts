import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppShellComponent } from './core/layout/app-shell.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'app',
    component: AppShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'workforce' },
      {
        path: 'workforce',
        loadChildren: () =>
          import('./features/workforce/workforce.module').then((module) => module.WorkforceModule)
      },
      {
        path: 'operations',
        loadChildren: () =>
          import('./features/operations/operations.module').then((module) => module.OperationsModule)
      },
      {
        path: 'insights',
        loadChildren: () =>
          import('./features/insights/insights.module').then((module) => module.InsightsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
