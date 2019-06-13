import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'catalog', component: CatalogComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'basket', component: BasketComponent},
  {path:'detail/:id', component: ProductsDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
