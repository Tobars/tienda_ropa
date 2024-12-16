import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './auth/error-not-found/error.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailsComponent } from './shared/product-list/product-details/product-details.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ContacUsComponent } from './contac-us/contac-us.component';
import { UserProfileComponent } from './features/user/user-profile/user-profile.component';
import { UserEditComponent } from './features/user/user-profile/user-edit/user-edit.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContacUsComponent },
  { path: 'user-profile/:id', component: UserProfileComponent },
  { path: 'user-profile-edit/:id', component: UserEditComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
