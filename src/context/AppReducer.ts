import { Action, ActionType } from "./Actions";
import { AppContextType } from "./DefaultContextValue";

export const AppReducer = (state: AppContextType, action: Action): AppContextType => {
    switch (action.type) {
        case ActionType.SET_PRODUCT_ITEMS: {
            return { ...state, productItems: [...state.productItems, ...action.payload] };
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
