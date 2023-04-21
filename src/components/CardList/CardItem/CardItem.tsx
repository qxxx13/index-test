import React, { useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardContent, CardActionArea, Stack } from '@mui/material';

import { ProductItemModel } from '../../../models/ProductItemModel';
import { AppContext } from '../../../context/AppContext';
import { AddToFavorite, StyledBox, StyledCard, StyledCardMedia, StyledStack, TypographyAddress, TypographyPrice, TypographyTitle } from '../../../styles/CardItemStyles';
import { Swiper } from './Swiper/Swiper';

type CardItemProps = {
    data: ProductItemModel;
};

export const CardItem: React.FC<CardItemProps> = ({ data }) => {
    const { state } = useContext(AppContext);
    const isLoading = state.isLoading;
    return (
        <StyledCard elevation={2} sx={{ flexDirection: state.gridView ? 'column' : 'row', width: state.gridView ? 224 : 450 }}>
            <CardActionArea disabled={!isLoading ? false : true} sx={{ width: state.gridView ? 'auto' : 156 }}>
                <StyledCardMedia sx={{ height: state.gridView ? 260 : 134, width: state.gridView ? 'auto' : 156 }}>
                    <Swiper />
                    {data.seen &&
                        <StyledBox>Просмотрено</StyledBox>
                    }
                </StyledCardMedia>
            </CardActionArea>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: state.gridView ? 'auto' : '100%', justifyContent: 'space-between' }}>
                <Stack>
                    <StyledStack>
                        <TypographyPrice>{data.price}</TypographyPrice>
                        <AddToFavorite
                            defaultValue={0}
                            icon={<FavoriteIcon />}
                            emptyIcon={<FavoriteIcon />}
                            max={1}
                        />
                    </StyledStack>
                    <TypographyTitle>{data.title}</TypographyTitle>
                </Stack>

                <StyledStack>
                    <TypographyAddress>{data.address}</TypographyAddress>
                    <TypographyAddress>321</TypographyAddress>
                </StyledStack>
            </CardContent>
        </StyledCard>
    );
};
