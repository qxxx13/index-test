import React, { useContext, useEffect } from "react";
import { Skeleton } from "@mui/material";
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
import { StyledTypography } from "../../styles/GlobalStyles";

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
                        <StyledTypography variant="h3">{currentProduct.title}</StyledTypography>
                        <StyledTypography variant="h5">{currentProduct.price}$</StyledTypography>
                        <StyledTypography variant="body1">{currentProduct.description}</StyledTypography>
                    </ProductPageStack>
                </ProductPagePaper>
            ) : (
                <h1>Loading...</h1>
            )}
        </ProductPageContainer>
    );
};
