export enum ActionType {
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_PRODUCT_ITEMS = "SET_PRODUCT_ITEMS",
    SET_GRID_VIEW = "SET_GRID_VIEW"
}

export type Action<T = any> = {
    type: ActionType;
    payload: T;
};
