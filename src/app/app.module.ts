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

@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent,
      SignupComponent,
      PageNotFoundComponent,
      ForgotpasswordComponent,
      AdminDashboardComponent,
      ChildComponent
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
