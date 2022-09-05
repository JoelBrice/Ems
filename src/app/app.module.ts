import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
// import { LoginComponent } from './components//authentication/login/login.component';
// import { RegisterComponent } from './components/authentication/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MeetComponent } from './components/meet/meet.component';
import { DepartmentComponent } from './components/department/department.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ProjectComponent } from './components/project/project.component';
import { SharedModule } from './components/shared/shared.module';
// import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
// import { AngularMaterialModule } from './material.module';
// import { MatMenu } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    MeetComponent,
    DepartmentComponent,
    ScheduleComponent,
    ProjectComponent,
    // MatSliderModule,
    HomeComponent,
    TasksComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    FormsModule,
    // FlexLayoutModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    // AngularMaterialModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
