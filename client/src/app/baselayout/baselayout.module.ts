import { ComponentsModule } from '../components/components.module';
import { BaselayoutComponent } from './baselayout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [
    BaselayoutComponent
  ]
})
export class BaselayoutModule { }
