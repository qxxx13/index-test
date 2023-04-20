import { ProductItemModel } from "../models/ProductItemModel";

export const DefaultContextValue = {
    isLoading: true,
    productItems: [] as ProductItemModel[]
};

export type AppContextType = typeof DefaultContextValue;
