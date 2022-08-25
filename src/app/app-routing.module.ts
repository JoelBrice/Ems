import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/authentication/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentComponent } from './components/department/department.component';
import { HomeComponent } from './components/home/home.component';
import { MeetComponent } from './components/meet/meet.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [

  {
    path: '', pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'dashboard', pathMatch: 'full', component: DashboardComponent
  },
  {
    path: 'project', pathMatch: 'full', component: ProjectComponent
  },
  {
    path: 'meet', pathMatch: 'full', component: MeetComponent
  },
  {
    path: 'department', pathMatch: 'full', component: DepartmentComponent
  },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
