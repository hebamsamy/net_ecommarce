import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';

const routes: Routes = [
  {path:"",redirectTo:"user",pathMatch:"full"},
  // {path:"index",redirectTo:"home",pathMatch:"full"},
  {path:"user",component:LayoutComponent,children:[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"product-list",component:ProductListComponent},
    {path:"movie-list",component:MovieListComponent},
    {path:"product-details/:Pid",component:ProductDetailsComponent},
  ]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
