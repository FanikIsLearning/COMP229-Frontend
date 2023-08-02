import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AddProductComponent } from './components/add-product/add-product.component';

import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { ProductsListComponent } from './components/products-list/products-list.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';

import { ProfileComponent } from './profile/profile.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';

import { BoardModeratorComponent } from './board-moderator/board-moderator.component';

import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchToolComponent } from './components/search-tool/search-tool.component';
import { ListToolComponent } from './components/list-tool/list-tool.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,

    AddProductComponent,

    ProductDetailsComponent,

    ProductsListComponent,

    LoginComponent,

    RegisterComponent,

    HomeComponent,

    ProfileComponent,

    BoardAdminComponent,

    BoardModeratorComponent,

    BoardUserComponent,
    NavbarComponent,
    SearchToolComponent,
    ListToolComponent,
    CarouselComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
  ],

  providers: [httpInterceptorProviders],

  bootstrap: [AppComponent],
})
export class AppModule {}
