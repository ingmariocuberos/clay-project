import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';

const routes: Routes =[
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }, {
    path: 'app',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    }]
  }, {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
