import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../models/product';
import { Store, select } from '@ngrx/store';
import * as fromProducts from '../../reducers';
import * as productActions from './../../actions/product.actions';

@Component({
  selector: 'app-products',
  template: '<app-product-list [products]="products$ | async"></app-product-list>',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>
  constructor(private store: Store<fromProducts.State>) {
     this.products$ = this.store.pipe(select(fromProducts.selectAllProductList));
   }

  ngOnInit() {
   this.store.dispatch(new productActions.ProductPageLoadProductAction());
  }

}
