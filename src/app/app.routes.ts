import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './auth/error-not-found/error.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailsComponent } from './shared/product-list/product-details/product-details.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ContacUsComponent } from './features/contac-us/contac-us.component';
import { UserProfileComponent } from './features/user/user-profile/user-profile.component';
import { UserEditComponent } from './features/user/user-profile/user-edit/user-edit.component';
import { authGuard } from './auth/auth.guard';
import { UserCartComponent } from './features/user/user-cart/user-cart.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Página de login sin protección
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },  // Ruta protegida
  {path: 'cart', component: UserCartComponent, canActivate: [authGuard]},
  { path: 'product/:id', component: ProductDetailsComponent, canActivate: [authGuard] },  // Ruta protegida para productos
  { path: 'about-us', component: AboutUsComponent, canActivate: [authGuard] },  // Ruta protegida para About Us
  { path: 'contact-us', component: ContacUsComponent, canActivate: [authGuard] },  // Ruta protegida para contacto
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [authGuard] },  // Ruta protegida para perfil de usuario
  { path: 'user-profile-edit/:id', component: UserEditComponent, canActivate: [authGuard] },  // Ruta protegida para edición de perfil
  { path: '**', component: ErrorComponent },  // Ruta para manejar errores y páginas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
