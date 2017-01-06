import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

import { HomeComponent } from './home/home.component'

import { JobListComponent } from './job/job-list.component'

import { AttendanceListComponent } from './attendance/attendance-list.component'

import { CategoryListComponent } from './register/category/category-list.component';

import { CategoryCadasterComponent } from './register/category/category-cadaster.component';

import { CategoryDetailComponent } from './register/category/category-detail.component'

import { ServiceListComponent } from './register/service/service-list.component';

import { UserListComponent } from './register/user/user-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path:'registro/categoria', component: CategoryListComponent },
    { path:'registro/categoria/cadastro', component: CategoryCadasterComponent },
    { path:'registro/categoria/detalhes', component: CategoryDetailComponent },
    { path:'registro/servico', component: ServiceListComponent },
    { path:'registro/usuario', component: UserListComponent },
    { path: 'chamado', component: JobListComponent },
    { path: 'atendimento', component: AttendanceListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
