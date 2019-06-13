import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RouterModule} from '@angular/router';

import { FooterComponentComponent } from './footer-component/footer-component.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactsComponent } from './contacts/contacts.component';

import {NgxPaginationModule} from 'ngx-pagination'; 
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SliderComponentComponent,
    FooterComponentComponent,
    CatalogComponent,
    ContactsComponent,
    HomeComponent,
    BasketComponent,
    ProductsDetailComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule, 
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
