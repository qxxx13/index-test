import { ProductItemModel } from "../models/ProductItemModel";

export const DefaultContextValue = {
    isLoading: true,
    productItems: [] as ProductItemModel[],
    gridView: JSON.parse(localStorage.getItem("GridView") || "true"),
    error: ""
};

export type AppContextType = typeof DefaultContextValue;
