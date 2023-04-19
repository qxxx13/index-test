import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Button, Stack, CircularProgress, Checkbox } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { styled } from '@mui/material/styles';

import { CardItem } from './CardItem/CardItem';
import { ProductModel } from '../../models/ProductModel';
import { fetchProductData } from '../../services/apiService';
import { ProductItemModel } from '../../models/ProductItemModel';

const StyledRadio = styled(Checkbox)({

});


export const CardList: React.FC = () => {

    const [data, setData] = useState<ProductModel>();
    const [products, setProducts] = useState<ProductItemModel[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [visible, setVisible] = useState(true);
    const [page, setPage] = useState(1);

    const fetchProduct = useCallback(async () => {
        const result = await (fetchProductData(page)) as ProductModel;
        setData(result);
        setProducts([...products, ...result.items]);
        setIsLoaded(true);
    }, [page]);

    const fetchNewProduct = () => {
        page <= data!.pages ? setPage(page + 1) : setVisible(true);
        setIsLoaded(false);
    };

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    const CardList = useMemo(() => products.map(product => <CardItem key={product.id} data={product} isLoaded />), [products]);

    return (
        <>
            <Stack>
                <StyledRadio icon={<GridViewOutlinedIcon />} checkedIcon={<GridViewOutlinedIcon color='secondary' />} />
            </Stack>
            <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: '30px 30px', justifyContent: 'center', mt: 2, mb: 2 }}>
                {CardList}
            </Container>
            <Stack sx={{ width: '100%' }} alignItems='center'>
                {isLoaded ?
                    <Button sx={{ width: 125, mt: 2, mb: 2, fontSize: 13, color: '#00A0AB', visibility: visible ? 'initial' : 'hidden' }} onClick={fetchNewProduct}>Показать еще</Button>
                    :
                    <CircularProgress />
                }

            </Stack>

        </>
    );
};
