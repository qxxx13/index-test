import axios from "axios";

export const fetchProductData = (page_count: number) => {
    const productData = axios
        .get(`https://api.escuelajs.co/api/v1/products?offset=${page_count * 10}&limit=10`)
        .then((res) => res.data);
    return productData;
};
