import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export enum ProductActionTypes {
    ProductPageLoadProduct = '[Products Page] Load Products',
    ProductApiLoadProductSuccess = '[Product Api] Load Product Success',
    ProductApiLoadProductFailure = '[Product Api] Load Product Failure'
}

export class ProductPageLoadProductAction implements Action {
    readonly type = ProductActionTypes.ProductPageLoadProduct;
}

export class ProductApiLoadProductSuccessAction implements Action {
    readonly type = ProductActionTypes.ProductApiLoadProductSuccess;

    constructor(public payload: Product[]) {}
}

export class ProductApiLoadProductFailureAction implements Action {
    readonly type = ProductActionTypes.ProductApiLoadProductFailure;

    constructor(public payload?: {error: any}){}
}

export type ProductActionsUnion = 
| ProductPageLoadProductAction
| ProductApiLoadProductSuccessAction
| ProductApiLoadProductFailureAction