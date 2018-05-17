import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { ProductModule } from './product/product.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductListEffects } from './product/effects/product-list.effects';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products'},
  {
    path: 'products',
    loadChildren: './product/product.module#ProductModule',
  },
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ProductModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({maxAge: 50})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
