import React, { useContext, useEffect, useState } from 'react';

import { CardList } from '../CardList/CardList';
import { AppContext } from '../../context/AppContext';
import useProductApi from '../../hooks/useProductApi';
import { ButtonMore, PreloaderBox, StyledPreloaderDeterminate, StyledPreloaderIndeterminate, StyledStack } from '../../styles/MainPageStyles';
import { GoUpButton } from './GoUoButton/GoUpButton';
import { DirectionButtons } from './DirectionButtons/DirectionButtons';
import { Stack, Typography } from '@mui/material';

export const MainPage: React.FC = () => {
    const { state } = useContext(AppContext);

    const isLoading = state.isLoading;

    const products = state.productItems;

    const [page, setPage] = useState(0);
    const [showButton, setShowButton] = useState(true);

    const { updateProducts } = useProductApi(page);

    const fetchNewProduct = () => {
        page < 3 ? setPage(page + 1) : setShowButton(false);
    };

    useEffect(() => {
        updateProducts();
    }, [updateProducts]);

    return (
        <>
            <DirectionButtons />
            <CardList products={products} />
            <StyledStack>
                {isLoading &&
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
                }
                {!isLoading && state.error !== 'error' && <ButtonMore showbutton={showButton} onClick={fetchNewProduct}>Показать еще</ButtonMore>}
                {!isLoading && state.error === 'error' &&
                    <Stack sx={{ m: '38px 0 38px 0' }} alignItems='center'>
                        <Typography variant='body2'>Ошибка при загрузке</Typography>
                        <ButtonMore showbutton={showButton} onClick={fetchNewProduct} iserrorbutton={true}>Повторить попытку</ButtonMore>
                    </Stack>
                }
            </StyledStack>
            <GoUpButton />
        </>
    );
};
