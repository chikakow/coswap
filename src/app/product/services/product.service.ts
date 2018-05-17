import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Product } from './../models/product';
import * as ProductList from './../models/products.json';
import 'rxjs/add/observable/of';


@Injectable()
export class ProductService {

    products: any = ProductList;

    constructor(private http: HttpClient) { }

    loadProducts(): Observable<Product[]> {
        return Observable.of(this.products);
    }
}
