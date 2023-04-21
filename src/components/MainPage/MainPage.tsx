import React, { useContext, useEffect, useState } from 'react';

import { CardList } from '../CardList/CardList';
import { AppContext } from '../../context/AppContext';
import useProductApi from '../../hooks/useProductApi';
import { ButtonMore, PreloaderBox, StyledPreloaderDeterminate, StyledPreloaderIndeterminate, StyledStack } from '../../styles/MainPageStyles';
import { GoUpButton } from './GoUoButton/GoUpButton';
import { DirectionButtons } from './DirectionButtons/DirectionButtons';

export const MainPage: React.FC = () => {
    const { state } = useContext(AppContext);
    const isLoading = state.isLoading;

    const [page, setPage] = useState(1);
    const [showButton, setShowButton] = useState(true);

    const { updateProducts } = useProductApi(page);

    const fetchNewProduct = () => {
        page < 10 ? setPage(page + 1) : setShowButton(false);
    };

    useEffect(() => {
        updateProducts();
    }, [updateProducts]);

    return (
        <>
            <DirectionButtons />
            <CardList products={state.productItems} />
            <StyledStack>
                {isLoading ?
                    <PreloaderBox>
                        <StyledPreloaderDeterminate
                            variant="determinate"
                            size={40}
                            thickness={4}
                            value={100}
                        />
                        <StyledPreloaderIndeterminate
                            variant="indeterminate"
                            disableShrink
                            size={40}
                            thickness={4}
                        />
                    </PreloaderBox>

                    :
                    <ButtonMore onClick={fetchNewProduct} sx={{ display: showButton ? 'flex' : 'none' }}>Показать еще</ButtonMore>
                }
            </StyledStack>
            <GoUpButton />
        </>
    );
};
