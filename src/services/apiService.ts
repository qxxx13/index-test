import axios from "axios";

export const fetchProductData = (page_count: number) => {
    const productData = axios
        .get(`https://testguru.ru/frontend-test/api/v1/items?page=${page_count}`)
        .then((res) => res.data);
    return productData;
};
