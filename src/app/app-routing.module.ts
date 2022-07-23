import { Input, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthService } from './auth/auth.service'
import { AuthGuard } from './auth/auth.guard'
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ViewdetailComponent } from './admin-dashboard/detail/viewdetail/viewdetail.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent, canActivate:[AuthGuard]},
  { path: 'parent', component: ParentComponent},
  { path: 'child', component: ChildComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent,
    children:[
      {path: 'admin-detail', component: ViewdetailComponent},
    ],
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})

export class AppRoutingModule { }
