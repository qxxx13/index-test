import { ProductItemModel } from "./ProductItemModel";

export type ProductModel = {
    items: ProductItemModel[];
    page: number;
    pages: number;
    size: number;
    total: number;
};
