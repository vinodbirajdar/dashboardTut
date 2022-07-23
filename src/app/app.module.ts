import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RoundedCornerDirective } from './customDirectives/rounded-corner.directive';
import { ViewdetailComponent } from './admin-dashboard/detail/viewdetail/viewdetail.component';

@NgModule({
  declarations: [		
    AppComponent,
      LoginComponent,
      SignupComponent,
      PageNotFoundComponent,
      ForgotpasswordComponent,
      AdminDashboardComponent,
      ChildComponent,
      ParentComponent,
      RoundedCornerDirective,
      ViewdetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
