import React, { useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardContent, CardActionArea, Stack } from '@mui/material';

import { ProductItemModel } from '../../../models/ProductItemModel';
import { AppContext } from '../../../context/AppContext';
import { AddToFavorite, SeenDiv, StyledCard, StyledCardMedia, StyledFavoriteIcon, TypographyAddress, TypographyPrice, TypographyTitle } from '../../../styles/CardItemStyles';
import { Swiper } from './Swiper/Swiper';
import { StackRow } from '../../../styles/GlobalStyles';

type CardItemProps = {
    data: ProductItemModel;
};

export const CardItem: React.FC<CardItemProps> = ({ data }) => {
    const { state } = useContext(AppContext);

    return (
        <StyledCard elevation={2} sx={{ flexDirection: state.gridView ? 'column' : 'row', width: state.gridView ? 224 : 450 }}>
            <CardActionArea sx={{ width: state.gridView ? 'auto' : 156 }}>
                <StyledCardMedia sx={{ height: state.gridView ? 260 : 134, width: state.gridView ? 'auto' : 156 }}>
                    <Swiper />
                    {data.seen &&
                        <SeenDiv>Просмотрено</SeenDiv>
                    }
                </StyledCardMedia>
            </CardActionArea>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: state.gridView ? 'auto' : '100%', justifyContent: 'space-between' }}>
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

                <StackRow>
                    <TypographyAddress>{data.address}</TypographyAddress>
                    <TypographyAddress>321</TypographyAddress>
                </StackRow>
            </CardContent>
        </StyledCard>
    );
};
