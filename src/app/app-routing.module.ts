import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'chat', loadChildren: () => import('./chatting/chatting.module').then(m => m.ChattingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
