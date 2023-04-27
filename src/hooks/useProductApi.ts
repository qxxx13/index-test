import { useCallback, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ActionType } from "../context/Actions";
import { fetchProductData } from "../services/apiService";
import { ProductItemModel } from "../models/ProductItemModel";

const useProductApi = (page: number) => {
    const { dispatch } = useContext(AppContext);

    const getCurrentProduct = (products: ProductItemModel[]) => {
        const currentProduct = products.find((product) => product.id === page);
        return currentProduct;
    };

    const updateProducts = useCallback(async () => {
        dispatch({ type: ActionType.SET_IS_LOADING, payload: true });
        fetchProductData(page)
            .then((products: ProductItemModel[]) =>
                dispatch({
                    type: ActionType.SET_PRODUCT_ITEMS,
                    payload: products,
                })
            )
            .catch(() => dispatch({ type: ActionType.SET_ERROR, payload: "error" }))
            .finally(() => dispatch({ type: ActionType.SET_IS_LOADING, payload: false }));
    }, [dispatch, page]);

    const updateCurrentProduct = useCallback(() => {
        dispatch({ type: ActionType.SET_IS_LOADING, payload: true });

        const currentPage = Math.trunc(page / 10) - 2;

        console.log(currentPage);

        fetchProductData(currentPage)
            .then((products) => {
                const currentProduct = getCurrentProduct(products);
                dispatch({
                    type: ActionType.SET_CURRENT_PRODUCT,
                    payload: currentProduct,
                });
            })
            .catch(() => dispatch({ type: ActionType.SET_ERROR, payload: "error" }))
            .finally(() => dispatch({ type: ActionType.SET_IS_LOADING, payload: false }));
    }, [dispatch, page]);

    return { updateProducts, updateCurrentProduct };
};

export default useProductApi;
