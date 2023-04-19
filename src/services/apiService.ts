import axios from "axios";

export const fetchProductData = (page_count: number) => {
    const productData = axios
        .get(`https://testguru.ru/frontend-test/api/v1/items?page=${page_count}`)
        .then((res) => res.data);
    return productData;
};

export const fetchRandomImage = () => {
    const image = axios.get("https://picsum.photos/400/600").then((res) => res.data);
    return image;
};
