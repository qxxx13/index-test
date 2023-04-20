export enum ActionType {
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_PRODUCT_ITEMS = "SET_PRODUCT_ITEMS"
}

export type Action<T = any> = {
    type: ActionType;
    payload: T;
};
