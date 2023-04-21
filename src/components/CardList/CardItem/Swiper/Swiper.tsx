import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { BoxImage, Stepper, SwiperContainer } from '../../../../styles/SwiperStyles';
import { images } from './images';

export const Swiper: React.FC = () => {
    const [activePage, setActivePage] = useState(0);
    const maxPage = images.length;

    const handlePageChange = (page: number) => {
        setActivePage(page);
    };

    return (
        <SwiperContainer>
            <SwipeableViews index={activePage} onChangeIndex={handlePageChange} enableMouseEvents>
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activePage - index) <= 2 ? (
                            <BoxImage
                                src={step.imgPath}
                                alt='123'
                            />
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>
            <Stepper
                variant='dots'
                steps={maxPage}
                activeStep={activePage}
                nextButton={''}
                backButton={''}
            />
        </SwiperContainer>
    );
};
