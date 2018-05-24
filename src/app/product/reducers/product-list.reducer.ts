import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from "../models/product";
import { ProductActionsUnion, ProductActionTypes } from "../actions/product.actions";

export interface State extends EntityState<Product> {
    // additional entities state properties
    selectedProductId: number | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: (product: Product) => product.id,
    sortComparer: false
});


export const initialState: State = adapter.getInitialState({
    // additional entities state properties
    selectedProductId: null
})

export function reducer(
    state: State = initialState, 
    action: ProductActionsUnion
): State {
    switch(action.type) {
        case ProductActionTypes.ProductPageLoadProduct: {
            return state;
        }

        case ProductActionTypes.ProductApiLoadProductSuccess: {
            return adapter.addMany(action.payload, {
                ...state,
                selectedProductId: state.selectedProductId,
              });
        }

        case ProductActionTypes.ProductApiLoadProductFailure: {
            return state;
        }

        default: {
            return state;
        }
    }
} 

export const getSelectedProductId = (state: State) => state.selectedProductId;

