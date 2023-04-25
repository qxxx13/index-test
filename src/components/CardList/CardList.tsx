import React, { useContext, useMemo } from 'react';

import { CardItem } from './CardItem/CardItem';
import { ProductItemModel } from '../../models/ProductItemModel';
import { AppContext } from '../../context/AppContext';
import { CardItemSkeleton } from './CardItem/CardItemSkeleton';
import { CardListContainer } from '../../styles/CardListStyles';

type CardListProps = {
    products: ProductItemModel[];
};

export const CardList: React.FC<CardListProps> = ({ products }) => {
    const { state } = useContext(AppContext);
    const isLoading = state.isLoading;

    const CardList = useMemo(() => products.map(product => <CardItem key={product.id} data={product} />), [products]);
    const CardListSkeleton = useMemo(() => [...Array(20)].map(() => <CardItemSkeleton />), []);

    return (
        <CardListContainer>
            {CardList}
            {isLoading && products.length === 0 && CardListSkeleton}
        </CardListContainer>
    );
};
