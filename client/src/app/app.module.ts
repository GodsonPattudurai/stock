import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { LoginModule } from './login/login.module';
import { BaselayoutComponent } from './baselayout/baselayout.component';
import { BaselayoutModule } from './baselayout/baselayout.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    BaselayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
