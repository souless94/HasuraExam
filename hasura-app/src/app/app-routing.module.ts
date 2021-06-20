import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './features/profile/profile-page/profile-page.component';
import { SigninPageComponent } from './features/signin/signin-page/signin-page.component';
import { LoginGuard } from './guard/login.guard';
import { NologinGuard } from './guard/nologin.guard';

const routes: Routes = [
  { path : 'login', component: SigninPageComponent,canActivate: [NologinGuard]},
  { path : 'profile/:id',component: ProfilePageComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
