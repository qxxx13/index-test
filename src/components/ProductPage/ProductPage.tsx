import React, { useContext, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import { AppContext } from "../../context/AppContext";
import useProductApi from "../../hooks/useProductApi";
import { Swiper } from "../CardList/CardItem/Swiper/Swiper";
import {
    ProductPageBox,
    ProductPageContainer,
    ProductPagePaper,
    ProductPageStack,
} from "../../styles/ProductsPageStyles";

export const ProductPage: React.FC = () => {
    const { id } = useParams();
    const { state } = useContext(AppContext);
    const isDesktop = useMediaQuery("(min-width:900px)");

    const isLoading = state.isLoading;
    const currentProduct = state.currentProduct;

    const { updateCurrentProduct } = useProductApi(Number(id));

    useEffect(() => {
        updateCurrentProduct();
    }, [updateCurrentProduct]);

    return (
        <ProductPageContainer>
            {!isLoading ? (
                <ProductPagePaper elevation={15} isDesktop={isDesktop}>
                    <ProductPageBox>
                        <Swiper product={currentProduct} />
                    </ProductPageBox>
                    <ProductPageStack>
                        <Typography variant="h3">{currentProduct.title}</Typography>
                        <Typography variant="h5">{currentProduct.price}$</Typography>
                        <Typography variant="body1">{currentProduct.description}</Typography>
                    </ProductPageStack>
                </ProductPagePaper>
            ) : (
                <h1>Loading...</h1>
            )}
        </ProductPageContainer>
    );
};
