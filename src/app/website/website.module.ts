import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { r3JitTypeSourceSpan } from '@angular/compiler';

const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WebsiteModule { }
