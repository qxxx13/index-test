import { ProductItemModel } from "../models/ProductItemModel";
import { Action, ActionType } from "./Actions";
import { AppContextType } from "./DefaultContextValue";

export const AppReducer = ( state: AppContextType,action: Action ): AppContextType => {

    const uniqueProducts = (product: ProductItemModel[]) => {
        return product.reduce((res, cur) => {
            if (
                res.find((find) => JSON.stringify(find) === JSON.stringify(cur))
            ) {
                return res;
            } else return [...res, cur];
        }, [] as ProductItemModel[]);
    };

    switch (action.type) {
        case ActionType.SET_PRODUCT_ITEMS: {
            const products = uniqueProducts([
                ...state.productItems,
                ...action.payload,
            ]);
            return { ...state, productItems: products };
        }
        case ActionType.SET_IS_LOADING: {
            return { ...state, isLoading: action.payload };
        }
        case ActionType.SET_GRID_VIEW: {
            return { ...state, gridView: action.payload };
        }
        default:
            throw new Error("");
    }
};
