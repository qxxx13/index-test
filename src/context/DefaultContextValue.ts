import { ProductItemModel } from "../models/ProductItemModel";

export const DefaultContextValue = {
    isLoading: true,
    productItems: [] as ProductItemModel[],
    gridView: true
};

export type AppContextType = typeof DefaultContextValue;
