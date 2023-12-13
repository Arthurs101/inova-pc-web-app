import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'',redirectTo: '/login', pathMatch: 'full'},
  {path:'main',component: MainDashboardComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
