import { useCallback, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ActionType } from "../context/Actions";
import { fetchProductData } from "../services/apiService";
import { ProductModel } from "../models/ProductModel";

const useProductApi = (page: number) => {
    const { state, dispatch } = useContext(AppContext);

    const updateProducts = useCallback(async () => {
        dispatch({ type: ActionType.SET_IS_LOADING, payload: true });
        const data = (await fetchProductData(page)) as unknown as ProductModel;
        if (data.items !== state.productItems) {
            dispatch({ type: ActionType.SET_PRODUCT_ITEMS, payload: data.items });
        }
        dispatch({ type: ActionType.SET_IS_LOADING, payload: false });
    }, [dispatch, page]);

    return { updateProducts };
};

export default useProductApi;
