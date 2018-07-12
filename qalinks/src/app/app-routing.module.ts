import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {
    path:'posts/:id',
    component: ArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes [
  {
    path:'posts/:id',
    Component: ArticlesComponent
  }
];

@NgModule({
  imports: [
    imports: [RouterModule.forRoot{routes}],
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
 */