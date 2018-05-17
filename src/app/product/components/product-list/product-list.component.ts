import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../../models/product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[]
  
  constructor() {
    
  }

  ngOnInit() {

  }

}
