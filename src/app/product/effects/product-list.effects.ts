import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as productActions from './../actions/product.actions';
import { ProductService } from './../services/product.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class ProductListEffects {

    @Effect()
    public loadProduct: Observable<Action> = this.actions
    .ofType(productActions.ProductActionTypes.ProductPageLoadProduct).pipe(
    switchMap(() => {
        return this.productService.loadProducts().pipe(
            map((products) => new productActions.ProductApiLoadProductSuccessAction(products)),
            catchError((error) => Observable.of(new productActions.ProductApiLoadProductFailureAction({error: error})))) 
    }));

    constructor(private actions: Actions, private productService: ProductService) {
        
    }
}