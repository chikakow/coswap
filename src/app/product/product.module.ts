import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { reducers } from './reducers';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './containers/product/product.component';
import { ProductService } from './services/product.service';
import { EffectsModule } from '@ngrx/effects';
import { ProductListEffects } from './effects/product-list.effects';

const routes: Routes = [
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([ProductListEffects])
  ],
  declarations: [
    ProductComponent, 
    ProductsComponent,
    ProductListComponent, 
    ProductDetailComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
