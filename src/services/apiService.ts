import axios from "axios";

export const fetchProductData = (page_count: number) => {
    const productData = axios
        .get(`https://api.escuelajs.co/api/v1/products?offset=${page_count * 10}&limit=10`)
        .then((res) => res.data);
    return productData;
};

export const fetchProductById = (id: string | undefined) => {
    const productById = axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then(res => res.data)
    return productById;
}
