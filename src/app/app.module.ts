import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { ToolbarComponent } from './toolbar/toolbar.component';

import { ConfirmDialogComponent } from './dialog/confirm-dialog.component';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { HomeComponent } from './home/home.component';

import { JobListComponent } from './job/job-list.component';

import { AttendanceListComponent } from './attendance/attendance-list.component';

import { CategoryListComponent } from './register/category/category-list.component';

import { CategoryCadasterComponent } from './register/category/category-cadaster.component';

import { CategoryDetailComponent } from './register/category/category-detail.component'

import { ServiceListComponent } from './register/service/service-list.component';

import { UserListComponent } from './register/user/user-list.component';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ConfirmDialogComponent,
    BreadcrumbComponent,
    HomeComponent,
    JobListComponent,
    AttendanceListComponent,
    CategoryListComponent,
    CategoryCadasterComponent,
    CategoryDetailComponent,
    ServiceListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    SimpleNotificationsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
