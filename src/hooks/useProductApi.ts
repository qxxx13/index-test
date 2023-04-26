import { useCallback, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ActionType } from "../context/Actions";
import { fetchProductData } from "../services/apiService";
import { ProductItemModel } from "../models/ProductItemModel";

const useProductApi = (page: number) => {
    const { dispatch } = useContext(AppContext);

    const updateProducts = useCallback(async () => {
        dispatch({ type: ActionType.SET_IS_LOADING, payload: true });
        fetchProductData(page)
            .then((products: ProductItemModel[]) =>
                dispatch({
                    type: ActionType.SET_PRODUCT_ITEMS,
                    payload: products,
                })
            )
            .catch(() =>
                dispatch({ type: ActionType.SET_ERROR, payload: "Error" })
            )
            .finally(() =>
                dispatch({ type: ActionType.SET_IS_LOADING, payload: false })
            );
    }, [dispatch, page]);

    return { updateProducts };
};

export default useProductApi;
