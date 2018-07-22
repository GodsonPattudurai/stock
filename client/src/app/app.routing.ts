import { AuthGuard } from './auth-guard.service';
import { BaselayoutComponent } from './baselayout/baselayout.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'app', canActivate: [AuthGuard], component: BaselayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'invoices', component: InvoiceComponent},
    ]},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
