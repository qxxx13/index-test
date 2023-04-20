import React, { useContext, useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { AppContext } from '../../context/AppContext';

import useProductApi from '../../hooks/useProductApi';
import { ButtonMore, StyledStack } from '../../styles/MainPageStyles';

export const MainPage: React.FC = () => {
    const { state } = useContext(AppContext);

    const [visible, setVisible] = useState(true);
    const [page, setPage] = useState(1);

    const { updateProducts } = useProductApi(page);

    const fetchNewProduct = () => {
        page <= 10 ? setPage(page + 1) : setVisible(true);
    };

    useEffect(() => {
        updateProducts();
    }, [updateProducts]);

    return (
        <>
            <CardList products={state.productItems} />
            <StyledStack>
                <ButtonMore sx={{ visibility: visible ? 'initial' : 'hidden' }} onClick={fetchNewProduct}>Показать еще</ButtonMore>
            </StyledStack>

        </>
    );
};
