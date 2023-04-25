import { useCallback, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ActionType } from "../context/Actions";
import { fetchProductData } from "../services/apiService";

const useProductApi = (page: number) => {
    const { dispatch } = useContext(AppContext);

    const updateProducts = useCallback(async () => {
        dispatch({ type: ActionType.SET_IS_LOADING, payload: true });
        fetchProductData(page)
            .then((data) => dispatch({ type: ActionType.SET_PRODUCT_ITEMS, payload: data.items }))
            .catch(() => dispatch({ type: ActionType.SET_ERROR, payload: "Error" }))
            .finally(() => dispatch({ type: ActionType.SET_IS_LOADING, payload: false }));
    }, [dispatch, page]);

    return { updateProducts };
};

export default useProductApi;
