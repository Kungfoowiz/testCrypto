import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HashesComponent }      from './hashes/hashes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HashDetailComponent }  from './hash-detail/hash-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hashes', component: HashesComponent },
  { path: 'detail/:id', component: HashDetailComponent }
];


@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }
