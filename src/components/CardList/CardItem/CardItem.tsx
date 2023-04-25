import React, { useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Stack } from '@mui/material';

import { ProductItemModel } from '../../../models/ProductItemModel';
import { AppContext } from '../../../context/AppContext';
import { AddToFavorite, StyledCard, StyledCardActionArea, StyledCardContent, StyledCardMedia, StyledFavoriteIcon, TypographyPrice, TypographyTitle } from '../../../styles/CardItemStyles';
import { Swiper } from './Swiper/Swiper';
import { StackRow } from '../../../styles/GlobalStyles';

type CardItemProps = {
    data: ProductItemModel;
};

export const CardItem: React.FC<CardItemProps> = ({ data }) => {
    const { state } = useContext(AppContext);

    return (
        <StyledCard gridView={state.gridView} elevation={2}>
            <StyledCardActionArea gridView={state.gridView}>
                <StyledCardMedia gridView={state.gridView}>
                    <Swiper product={data}/>
                </StyledCardMedia>
            </StyledCardActionArea>
            <StyledCardContent gridView={state.gridView}>
                <Stack>
                    <StackRow>
                        <TypographyPrice>{data.price}</TypographyPrice>
                        <AddToFavorite
                            defaultValue={0}
                            icon={<StyledFavoriteIcon />}
                            checkedIcon={<FavoriteIcon sx={{ color: '#00A0AB' }} />}
                        />
                    </StackRow>
                    <TypographyTitle>{data.title}</TypographyTitle>
                </Stack>
            </StyledCardContent>
        </StyledCard>
    );
};
