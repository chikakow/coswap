import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';

import * as fromProductList from './product-list.reducer';
import * as fromRoot from '../../reducers';
import { from } from 'rxjs/observable/from';

  export interface ProductState {
      products: fromProductList.State;
  }

  export interface State extends fromRoot.State {
      products: ProductState;
  }

  export const reducers: ActionReducerMap<ProductState> = {
      products: fromProductList.reducer
  }

  export const getProductcListState = createFeatureSelector<ProductState>('products');

  export const getProductListEntitiesState = createSelector(
      getProductcListState,
      state => state.products
  )

  export const getSelectedProductId = createSelector(
        getProductListEntitiesState,
      fromProductList.getSelectedProductId
  )
  
  export const {
    selectIds: selectProductListIds,
    selectEntities: selectProductListEntities,
    selectAll: selectAllProductList,
    selectTotal: selectProductListTotal
} = fromProductList.adapter.getSelectors(getProductListEntitiesState);

//   export const selectProductListIds = createSelector(
//       selectProductListState,
//       fromProductList.selectProductListIds
//   )

//   export const selectProductListEntities = createSelector(
//       selectProductListState,
//       fromProductList.selectProductListEntities
//   )

//   export const selectAllProducts = createSelector(
//       selectProductListState,
//       fromProductList.selectAllProductList
//   )

//   export const selectProductListTotal = createSelector(
//     selectProductListState,
//     fromProductList.selectProductListTotal
//   )

//   export const selectCurrentProductId = createSelector(
//     selectProductListState,
//     fromProductList.getSelectedProductId
//   )

//   export const selectCurrentProduct = createSelector(
//       selectProductListEntities,
//       selectCurrentProductId,
//       (entities, id) => entities[id]
//   )
 