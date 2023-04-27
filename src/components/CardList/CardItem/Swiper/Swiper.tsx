import React, { useMemo, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
    BoxImage,
    Stepper,
    SwiperContainer,
} from "../../../../styles/SwiperStyles";
import { ProductItemModel } from "../../../../models/ProductItemModel";

type SwiperProps = {
    product: ProductItemModel;
};

export const Swiper: React.FC<SwiperProps> = ({ product }) => {
    const [activePage, setActivePage] = useState(0);
    const maxPage = product.images.length;

    const handlePageChange = (page: number) => {
        setActivePage(page);
    };

    const SwiperImg = useMemo(() => {
        return product.images.map((img, index) => {
            return <div key={index}>
                {Math.abs(activePage - index) <= 2 ? (
                    <BoxImage src={img} alt="randomImage" />
                ) : null}
            </div>;
        });
    }, []);

    return (
        <SwiperContainer>
            <SwipeableViews
                index={activePage}
                onChangeIndex={handlePageChange}
                enableMouseEvents
            >
                {SwiperImg}
            </SwipeableViews>
            <Stepper
                variant="dots"
                steps={maxPage}
                activeStep={activePage}
                nextButton={""}
                backButton={""}
            />
        </SwiperContainer>
    );
};
