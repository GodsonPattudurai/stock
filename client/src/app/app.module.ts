import "../styles.css";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from './login/login.module';
import { BaselayoutModule } from './baselayout/baselayout.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { ContactModule } from './contact/contact.module';
import { ItemModule } from './item/item.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    BaselayoutModule,
    ContactModule,
    ItemModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
